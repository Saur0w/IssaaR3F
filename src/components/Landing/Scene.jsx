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
            <Environment preset="city" />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />

            <PresentationControls
                global
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 1500 }}
                rotation={[0, 0.3, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 2, Math.PI / 2]}
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