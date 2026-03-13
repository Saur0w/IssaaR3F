import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
    useGLTF,
    Environment,
    PresentationControls,
    Float
} from '@react-three/drei';

export default function Scene() {
    const { scene } = useGLTF('/models/dior.glb');
    const modelRef = useRef();

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />

            <PresentationControls
                rotation={[0, 0.3, 0]}
            >
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                    <primitive
                        ref={modelRef}
                        object={scene}
                        position={[0, 0, 0]}
                        scale={0.2}
                    />
                </Float>
            </PresentationControls>
        </>
    );
}

useGLTF.preload('/models/dior.glb');