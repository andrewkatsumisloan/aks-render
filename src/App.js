
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// import { Model } from './components/Room';
import { Model } from './components/Drawer';
import { Trash } from './components/Trash';

import './App.css';

export default function App() {
  return (
    <div className='main'>
      <div className='column-left'>
        <h1>Learning React-Three</h1>
        <h3> ...and Blender</h3>
      </div>
      <div className='column-right'>
        <Canvas
          camera={{ position: [30, 30, 30], fov: 20 }}
          style={{
            backgroundColor: '#f2e9ce',
            width: '65vw',
            height: '100vh',
          }}
        >
          <ambientLight intensity={.85} />
          <ambientLight intensity={.6} />
          <spotLight intensity={.4} />
          <directionalLight intensity={3} />
          <Suspense fallback={null}>
            <Model position={[-3, 0, 0]} />
            <Trash position={[6, 0, 10]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        {/* <Canvas
          camera={{ position: [-45, 25, -40], fov: 20 }}
          style={{
            backgroundColor: '#f2e9ce',
            width: '65vw',
            height: '100vh',
          }}
        >
          <ambientLight intensity={1.85} />
          <ambientLight intensity={1.2} />
          <directionalLight intensity={1.4} />
          <Suspense fallback={null}>
          </Suspense>
          <OrbitControls />
        </Canvas> */}
      </div>
    </div>

  );
}