export type ProjectileKind = 0 | 1 | 2;
export type PhysicsVector = { x: number; y: number; z: number };
export type ProjectileBody = {
  kind: ProjectileKind;
  position: PhysicsVector;
  velocity: PhysicsVector;
  age: number;
  accumulator: number;
  sleep: number;
  hasContact: boolean;
  settled: boolean;
};

const GRAVITY = 9.81;
const STEP = 1 / 120;
const materials = [
  { restitution: 0.015, friction: 0.9, drag: 0.8, tangent: 0.12, cutoff: 0.2 },
  { restitution: 0.7, friction: 0.24, drag: 0.035, tangent: 0.91, cutoff: 0.75 },
  { restitution: 0.035, friction: 0.8, drag: 0.12, tangent: 0.18, cutoff: 0.3 },
] as const;

export function createBody(kind: ProjectileKind, position: PhysicsVector, velocity: PhysicsVector): ProjectileBody {
  return { kind, position: { ...position }, velocity: { ...velocity }, age: 0, accumulator: 0, sleep: 0, hasContact: false, settled: false };
}

export function supportHeight(body: ProjectileBody) {
  if (body.kind === 1) return 0.445;
  if (body.kind === 0) return 0.03;
  // A descending dart contacts needle-first, then falls onto its fins/shaft.
  const speed = Math.hypot(body.velocity.x, body.velocity.y, body.velocity.z);
  return body.hasContact ? 0.21 : Math.max(0.21, -body.velocity.y / Math.max(speed, 0.001) * 0.742 + 0.01);
}

/** Fixed-step gravity, impact restitution and rolling/sliding friction. */
export function stepBody(body: ProjectileBody, elapsed: number): number[] {
  if (body.settled) return [];
  const impacts: number[] = [];
  const material = materials[body.kind];
  body.accumulator += Math.min(Math.max(elapsed, 0), 0.1);
  while (body.accumulator >= STEP && !body.settled) {
    body.accumulator -= STEP;
    body.age += STEP;
    const v = body.velocity, p = body.position;
    const drag = Math.exp(-material.drag * STEP);
    v.x *= drag; v.z *= drag;
    v.y -= GRAVITY * STEP;
    p.x += v.x * STEP; p.y += v.y * STEP; p.z += v.z * STEP;
    const floor = supportHeight(body);
    if (p.y <= floor) {
      p.y = floor;
      if (v.y < 0) {
        const impact = -v.y;
        body.hasContact = true;
        v.y = impact * material.restitution;
        if (v.y < material.cutoff) v.y = 0;
        if (impact > 0.3) {
          impacts.push(impact);
          v.x *= material.tangent; v.z *= material.tangent;
        }
      }
      if (v.y === 0) {
        const speed = Math.hypot(v.x, v.z);
        const remaining = Math.max(0, speed - material.friction * GRAVITY * STEP);
        if (speed > 0) { v.x *= remaining / speed; v.z *= remaining / speed; }
        if (remaining < 0.035) body.sleep += STEP;
        else body.sleep = 0;
      }
    } else body.sleep = 0;
    if (body.sleep >= 0.18 || body.age >= 6) {
      body.settled = true;
      p.y = supportHeight(body);
      v.x = v.y = v.z = 0;
    }
  }
  return impacts;
}

/** Aim assistance chooses an endpoint; gravity still determines the flight. */
export function planThrow(kind: ProjectileKind, start: PhysicsVector, finish: PhysicsVector, assisted = false) {
  const distance = Math.hypot(finish.x - start.x, finish.z - start.z);
  const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
  const duration = assisted ? kind === 2 ? 0.6 : 1.2
    : kind === 2 ? clamp(0.3 + distance / 18, 0.35, 0.75)
    : kind === 1 ? clamp(0.4 + distance / 10, 0.45, 1.2)
    : clamp(0.55 + distance / 8, 0.65, 1.5);
  // Paper's broad face creates a slower effective fall than the dense objects.
  const gravity = kind === 0 ? 5.5 : GRAVITY;
  const y = assisted ? finish.y : kind === 1 ? 0.445 : kind === 2 ? 0.65 : 0.03;
  return {
    duration, gravity,
    velocity: {
      x: (finish.x - start.x) / duration,
      y: (y - start.y + 0.5 * gravity * duration * duration) / duration,
      z: (finish.z - start.z) / duration,
    },
  };
}
