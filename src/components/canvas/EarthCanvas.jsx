import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Suspense } from "react";

const Earth = () => {
  const earth = useGLTF("/earth/scene.gltf");

  return (
    <>
      <pointLight intensity={1} position={[0, 15, 4]} />
      <ambientLight intensity={0.1} />
      <rectAreaLight
        intensity={10}
        width={4}
        height={10}
        color="#ff0000"
        position={[-5, 5, 5]}
      />
      <rectAreaLight
        intensity={10}
        width={4}
        height={10}
        color="#00ff00"
        position={[0, 5, 5]}
      />
      <rectAreaLight
        intensity={10}
        width={4}
        height={10}
        color="#0000ff"
        position={[5, 5, 5]}
      />
      <primitive
        object={earth.scene}
        scale={0.06}
        position-y={-2.4}
        rotation-y={0}
      />
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
