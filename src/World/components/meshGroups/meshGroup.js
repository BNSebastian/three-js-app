import { 
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    SphereBufferGeometry,
    TextureLoader,
} from '../../build/three.module.js';

function createMaterial(textureAsset) {
    
    const textureLoader = new TextureLoader(); // create a texture loader.

    const texture = textureLoader.load(textureAsset); // load a texture
    
    const material = new MeshStandardMaterial({
        map: texture,
        //color: 'white' // color gets multiplied with map, but white doesn't do anything
    }); // create a "standard" material
    
    return material;
}

function createMeshGroup() {
    const group = new Group();

    const geometry = new SphereBufferGeometry(0.1, 16, 16);
    const material = createMaterial('./spheres.png');
    const protoSphere = new Mesh(geometry, material);

    // create twenty clones of the protoSphere and add each to the group
    for (let i = 0; i < 2; i += 0.07) {
        const sphere = protoSphere.clone();

        // position the spheres on around a circle
        sphere.position.x = Math.cos(2 * Math.PI * i);
        sphere.position.y = Math.sin(2 * Math.PI * i);
        sphere.position.z = i * 3;
        sphere.scale.multiplyScalar(0.01 + i);

        group.add(sphere);
    } 

    // define rotation
    const radiansPerSecond = MathUtils.degToRad(30);

    // each frame, rotate the entire group of spheres
    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
}

function createFractalGroup(iterations) {
    const group = new Group();

    const geometry = new SphereBufferGeometry(0.1, 16, 16);
    const material = createMaterial('./spheres.png');
    const protoSphere = new Mesh(geometry, material);

    // recursive function to add child spheres
    function addSphere(parent, level) {
        if (level >= iterations) return;

        const numChildren = 3; // set the number of child spheres

        for (let i = 0; i < numChildren; i++) {
            const sphere = protoSphere.clone();

            // set the position and scale of the child sphere relative to its parent
            sphere.position.copy(parent.position);
            sphere.position.y += 0.1 * level;
            sphere.position.x += 0.2 * (i - (numChildren-1)/2);
            sphere.scale.multiplyScalar(0.5);

            parent.add(sphere);

            // recursively add more child spheres
            addSphere(sphere, level+1);
        }
    }

    // create the initial sphere
    const rootSphere = protoSphere.clone();
    group.add(rootSphere);

    // add child spheres recursively
    addSphere(rootSphere, 0);

    // define rotation
    const radiansPerSecond = MathUtils.degToRad(30);

    // each frame, rotate the entire group of spheres
    group.tick = (delta) => {
        group.rotation.z -= delta * radiansPerSecond;
    };

    return group;
}

export {createMeshGroup, createFractalGroup}