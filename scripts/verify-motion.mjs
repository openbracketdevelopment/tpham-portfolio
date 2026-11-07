import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const base = process.argv[2] ?? "http://localhost:3000";
const chromePath = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const profile = await mkdtemp(join(tmpdir(), "portfolio-check-"));
const chrome = spawn(chromePath, [
  "--headless", "--no-first-run", "--no-default-browser-check", "--hide-scrollbars",
  "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });
let socket;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = "";
    chrome.stderr.on("data", chunk => {
      output += chunk;
      const match = output.match(/DevTools listening on (ws:\/\/\S+)/);
      if (match) resolve(match[1]);
    });
    chrome.once("error", reject);
    chrome.once("exit", code => reject(new Error(`Chrome exited before readiness: ${code}`)));
  });
  socket = new WebSocket(endpoint);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const requests = new Map();
  socket.onmessage = event => {
    const message = JSON.parse(event.data);
    const request = requests.get(message.id);
    if (!request) return;
    requests.delete(message.id);
    if (message.error) request.reject(new Error(JSON.stringify(message.error)));
    else request.resolve(message.result);
  };
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const requestId = ++id;
    requests.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params, sessionId }));
  });
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const command = (method, params) => send(method, params, sessionId);
  const evaluate = async expression => {
    const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  await command("Page.enable");
  const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const issues=[];
  socket.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')issues.push(m.params.exceptionDetails);if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')issues.push(m.params.args.map(a=>a.value||a.description).join(' '));});
  await command('Runtime.enable');


  await command('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await command('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
  await command('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:5});
  await command('Fetch.enable',{patterns:[{urlPattern:'*abstract-bg*'}]});
  socket.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Fetch.requestPaused')setTimeout(()=>command('Fetch.continueRequest',{requestId:m.params.requestId}),3500);});
  await command('Page.navigate',{url:new URL('/',base).href}); await pause(1000);
  assert.equal(await evaluate(`document.documentElement.hasAttribute('data-intro-pending')`),true);
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('#page-content')).visibility`),'hidden');
  assert.equal(await evaluate(`document.querySelector('[data-intro-overlay]').hidden`),false);
  await pause(1500);
  assert.equal(await evaluate(`document.documentElement.hasAttribute('data-intro-pending')`),true,'loader must wait for delayed hero');
  for(let i=0;i<100;i++){if(await evaluate(`sessionStorage.getItem('portfolio:intro-seen:v2')==='1'`))break;await pause(100);}
  assert.equal(await evaluate(`document.querySelector('[data-intro-overlay]').hidden`),true);
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('#page-content')).visibility`),'visible');
  assert.equal(await evaluate(`document.body.textContent.includes('INITIALIZING EXPERIENCE')`),false);
  assert.equal(await evaluate(`document.body.textContent.includes('✳')`),false);
  assert.equal(await evaluate(`document.querySelectorAll('footer a[href^="mailto:"]').length`),1);
  assert.equal(await evaluate(`document.querySelector('footer [data-motion-button] a').getAttribute('href')`),'/connect');
  await evaluate(`window.scrollTo({top:500,behavior:'instant'})`); await pause(350);
  assert.equal(await evaluate(`document.querySelector('header').dataset.scrollHidden`),'true');
  await evaluate(`window.scrollTo({top:350,behavior:'instant'})`); await pause(350);
  assert.equal(await evaluate(`document.querySelector('header').dataset.scrollHidden`),'false');
  await command('Page.navigate',{url:new URL('/about',base).href});await pause(2300);
  assert.equal(await evaluate(`document.querySelector('header').dataset.lightSurface`),'true');
  await evaluate(`window.scrollTo({top:800,behavior:'instant'})`);await pause(350);
  await evaluate(`window.scrollTo({top:700,behavior:'instant'})`);await pause(350);
  assert.equal(await evaluate(`document.querySelector('header').dataset.lightSurface`),'false');
  assert.equal(await evaluate(`document.querySelector('header').dataset.scrollHidden`),'false');
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('header svg')).getPropertyValue('--logo-shape-color').trim()`),'');
  await evaluate(`window.scrollTo({top:0,behavior:'instant'})`);await pause(350);
  await evaluate(`document.querySelector('button[aria-controls="site-navigation"]').click()`);await pause(350);
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('header')).getPropertyValue('--logo-shape-color').trim()`),'#fff');
  await command('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape'});await pause(600);
  assert.equal(await evaluate(`document.querySelector('button[aria-controls]').getAttribute('aria-expanded')`),'false');
  assert.equal(await evaluate(`getComputedStyle(document.querySelector('#site-navigation')).visibility`),'hidden');
  await command('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await evaluate(`sessionStorage.clear()`);
  await command('Page.navigate',{url:new URL('/',base).href}); await pause(1500);
  assert.equal(await evaluate(`document.documentElement.hasAttribute('data-intro-pending')`),false);
  assert.equal(await evaluate(`document.querySelector('[data-intro-overlay]').hidden`),true);
  assert.equal(await evaluate(`document.querySelector('h1').textContent.includes('Software Engineer')`),true);
  assert.equal(await evaluate(`document.querySelectorAll('script[src*="fontawesome"]').length`),0);
  assert.deepEqual(issues,[]);
  console.log('PASS delayed-asset loader gate, no initial page glimpse, session completion, SVG marks, footer contacts/playground CTA, header scroll direction, About contrast, Escape, reduced motion, and removal of the unused third-party script; no browser errors.');
} finally {
  socket?.close();
  if (chrome.exitCode === null) {
    const exited = new Promise(resolve => chrome.once("exit", resolve));
    chrome.kill("SIGKILL");
    await exited;
  }
  await rm(profile, { recursive: true, force: true });
}
