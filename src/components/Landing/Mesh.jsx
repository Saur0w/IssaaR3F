import { useTexture } from "@react-three/drei";
import { vertexShader, fragmentShader } from "../../lib/Shaders/index.js";

const Mesh = () => {
    const img1 = useTexture("/images/look.jpg");
    return (
        <mesh>
            <planeGeometry args={[4, 3.5]} />
            {/*<meshBasicMaterial map={img1} />*/}

            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTexture: { value: img1 },
                }}
            />
        </mesh>
    );
};

export default Mesh;