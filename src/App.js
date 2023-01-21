
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from './components/Room';

export default function App() {
  return (
    <div>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        style={{
          backgroundColor: '#f2e9ce',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>

  );
}