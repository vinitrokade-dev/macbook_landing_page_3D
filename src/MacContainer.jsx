import React, { useRef, useEffect } from 'react';
import { useGLTF, useScroll, useTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MacContainer = () => {
  const gltf = useGLTF('./mac.glb');
  const tex = useTexture('./red.jpg');
  const meshes = useRef({});
  const data = useScroll();

  useEffect(() => {
    gltf.scene.traverse((e) => {
      meshes.current[e.name] = e;
    });

    if (meshes.current.matte?.material) {
      meshes.current.matte.material.map = tex;
      meshes.current.matte.material.emissiveIntensity = 0;
      meshes.current.matte.material.metalness = 0;
      meshes.current.matte.material.roughness = 1;
    }

    if (meshes.current.screen) {
      meshes.current.screen.rotation.x = THREE.MathUtils.degToRad(180);
    }
  }, [gltf, tex]);

  useFrame(() => {
    if (meshes.current.screen) {
      meshes.current.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    }
  });

  return (
   // Inside return (
<group position={[0, -20, 20]}>
  <primitive object={gltf.scene} />

  <Text
    position={[0, 24, -20]}
    fontSize={5}
    color="#ffffff"
    anchorX="center"
    anchorY="middle"
    outlineColor="#a259ff"
    outlineWidth={0.01}
    outlineBlur={0.5}
  >
    Macbook Pro.
  </Text>

  <Text
    position={[0, 20, -20]}
    fontSize={2}
    color="#cccccc"
    anchorX="center"
    anchorY="middle"
  >
    Powered by M4 Max
  </Text>

  <Text
    position={[0, 17, -20]} 
    fontSize={1.5}
    color="#888888"
    anchorX="center"
    anchorY="middle"
  >
    The future of performance
  </Text>
</group>

  );
};

export default MacContainer;
