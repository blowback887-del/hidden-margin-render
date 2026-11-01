import React, { useMemo } from "react";
import { ThreeCanvas } from "@remotion/three";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import * as THREE from "three";

// Глянцевый самолёт (условный узкофюзеляжный, без ливреи и логотипов) — 3D-акцент канала.
// Собран из простых форм, лицензии не нужны.

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const Airliner: React.FC = () => {
  const body = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#e9efe9", metalness: 0.35, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 }), []);
  const dark = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#1b2a24", metalness: 0.6, roughness: 0.3, clearcoat: 0.6 }), []);
  const accent = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#2fdc7f", metalness: 0.2, roughness: 0.35, emissive: "#0d4a2a", emissiveIntensity: 0.4 }), []);
  const glass = useMemo(() => new THREE.MeshPhysicalMaterial({ color: "#0b1210", metalness: 0.9, roughness: 0.05, clearcoat: 1 }), []);
  const wingShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.lineTo(2.9, -1.35); s.lineTo(3.05, -1.75); s.lineTo(0.2, -0.95); s.lineTo(-0.15, -0.9); s.lineTo(-0.15, 0); s.closePath();
    return new THREE.ExtrudeGeometry(s, { depth: 0.07, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  }, []);
  const tailShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.lineTo(0.9, 0); s.lineTo(1.45, 1.25); s.lineTo(1.05, 1.25); s.closePath();
    return new THREE.ExtrudeGeometry(s, { depth: 0.05, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2 });
  }, []);
  const stabShape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0); s.lineTo(1.05, -0.45); s.lineTo(1.1, -0.65); s.lineTo(0.05, -0.45); s.closePath();
    return new THREE.ExtrudeGeometry(s, { depth: 0.04, bevelEnabled: false });
  }, []);
  return (
    <group>
      {/* фюзеляж вдоль оси X */}
      <mesh material={body} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.42, 5.4, 12, 48]} />
      </mesh>
      {/* окна кабины */}
      <mesh material={glass} position={[2.95, 0.2, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.32, 0.1, 0.62]} />
      </mesh>
      {/* ряд окон */}
      {Array.from({ length: 14 }).map((_, i) => (
        <group key={i}>
          <mesh material={glass} position={[2.2 - i * 0.32, 0.12, 0.405]}><boxGeometry args={[0.1, 0.13, 0.03]} /></mesh>
          <mesh material={glass} position={[2.2 - i * 0.32, 0.12, -0.405]}><boxGeometry args={[0.1, 0.13, 0.03]} /></mesh>
        </group>
      ))}
      {/* полоса-акцент */}
      <mesh material={accent} rotation={[0, 0, Math.PI / 2]} position={[0, -0.05, 0]} scale={[1.006, 1, 1.006]}>
        <cylinderGeometry args={[0.425, 0.425, 3.6, 48, 1, true, Math.PI * 0.45, Math.PI * 0.1]} />
      </mesh>
      {/* крылья */}
      <mesh geometry={wingShape} material={body} rotation={[-Math.PI / 2, 0, 0]} position={[0.55, -0.22, 0.25]} />
      <mesh geometry={wingShape} material={body} rotation={[Math.PI / 2, 0, 0]} position={[0.55, -0.22, -0.25]} />
      {/* двигатели */}
      {[1, -1].map((z) => (
        <group key={z} position={[0.75, -0.55, z * 1.35]}>
          <mesh material={dark} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.2, 0.85, 32]} />
          </mesh>
          <mesh material={accent} rotation={[0, 0, Math.PI / 2]} position={[0.43, 0, 0]}>
            <torusGeometry args={[0.2, 0.025, 12, 32]} />
          </mesh>
        </group>
      ))}
      {/* киль и стабилизаторы */}
      <mesh geometry={tailShape} material={body} position={[-3.45, 0.3, -0.025]} rotation={[0, 0, 0]} scale={[-1, 1, 1]} />
      <mesh geometry={stabShape} material={body} rotation={[-Math.PI / 2, 0, 0]} position={[-2.75, 0.15, 0.1]} scale={[-1, 1, 1]} />
      <mesh geometry={stabShape} material={body} rotation={[Math.PI / 2, 0, 0]} position={[-2.75, 0.15, -0.1]} scale={[-1, 1, 1]} />
    </group>
  );
};

/** Самолёт садится на подиум: from — секунда начала посадки внутри сцены */
export const PlaneLanding: React.FC<{ width: number; height: number; landAt?: number; dur?: number }> = ({ width, height, landAt = 0, dur = 8 }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = f / fps;
  const k = interpolate(t, [landAt, landAt + 1.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const x = interpolate(k, [0, 1], [-7, 0]);
  const y = interpolate(k, [0, 1], [2.6, -0.55]);
  const pitch = interpolate(k, [0, 0.8, 1], [0.18, 0.08, 0]);
  const spin = 0.75 + 0.1 * Math.sin(t * 0.35) - 0.05 * (t / Math.max(1, dur));
  return (
    <ThreeCanvas width={width} height={height} camera={{ fov: 32, position: [0, 2.2, 13] }} gl={{ antialias: true, preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#eafff3", "#0b1210", 0.7]} />
      <directionalLight position={[6, 9, 6]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-6, 3, -4]} intensity={1.1} color="#2fdc7f" />
      <pointLight position={[0, -1.5, 4]} intensity={8} distance={12} color="#ffd23f" />
      <group position={[x, y + 0.2, 0]} rotation={[0.32, spin, pitch]} scale={0.82}>
        <Airliner />
      </group>
    </ThreeCanvas>
  );
};
