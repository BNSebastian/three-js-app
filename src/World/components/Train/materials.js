import {
    MeshStandardMaterial,
    TextureLoader,
} from '../../build/three.module.js';

function createMaterial(textureAsset) {

    const textureLoader = new TextureLoader(); // create a texture loader.
    const texture = textureLoader.load(textureAsset); // load a texture

    // create a "standard" material
    const material = new MeshStandardMaterial({
        map: texture,
    }); 

    return material;
}

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  });

  return { body, detail };
}

export { createMaterials, createMaterial };
