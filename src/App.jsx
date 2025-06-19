import { Canvas } from '@react-three/fiber';
import React from 'react';
import './style.css';
import MacContainer from './MacContainer';
import { Environment, ScrollControls } from '@react-three/drei';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Support</li>
        </ul>
      </nav>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
