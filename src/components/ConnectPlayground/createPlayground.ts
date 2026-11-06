import * as THREE from "three";
import { gsap } from "gsap";
import { destinations, type GameState } from "./targets";

type Callbacks = {
  onState: (state: GameState) => void;
  onSelect: (index: number) => void;
  onAim: (index: number | null, power: number) => void;
  onShot: (hit: boolean) => void;
};
export type Playground = { aimAt: (index: number) => void; shootAt: (index: number) => void; reset: () => void; dispose: () => void };

export function createPlayground(host: HTMLDivElement, callbacks: Callbacks): Playground {
  const coarsePointer=matchMedia("(pointer: coarse)").matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, coarsePointer ? 1.5 : 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute("role", "application");
  canvas.setAttribute("aria-label", "Connection court. Drag the projectile backward with your finger or mouse, then release. Select the mailbox for a paper football, hoop for a basketball, or dartboard for a dart. Arrow keys select a target; Enter throws.");
  canvas.setAttribute("aria-describedby", "playground-help");
  host.prepend(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 2.8, 9.2);
  camera.lookAt(0, 1.15, -1.8);
  const world = new THREE.Group();
  scene.add(world);
  const ambient = new THREE.HemisphereLight(0xf4f4f4, 0x242424, 2.1);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffecd5, 4);
  sun.position.set(-5, 12, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -9; sun.shadow.camera.right = 9;
  sun.shadow.camera.top = 9; sun.shadow.camera.bottom = -9;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x7fe9e0, 1.8);
  rim.position.set(6, 4, -5); scene.add(rim);

  const material = (color: number, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness, flatShading: true });
  const ivory = material(0xe7dfca);
  const dark = material(0x272c29);
  const red = material(0xe52215);
  const teal = material(0x70cbbb);
  const black = material(0x0c100e);
  const metal = material(0x89948b, 0.65);
  const mesh = (geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x: number, y: number, z: number) => {
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(x, y, z); object.castShadow = true; object.receiveShadow = true;
    parent.add(object); return object;
  };
  const box = (w: number, h: number, d: number, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => mesh(new THREE.BoxGeometry(w, h, d), mat, parent, x, y, z);
  const cylinder = (r1: number, r2: number, h: number, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0, segments = 12) => mesh(new THREE.CylinderGeometry(r1, r2, h, segments), mat, parent, x, y, z);
  const line = (points: THREE.Vector3[], color: number, parent: THREE.Object3D, opacity = 1) => {
    const object = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity }));
    parent.add(object); return object;
  };

  // A compact, architectural court. All props are procedural low-poly geometry.
  box(12.4, 0.35, 9.8, material(0x090909), world, 0, -0.35, 0.6);
  box(12, 0.25, 9.5, material(0x151515), world, 0, -0.12, 0.6);
  line([[-5.5,0.02,-3.5],[5.5,0.02,-3.5],[5.5,0.02,4.7],[-5.5,0.02,4.7],[-5.5,0.02,-3.5]].map(p=>new THREE.Vector3(...p as [number,number,number])), 0xd9d6bd, world, 0.5);
  line([new THREE.Vector3(-5.5,0.02,1.5),new THREE.Vector3(5.5,0.02,1.5)], 0xd9d6bd, world, 0.25);
  const centerRing = mesh(new THREE.RingGeometry(1.2,1.22,64), new THREE.MeshBasicMaterial({color:0xc5cbb0,transparent:true,opacity:0.35,side:THREE.DoubleSide}),world,0,0.025,1.5);
  centerRing.rotation.x=-Math.PI/2;

  const targets = [-3.6,0,3.6].map(x=>{const group=new THREE.Group();group.position.set(x,0,-1.9);world.add(group);return group;});
  const hitPoints = [new THREE.Vector3(-3.6,1.65,-1.4),new THREE.Vector3(0,2.55,-1.35),new THREE.Vector3(3.6,2.2,-1.73)];
  const floorRings = targets.map(group=>{
    const ring = mesh(new THREE.TorusGeometry(0.8,0.016,4,48),new THREE.MeshBasicMaterial({color:0x7fe9e0,transparent:true,opacity:0.25}),group,0,0.05,0);
    ring.rotation.x=Math.PI/2;return ring;
  });

  // 01 / The inbox: arched mailbox, hinged door, post and tiny red flag.
  const mail = targets[0];
  box(0.95,0.16,0.85,dark,mail,0,0.08,0);
  cylinder(0.09,0.12,1.05,metal,mail,0,0.65,0);
  const arch=new THREE.Shape();arch.moveTo(-0.65,0);arch.lineTo(0.65,0);arch.lineTo(0.65,0.55);arch.absarc(0,0.55,0.65,0,Math.PI,false);arch.lineTo(-0.65,0);
  const roofProfile=new THREE.Shape();
  roofProfile.absarc(0,0.55,0.65,0,Math.PI,false);
  roofProfile.lineTo(-0.57,0.55);roofProfile.absarc(0,0.55,0.57,Math.PI,0,true);roofProfile.closePath();
  const roofMaterial=teal.clone();roofMaterial.side=THREE.DoubleSide;
  mesh(new THREE.ExtrudeGeometry(roofProfile,{depth:0.9,bevelEnabled:false}),roofMaterial,mail,0,1.12,-0.45);
  box(0.08,0.55,0.9,teal,mail,-0.61,1.395,0);
  box(0.08,0.55,0.9,teal,mail,0.61,1.395,0);
  box(1.3,0.08,0.98,teal,mail,0,1.12,0);
  mesh(new THREE.ShapeGeometry(arch),dark,mail,0,1.12,-0.46);
  const door=new THREE.Group();door.position.set(0,1.13,0.51);door.rotation.x=0;mail.add(door);
  const doorMaterial=ivory.clone();doorMaterial.side=THREE.DoubleSide;
  mesh(new THREE.ShapeGeometry(arch),doorMaterial,door,0,0,0.01);
  box(0.2,0.055,0.08,metal,door,0,0.16,0.06);
  for(let i=0;i<3;i++){
    const letter=new THREE.Group();letter.position.set((i-1)*0.04,1.22+i*0.075,-0.08+i*0.07);letter.rotation.y=(i-1)*0.12;mail.add(letter);
    box(0.9,0.045,0.55,ivory,letter);
    line([new THREE.Vector3(-0.4,0.025,-0.23),new THREE.Vector3(0,0.025,0.08),new THREE.Vector3(0.4,0.025,-0.23)],0x7b8376,letter);
  }
  const upright=new THREE.Group();upright.position.set(-0.06,1.52,-0.29);upright.rotation.z=0.13;mail.add(upright);
  box(0.78,0.4,0.035,ivory,upright);
  line([new THREE.Vector3(-0.35,0.16,0.021),new THREE.Vector3(0,-0.05,0.021),new THREE.Vector3(0.35,0.16,0.021)],0x7b8376,upright);
  box(0.04,0.7,0.06,metal,mail,0.73,1.85,0);
  box(0.32,0.21,0.06,red,mail,0.86,2.08,0);
  const envelope=box(0.45,0.27,0.05,ivory,world,-4.65,0.1,0.5);envelope.rotation.set(-Math.PI/2,0,0.2);
  line([new THREE.Vector3(-0.2,0.12,0.027),new THREE.Vector3(0,-0.03,0.027),new THREE.Vector3(0.2,0.12,0.027)],0x596552,envelope);

  // 02 / Nothing but net: miniature hoop with an eight-strand wire net.
  const hoop=targets[1];
  box(1,0.16,0.9,dark,hoop,0,0.08,-0.35);
  cylinder(0.06,0.08,2.7,metal,hoop,0,1.4,-0.45);
  box(1.85,1.25,0.13,ivory,hoop,0,2.95,-0.45);
  line([[-0.38,2.6,-0.37],[0.38,2.6,-0.37],[0.38,3.08,-0.37],[-0.38,3.08,-0.37],[-0.38,2.6,-0.37]].map(p=>new THREE.Vector3(...p as [number,number,number])),0xb91910,hoop);
  const basket=mesh(new THREE.TorusGeometry(0.5,0.055,8,32),red,hoop,0,2.55,0.55);basket.rotation.x=Math.PI/2;
  const net=new THREE.Group();net.position.set(0,2.55,0.55);hoop.add(net);
  for(let i=0;i<12;i++){
    const a=i*Math.PI/6;
    line([new THREE.Vector3(Math.cos(a)*0.48,-0.05,Math.sin(a)*0.48),new THREE.Vector3(Math.cos(a+0.3)*0.25,-0.63,Math.sin(a+0.3)*0.25)],0xe7e5d7,net,0.85);
  }
  for(const [radius,y] of [[0.4,-0.22],[0.33,-0.43],[0.25,-0.63]]){
    const ring=mesh(new THREE.TorusGeometry(radius,0.011,4,24),ivory,net,0,y,0);ring.rotation.x=Math.PI/2;
  }

  // 03 / Right on target: concentric dartboard on a freestanding easel.
  const dart=targets[2];
  box(1.3,0.15,0.8,dark,dart,0,0.08,0);
  cylinder(0.075,0.09,2.2,metal,dart,0,1.15,-0.1);
  const board=cylinder(0.9,0.9,0.15,black,dart,0,2.2,0,32);board.rotation.x=Math.PI/2;
  for(let i=0;i<16;i++){
    const segment=mesh(new THREE.RingGeometry(0.19,0.77,1,1,i*Math.PI/8,Math.PI/8),i%2?ivory:dark,dart,0,2.2,0.09);
    segment.material.side=THREE.DoubleSide;
  }
  for(const radius of [0.4,0.73])mesh(new THREE.RingGeometry(radius,radius+0.045,48),teal,dart,0,2.2,0.11);
  mesh(new THREE.CircleGeometry(0.145,24),red,dart,0,2.2,0.12);
  mesh(new THREE.RingGeometry(0.83,0.88,48),ivory,dart,0,2.2,0.1);

  // A few tiny art-directed details, kept well clear of the throwing lane.
  const cone=new THREE.Group();world.add(cone);cone.position.set(-5,0,3.1);
  box(0.5,0.08,0.5,dark,cone,0,0.04,0);cylinder(0.02,0.2,0.55,red,cone,0,0.35,0,8);
  box(1.35,0.16,0.55,teal,world,4.8,0.48,2.9);
  box(0.12,0.4,0.4,dark,world,4.35,0.2,2.9);box(0.12,0.4,0.4,dark,world,5.2,0.2,2.9);

  const origin=new THREE.Vector3(0,0.65,3.6);
  const paper=new THREE.Group();paper.position.copy(origin);world.add(paper);
  const paperModel=new THREE.Group();paper.add(paperModel);
  const triangle=new THREE.Shape();triangle.moveTo(-0.56,-0.36);triangle.lineTo(0.56,-0.36);triangle.lineTo(0,0.65);triangle.closePath();
  const football=mesh(new THREE.ExtrudeGeometry(triangle,{depth:0.13,bevelEnabled:true,bevelSize:0.025,bevelThickness:0.025,bevelSegments:1,steps:1}),red,paperModel,0,0,0);
  line([new THREE.Vector3(0,0.58,0.17),new THREE.Vector3(-0.12,-0.26,0.17),new THREE.Vector3(0.49,-0.31,0.17)],0xff8b7b,paperModel,0.55);
  const basketball=new THREE.Group();paper.add(basketball);
  const ballMaterial=new THREE.MeshStandardMaterial({color:0xd96713,roughness:0.95,metalness:0,flatShading:false});
  const textures:THREE.Texture[]=[];
  const pebbleCanvas=document.createElement('canvas');pebbleCanvas.width=256;pebbleCanvas.height=128;
  const pebble=pebbleCanvas.getContext('2d');
  if(pebble){
    pebble.fillStyle='#777';pebble.fillRect(0,0,256,128);
    for(let y=0;y<128;y+=4)for(let x=0;x<256;x+=4){
      pebble.fillStyle=`rgb(${130+Math.floor(Math.random()*65)},${130+Math.floor(Math.random()*65)},${130+Math.floor(Math.random()*65)})`;
      pebble.beginPath();pebble.arc(x+(y%8?2:0),y,1.25,0,Math.PI*2);pebble.fill();
    }
    const texture=new THREE.CanvasTexture(pebbleCanvas);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(3,3);
    ballMaterial.bumpMap=texture;ballMaterial.bumpScale=0.014;textures.push(texture);
  }
  mesh(new THREE.SphereGeometry(0.44,48,32),ballMaterial,basketball,0,0,0);
  const seamMaterial=new THREE.MeshStandardMaterial({color:0x211a13,roughness:1});
  for(const axis of ['x','y'] as const){
    const seam=mesh(new THREE.TorusGeometry(0.442,0.006,4,96),seamMaterial,basketball,0,0,0);
    seam.rotation[axis]=Math.PI/2;
  }
  // Bowed channels wrap around the panels, rather than simple beach-ball bands.
  for(const sign of [-1,1]){
    const points=Array.from({length:128},(_,i)=>{
      const angle=i/128*Math.PI*2,s=Math.sin(angle),panel=0.35+0.45*Math.abs(s);
      return new THREE.Vector3(sign*0.442*s*panel,0.442*Math.cos(angle),0.442*s*Math.sqrt(1-panel*panel));
    });
    mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points,true),128,0.006,4,true),seamMaterial,basketball,0,0,0);
  }
  const dartModel=new THREE.Group();dartModel.position.y=0.15;paper.add(dartModel);
  cylinder(0.025,0.025,0.95,black,dartModel,0,-0.12,0);
  cylinder(0.062,0.05,0.42,metal,dartModel,0,0.21,0);
  cylinder(0,0.026,0.32,metal,dartModel,0,0.58,0);
  for(let i=0;i<4;i++)cylinder(0.064,0.064,0.025,dark,dartModel,0,0.08+i*0.08,0);
  const fin=new THREE.Shape();fin.moveTo(0,-0.62);fin.lineTo(0.24,-0.72);fin.lineTo(0.19,-0.26);fin.lineTo(0,-0.2);fin.closePath();
  for(let i=0;i<4;i++){
    const wing=mesh(new THREE.ExtrudeGeometry(fin,{depth:0.018,bevelEnabled:false}),red,dartModel,0,0,0);
    wing.rotation.y=i*Math.PI/2;
  }
  const models=[paperModel,basketball,dartModel];
  const modelSizes=[1,1,0.8];
  basketball.visible=false;dartModel.visible=false;
  paper.rotation.set(-0.72,0,0.12);
  const shadow=mesh(new THREE.CircleGeometry(0.6,24),new THREE.MeshBasicMaterial({color:0x0b100b,transparent:true,opacity:0.22,depthWrite:false}),world,0,0.04,3.6);shadow.rotation.x=-Math.PI/2;
  const dots=Array.from({length:20},()=>{const dot=mesh(new THREE.SphereGeometry(0.035,6,4),new THREE.MeshBasicMaterial({color:0xa2f3d7,transparent:true,opacity:0.65}),world,0,0,0);dot.visible=false;return dot;});
  const particles=Array.from({length:24},(_,i)=>{const object=mesh(new THREE.TetrahedronGeometry(0.055),i%3===0?red:i%3===1?ivory:teal,world,0,0,0);object.visible=false;return {object,velocity:new THREE.Vector3(),age:0};});

  let width=0,height=0,frame=0,disposed=false,dragging=false,selected=0,sceneVisible=true;
  let state:GameState="ready";
  let projectileIndex=-1;
  let activePointer:number|null=null;
  let morph:gsap.core.Tween|undefined;
  let flight:gsap.core.Tween|undefined;
  let landing:gsap.core.Timeline|undefined;
  let doorTween:gsap.core.Tween|undefined;
  let navTimer:number|undefined;
  let last=performance.now();
  let lastRender=0;
  let candidate:number|null=null;
  const motion=gsap.context(()=>{});
  const raycaster=new THREE.Raycaster();
  const plane=new THREE.Plane(new THREE.Vector3(0,1,0),-origin.y);
  const pointer=new THREE.Vector2();
  const end=hitPoints[0].clone();
  const labels=destinations.map((_,i)=>host.querySelector<HTMLElement>(`[data-target-label="${i}"]`));
  const hint=host.querySelector<HTMLElement>('[data-pull-hint]');
  const preference=matchMedia('(prefers-reduced-motion: reduce)');
  const setState=(value:GameState)=>{state=value;callbacks.onState(value);host.dataset.throwState=value;};
  const curveTo=(finish:THREE.Vector3,start=origin)=>new THREE.QuadraticBezierCurve3(start.clone(),new THREE.Vector3((start.x+finish.x)/2,Math.max(start.y,finish.y)+3.3,(start.z+finish.z)/2),finish.clone());
  const preview=()=>{const curve=curveTo(end,paper.position);dots.forEach((dot,i)=>{dot.position.copy(curve.getPoint((i+1)/22));dot.visible=true;(dot.material as THREE.MeshBasicMaterial).color.set(candidate===null?0xe4d8ba:0x7fe9e0);});};
  const setProjectile=(index:number)=>{
    if(projectileIndex===index)return;
    projectileIndex=index;morph?.kill();
    models.forEach((model,i)=>{model.visible=i===index;model.scale.setScalar(modelSizes[i]);});
    host.dataset.projectile=destinations[index].projectile;
    const size=modelSizes[index];
    motion.add(()=>{morph=gsap.fromTo(models[index].scale,{x:size*0.8,y:size*0.8,z:size*0.8},{x:size,y:size,z:size,duration:0.22,ease:'power2.out'});});
  };
  const select=(index:number)=>{setProjectile(index);selected=index;callbacks.onSelect(index);floorRings.forEach((r,i)=>(r.material as THREE.MeshBasicMaterial).opacity=i===index?0.75:0.2);};
  const clearNavigation=()=>{if(navTimer!==undefined)window.clearTimeout(navTimer);navTimer=undefined;};
  const reset=()=>{
    clearNavigation();flight?.kill();landing?.kill();doorTween?.kill();dragging=false;
    if(activePointer!==null&&canvas.hasPointerCapture(activePointer))canvas.releasePointerCapture(activePointer);
    activePointer=null;canvas.style.touchAction='none';
    paper.visible=true;paper.position.copy(origin);paper.rotation.set(-0.72,0,0.12);paper.scale.setScalar(1);
    shadow.visible=true;shadow.position.set(origin.x,0.04,origin.z);shadow.scale.setScalar(1);
    net.scale.setScalar(1);dartModel.rotation.set(0,0,0);host.removeAttribute("data-landing-phase");
    dots.forEach(dot=>dot.visible=false);candidate=null;callbacks.onAim(null,0);setState('ready');
    motion.add(()=>{doorTween=gsap.to(door.rotation,{x:0,duration:0.25,ease:"power2.out"});});
  };
  const celebrate=(index:number)=>{
    particles.forEach(p=>{p.object.position.copy(hitPoints[index]);p.object.visible=true;p.age=0;p.velocity.set((Math.random()-0.5)*3,2+Math.random()*3,(Math.random()-0.5)*3);});
    motion.add(()=>{
      gsap.to(floorRings[index].scale,{x:1.2,y:1.2,z:1.2,duration:0.2,yoyo:true,repeat:1,ease:'power2.out'});
    });
  };
  const settle=(index:number,stickQuaternion?:THREE.Quaternion)=>{
    shadow.visible=index===1;
    motion.add(()=>{
      landing=gsap.timeline({onComplete:()=>{
        callbacks.onShot(true);celebrate(index);setState('hit');host.dataset.landingPhase='complete';
        navTimer=window.setTimeout(()=>{if(!disposed&&state==='hit')window.location.assign(destinations[index].href);},900);
      }});
      if(index===0){
        host.dataset.landingPhase='mailbox-entry';
        landing.to(paper.rotation,{x:-Math.PI/2,y:0,z:-0.12,duration:0.25,ease:'power2.out'},0)
          .to(paper.position,{x:-3.6,y:1.62,z:-1.88,duration:0.65,ease:'power2.inOut'},0)
          .to(paper.position,{y:1.4,duration:0.2,ease:'power2.in'},0.65)
          .call(()=>{host.dataset.landingPhase='mailbox-closing';},[],0.95)
          .to(door.rotation,{x:0,duration:0.45,ease:'power2.inOut'},0.95);
      }else if(index===1){
        host.dataset.landingPhase='net-swish';
        landing.to(net.scale,{x:1.8,y:1.15,z:1.8,duration:0.2,ease:'power2.out'},0)
          .to(paper.position,{y:0.44,duration:0.68,ease:p=>0.3865*p+0.6135*p*p},0)
          .to(net.scale,{x:1,y:1,z:1,duration:0.65,ease:'elastic.out(1,0.3)'},0.5)
          .call(()=>{host.dataset.landingPhase='bounce';},[],0.68)
          .to(paper.position,{z:-0.85,duration:0.18,ease:'none'},0.5)
          .to(paper.position,{y:1.2,z:-0.4,duration:0.32,ease:'power2.out'},0.68)
          .to(paper.position,{y:0.44,z:0,duration:0.32,ease:'power2.in'},1)
          .to(paper.position,{y:0.76,z:0.2,duration:0.23,ease:'power2.out'},1.32)
          .to(paper.position,{y:0.44,z:0.4,duration:0.23,ease:'power2.in'},1.55)
          .to(paper.rotation,{x:'+=6.28',z:'+=0.8',duration:1.78,ease:'none'},0)
          .to(paper.scale,{x:1.06,y:0.88,z:1.06,duration:0.06},0.65)
          .to(paper.scale,{x:1,y:1,z:1,duration:0.12,ease:'power2.out'},0.71);
      }else{
        host.dataset.landingPhase='dart-stick';
        if(stickQuaternion)paper.quaternion.copy(stickQuaternion);
        landing.fromTo(dartModel.rotation,{y:0.12},{y:0,duration:0.6,ease:'elastic.out(1,0.18)'});
      }
    });
  };
  const launch=(finish:THREE.Vector3,hit:number|null)=>{
    if(state==='flying'||disposed)return;
    clearNavigation();dragging=false;canvas.style.touchAction='none';dots.forEach(dot=>dot.visible=false);
    if(hit!==null)select(hit);
    setState('flying');callbacks.onAim(hit,0);
    const stickDirection=new THREE.Vector3(0.04,-0.02,-1).normalize();
    const stickQuaternion=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),stickDirection);
    // Place the needle inside the bullseye, leaving the barrel and fins outside.
    const tipOffset=0.74*modelSizes[2]+dartModel.position.y;
    const destination=hit===2?new THREE.Vector3(3.6,2.2,-1.83).addScaledVector(stickDirection,-tipOffset):finish;
    const curve=curveTo(destination,paper.position);
    const progress={t:0};
    let mailboxOpened=false;
    motion.add(()=>{
      flight=gsap.to(progress,{t:1,duration:1.2,ease:'none',onUpdate:()=>{
        paper.position.copy(curve.getPoint(progress.t));
        if(hit===0&&!mailboxOpened&&progress.t>=0.65){
          mailboxOpened=true;host.dataset.landingPhase='mailbox-opening';
          motion.add(()=>{doorTween?.kill();doorTween=gsap.to(door.rotation,{x:Math.PI/2,duration:0.35,ease:'power2.out'});});
        }
        if(projectileIndex===2){
          paper.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),curve.getTangent(progress.t).normalize());
          if(hit===2)paper.quaternion.slerp(stickQuaternion,THREE.MathUtils.smoothstep(progress.t,0.72,1));
        }else if(hit===0){
          paper.rotation.set(-0.72-(Math.PI/2-0.72)*progress.t,0,0.12*(1-progress.t));
          paper.scale.setScalar(1-0.3*progress.t);
        }else{
          paper.rotation.x=-0.72+progress.t*Math.PI*(projectileIndex===1?4:3);
          paper.rotation.z=0.12+progress.t*Math.PI*(projectileIndex===1?0.8:2);
        }
      },onComplete:()=>{
        if(hit!==null)settle(hit,stickQuaternion);
        else {callbacks.onShot(false);paper.rotation.set(-Math.PI/2,0,0.35);paper.position.y=0.15;setState('miss');}
      }});
    });
  };
  const aimAt=(index:number)=>{if(state==='flying')return;if(state==='hit'||state==='miss')reset();select(index);candidate=index;end.copy(hitPoints[index]);callbacks.onAim(index,0.6);preview();};
  const shootAt=(index:number)=>{if(state==='flying')return;if(state==='hit'||state==='miss')reset();launch(hitPoints[index],index);};
  const screen=(point:THREE.Vector3)=>{const p=point.clone().project(camera);return {x:(p.x*0.5+0.5)*width,y:(-p.y*0.5+0.5)*height};};
  const pointOnPlane=(event:PointerEvent)=>{const r=canvas.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.ray.intersectPlane(plane,new THREE.Vector3());};
  const down=(event:PointerEvent)=>{
    if((event.target as HTMLElement).closest('button,a')||state==='flying'||dragging||!event.isPrimary||event.button!==0)return;
    const r=canvas.getBoundingClientRect();const p=screen(paper.position);
    pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    const hits=raycaster.intersectObjects(models[projectileIndex].children,true);
    if(!hits.length&&Math.hypot(event.clientX-r.left-p.x,event.clientY-r.top-p.y)>(event.pointerType==='touch'?80:65))return;
    if(state==='hit'||state==='miss')reset();
    dragging=true;activePointer=event.pointerId;canvas.setPointerCapture(event.pointerId);canvas.style.touchAction='none';canvas.focus({preventScroll:true});setState('aiming');event.preventDefault();
  };
  const move=(event:PointerEvent)=>{
    if(!dragging||event.pointerId!==activePointer)return;event.preventDefault();const point=pointOnPlane(event);if(!point)return;
    paper.position.set(THREE.MathUtils.clamp(point.x,-2.3,2.3),origin.y,THREE.MathUtils.clamp(point.z,origin.z+0.08,origin.z+2.1));
    const pull=paper.position.clone().sub(origin);
    end.set(THREE.MathUtils.clamp(-pull.x*3.8,-5.8,5.8),0.2,origin.z-pull.z*4.3);
    candidate=null;let nearest=1.15;
    hitPoints.forEach((target,index)=>{const distance=Math.hypot(target.x-end.x,target.z-end.z);if(distance<nearest){nearest=distance;candidate=index;}});
    if(candidate!==null){end.copy(hitPoints[candidate]);if(selected!==candidate)select(candidate);}
    callbacks.onAim(candidate,Math.min(1,pull.length()/2.2));preview();
    shadow.position.set(paper.position.x,0.04,paper.position.z);
  };
  const up=(event:PointerEvent)=>{
    if(!dragging||event.pointerId!==activePointer)return;dragging=false;activePointer=null;canvas.style.touchAction='none';if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);
    if(paper.position.distanceTo(origin)<0.2){reset();return;}launch(end.clone(),candidate);
  };
  const cancel=(event:PointerEvent)=>{if(dragging&&event.pointerId===activePointer)reset();};
  const key=(event:KeyboardEvent)=>{
    if(['ArrowLeft','ArrowRight','Enter',' '].includes(event.key))event.preventDefault();
    if(event.key==='ArrowLeft')aimAt((selected+2)%3);
    if(event.key==='ArrowRight')aimAt((selected+1)%3);
    if(event.key==='Enter'||event.key===' ')shootAt(selected);
    if(event.key==='Escape')reset();
  };
  const resize=()=>{
    if(dragging)reset();
    width=host.clientWidth;height=host.clientHeight;renderer.setSize(width,height,false);
    const aspect=width/Math.max(1,height);
    camera.aspect=aspect;
    // Preserve a comfortable horizontal view of all three targets on phones.
    const portraitFov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(58)/2)/aspect));
    camera.fov=THREE.MathUtils.clamp(Math.max(45,portraitFov),45,110);
    camera.updateProjectionMatrix();
  };
  const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const visibility=new IntersectionObserver(([entry])=>{sceneVisible=entry.isIntersecting;});visibility.observe(host);
  const render=(now:number)=>{
    if(disposed)return;
    frame=requestAnimationFrame(render);if(document.hidden||!sceneVisible)return;
    if(now-lastRender<1000/(coarsePointer?30:60))return;lastRender=now;
    const delta=Math.min((now-last)/1000,0.05);last=now;
    if(paper.visible&&shadow.visible){shadow.position.set(paper.position.x,0.04,paper.position.z);shadow.scale.setScalar(Math.max(0.3,1-paper.position.y*0.1));}
    if(state==='ready'&&!preference.matches){paper.position.y=origin.y+Math.sin(now*0.0018)*0.06;paper.rotation.z=0.12+Math.sin(now*0.0012)*0.06;}
    particles.forEach(p=>{if(!p.object.visible)return;p.age+=delta;if(p.age>1.4){p.object.visible=false;return;}p.velocity.y-=delta*6;p.object.position.addScaledVector(p.velocity,delta);p.object.rotation.x+=delta*3;p.object.rotation.z+=delta*2;p.object.scale.setScalar(Math.max(0.1,1-p.age/1.4));});
    labels.forEach((label,index)=>{if(!label)return;const p=screen(hitPoints[index].clone().add(new THREE.Vector3(0,index===1?1.3:1,0)));label.style.left=`${THREE.MathUtils.clamp(p.x,55,width-55)}px`;label.style.top=`${p.y}px`;});
    if(hint){const p=screen(paper.position.clone().add(new THREE.Vector3(0,0.85,-0.45)));hint.style.left=`${p.x}px`;hint.style.top=`${p.y-16}px`;hint.style.opacity=state==='ready'?'0.8':'0';}
    renderer.render(scene,camera);
  };
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',cancel);canvas.addEventListener('lostpointercapture',cancel);canvas.addEventListener('keydown',key);
  const contextLost=(event:Event)=>{event.preventDefault();setState('unavailable');};canvas.addEventListener('webglcontextlost',contextLost);
  select(0);setState('ready');frame=requestAnimationFrame(render);
  if(!preference.matches)motion.add(()=>gsap.fromTo(world.scale,{x:0.9,y:0.9,z:0.9},{x:1,y:1,z:1,duration:1.2,ease:'power3.out'}));

  return {aimAt,shootAt,reset,dispose:()=>{
    disposed=true;clearNavigation();cancelAnimationFrame(frame);observer.disconnect();visibility.disconnect();flight?.kill();landing?.kill();doorTween?.kill();motion.revert();
    canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',cancel);canvas.removeEventListener('lostpointercapture',cancel);canvas.removeEventListener('keydown',key);canvas.removeEventListener('webglcontextlost',contextLost);
    const geometries=new Set<THREE.BufferGeometry>();const materials=new Set<THREE.Material>();
    scene.traverse(object=>{const renderable=object as THREE.Mesh;if(renderable.geometry)geometries.add(renderable.geometry);if(renderable.material){for(const m of Array.isArray(renderable.material)?renderable.material:[renderable.material])materials.add(m);}});
    geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.forceContextLoss();canvas.remove();
  }};
}
