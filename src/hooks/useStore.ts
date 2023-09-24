import { create } from "zustand";
import { nanoid } from "nanoid";

type Cube = {
    id: string;
    pos: [number, number, number];
    texture: string;
};

export const useStore = create<{
    texture: string;
    cubes: Array<Cube>;
    addCube: (x: number, y: number, z: number) => void;
    setTexture: (texture: string) => void;
    removeCube: (cubeId: string) => void;
    saveWorld: () => void;
    resetWorld: () => void;
}>((set) => ({
    texture: "dirt",
    cubes: [
        {
            id: nanoid(),
            pos: [1, 1, 1],
            texture: "dirt",
        },
        {
            id: nanoid(),
            pos: [0, 2, 0],
            texture: "diorite",
        },
    ],
    addCube: (x, y, z) => {
        set((state) => ({
            cubes: [
                ...state.cubes,
                { id: nanoid(), texture: state.texture, pos: [x, y, z] },
            ],
        }));
    },
    setTexture: (texture: string) => {
        set({ texture });
    },
    removeCube: (cubeId) => {
        set((state) => ({
            cubes: state.cubes.filter(({ id }) => id !== cubeId),
        }));
    },
    saveWorld: () => {},
    resetWorld: () => {},
}));
