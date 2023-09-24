import { useStore } from "../hooks/useStore";
import Cube from "./Cube";

function Cubes() {
    const cubes = useStore((state) => state.cubes);

    return cubes.map(({ id, pos, texture }) => (
        <Cube key={id} id={id} position={pos} texture={texture} />
    ));
}

export default Cubes;
