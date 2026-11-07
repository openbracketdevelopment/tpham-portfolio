import test from 'node:test';
import assert from 'node:assert/strict';
import { createBody, stepBody, supportHeight, planThrow } from '../src/components/ConnectPlayground/projectilePhysics.ts';

function simulate(kind, fps) {
  const body = createBody(kind, { x: 0, y: 3, z: 0 }, { x: 2, y: -1, z: -2 });
  const impacts = [];
  for (let i = 0; i < fps * 7 && !body.settled; i++) impacts.push(...stepBody(body, 1 / fps));
  return { body, impacts };
}

test('projectiles settle on the floor, with basketball rebounds losing energy', () => {
  for (const kind of [0, 1, 2]) {
    const { body, impacts } = simulate(kind, 60);
    assert.ok(body.settled);
    assert.ok(Math.abs(body.position.y - supportHeight(body)) < 1e-8);
    assert.deepEqual(body.velocity, { x: 0, y: 0, z: 0 });
    if (kind === 1) {
      assert.ok(impacts.length >= 3);
      for (let i = 1; i < impacts.length; i++) assert.ok(impacts[i] < impacts[i - 1]);
    } else assert.ok(impacts.length <= 2);
  }
});

test('fixed-step results stay consistent at 30, 60 and 120 fps', () => {
  for (const kind of [0, 1, 2]) {
    const reference = simulate(kind, 120).body;
    for (const fps of [30, 60]) {
      const body = simulate(kind, fps).body;
      for (const axis of ['x', 'y', 'z']) assert.ok(Math.abs(body.position[axis] - reference.position[axis]) < 1e-8);
    }
  }
});

test('assisted ballistic plans reach their target without changing projectile gravity', () => {
  const start = { x: 0, y: 0.65, z: 3.6 }, end = { x: 3.6, y: 2.2, z: -1.73 };
  for (const kind of [0, 1, 2]) {
    const { duration: t, gravity: g, velocity: v } = planThrow(kind, start, end, true);
    assert.ok(Math.abs(start.x + v.x * t - end.x) < 1e-8);
    assert.ok(Math.abs(start.y + v.y * t - 0.5 * g * t * t - end.y) < 1e-8);
    assert.ok(Math.abs(start.z + v.z * t - end.z) < 1e-8);
  }
});
