import React from 'react';
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei';

export default function Scene() {
    const { scene } = useGLTF('/models/dior.glb');

    return (
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />

            <OrbitControls enableRotate={true} enableZoom={true} zoomSpeed={1.0} />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                <primitive object={scene} position={[0, 0, 0]} scale={0.3} />
            </Float>
        </>
    );
}

useGLTF.preload('/models/dior.glb');