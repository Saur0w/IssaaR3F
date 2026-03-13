import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import styles from './style.module.css';

export default function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.canvasContainer}>
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    dpr={[1, 2]}
                >
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}