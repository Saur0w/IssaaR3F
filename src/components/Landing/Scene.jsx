import Mesh from './Mesh';
import {Canvas} from "@react-three/fiber";

const Scene = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Mesh />
            </Canvas>
        </>
    )
};

export default Scene;