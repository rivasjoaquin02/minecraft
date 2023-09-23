import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStore = create<{
    texture: string;
    cubes: [
        {
            id: string;
            pos: [number, number, number];
            texture: string;
        }
    ];
    addCube: () => void;
    removeCube: () => void;
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
    addCube: () => {
        set((state) => ({
            cubes: [
                ...state.cubes,
                { id: nanoid(), texture: state.texture, pos: [x, y, z] },
            ],
        }));
    },
    removeCube: () => {},
    saveWorld: () => {},
    resetWorld: () => {},
}));
