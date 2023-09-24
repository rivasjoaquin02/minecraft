import { useBox } from "@react-three/cannon";
import * as textures from "../assets/texture/texture";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

function Cube({
    id, 
    position,
    texture,
}: {
    id: string;
    position: [number, number, number];
    texture: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [ref] = useBox(() => ({
        type: "Static",
        position,
    }));
    const removeCube = useStore(state => state.removeCube)

    const activeTexture = textures[texture + "Texture"];

    return (
        <mesh
            ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            onClick={e => {if (e.altKey) {
                removeCube(id)
            }}}
        >
            <boxGeometry attach="geometry" />
            <meshStandardMaterial
                color={isHovered ? "grey" : "white"}
                transparent
                attach="material"
                map={activeTexture}
            />
        </mesh>
    );
}

export default Cube;
