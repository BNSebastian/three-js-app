import {
    MathUtils,
    Mesh, 
    MeshStandardMaterial, 
    MeshBasicMaterial, 
    TextureLoader,
    BoxBufferGeometry, 
    TorusBufferGeometry, 
    TorusKnotBufferGeometry } from '../../build/three.module.js';

function createMaterial() {
    
    const textureLoader = new TextureLoader(); // create a texture loader.

    const texture = textureLoader.load(
        '/portfolio/src/World/assets/textures/harshbricks/harshbricks-albedo.png',
    ); // load a texture
    
    const material = new MeshStandardMaterial({
        map: texture,
        //color: 'white' // color gets multiplied with map, but white doesn't do anything
    }); // create a "standard" material
    
    return material;
}

function createCube() {
    // create a geometry
    const geometry = new BoxBufferGeometry(0.5, 0.5, 0.1);
    //const geometry = new TorusKnotBufferGeometry();
    // create a material
    const material = createMaterial();
    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material);

    // calculate the rotation amount in radians
    const radiansPerSecond = MathUtils.degToRad(30);   
    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    }

    return cube;
}

export { createCube };