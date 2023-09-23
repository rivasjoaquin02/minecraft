import { useBox } from "@react-three/cannon";
import * as textures from "../assets/texture/texture";

function Cube({
    position,
    texture,
}: {
    position: [number, number, number];
    texture: string;
}) {
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));

    const activeTexture = textures[texture + "Texture"];

    console.log(activeTexture);

    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry" />
            <meshStandardMaterial attach="material" map={activeTexture} />
        </mesh>
    );
}

export default Cube;
