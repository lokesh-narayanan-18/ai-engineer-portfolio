import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { Mesh, Group } from "three";

function Knot() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += dt * 0.15;
    mesh.current.rotation.y += dt * 0.2;
  });
  return (
    <mesh ref={mesh} scale={1.6}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial wireframe color="#10b981" transparent opacity={0.55} />
    </mesh>
  );
}

function Particles() {
  const group = useRef<Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.05;
  });
  const dots = Array.from({ length: 60 }, (_, i) => {
    const r = 3 + (i % 5) * 0.2;
    const theta = (i / 60) * Math.PI * 2;
    const phi = (i * 1.7) % Math.PI;
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
    ] as [number, number, number];
  });
  return (
    <group ref={group}>
      {dots.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#0f172a" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const big = window.matchMedia("(min-width: 768px)").matches;
    setEnabled(!reduced && big);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Knot />
        <Particles />
      </Canvas>
    </div>
  );
}
