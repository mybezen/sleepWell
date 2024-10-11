/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function SleepyModel() {
  // Assuming 'Sleepy.glb' is placed in the public/assets folder
  const gltf = useGLTF("/assets/Sleepy.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={[2.5, 2.5, 2.5]} // Adjust the size
      position={[0, -1, 0]} // Adjust the position
      rotation={[0, 0, 0]}
    />
  );
}

function SleepyScene() {
  return (
    <Canvas style={{ width: "100%", height: "48vh" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
        />
        <pointLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={1.5} />

        <SleepyModel />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          minPolarAngle={Math.PI / 2} // Restrict vertical rotation
          maxPolarAngle={Math.PI / 2} // Restrict vertical rotation
        />
      </Suspense>
    </Canvas>
  );
}

export default SleepyScene;
