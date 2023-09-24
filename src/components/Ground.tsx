import { usePlane } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import { ThreeEvent } from "@react-three/fiber";

import { grassTexture } from "../assets/texture/texture";

function Ground() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }));

    const addCube = useStore((state) => state.addCube);

    const handleClickGround = (event: ThreeEvent<MouseEvent>) => {
        event.stopPropagation();

        const [x, y, z] = Object.values(event.point).map((n) => Math.ceil(n));
        addCube(x, y, z);
    };

    return (
        <mesh ref={ref} onClick={handleClickGround}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={grassTexture} />
        </mesh>
    );
}

export default Ground;
