import React from 'react';
import {
    useGLTF,
    Environment,
    PresentationControls,
    Float,
} from '@react-three/drei';

export default function Scene() {
    const { scene } = useGLTF('/models/dior.glb');


    return (
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />

            <PresentationControls
                rotation={[0, 0.3, 0]}
            >
                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                    <primitive
                        object={scene}
                        position={[0, 0, 0]}
                        scale={0.3}
                    />
                </Float>
            </PresentationControls>
        </>
    );
}

useGLTF.preload('/models/dior.glb');