import { grassImg, dirtImg, dioriteImg, glassImg, obsidianImg } from "./images";

import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const dioriteTexture = new TextureLoader().load(dioriteImg);
const obsidianTexture = new TextureLoader().load(obsidianImg);
const glassTexture = new TextureLoader().load(glassImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

groundTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
dioriteTexture.magFilter = NearestFilter;
obsidianTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;

export {
    groundTexture,
    dirtTexture,
    dioriteTexture,
    obsidianTexture,
    glassTexture,
};
