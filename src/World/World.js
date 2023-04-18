import { createAxesHelper, createGridHelper } from './components/helpers.js'

import { createCamera } from './components/camera.js';
import { createCube } from './components/basicObjects/cube.js';
import { createMeshGroup, createFractalGroup } from './components/meshGroups/meshGroup.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { Train } from './components/Train/Train.js';
import { loadBirds } from './components/birds/birds.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let controls;

class World {

    // Create an instance of the World app
    constructor(container) {
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);

        container.append(renderer.domElement) // add the automatically created <canvas> element to the page

        controls = createControls(camera, renderer.domElement);
        
        // const cube = createCube(); // create a Mesh containing the geometry and material
        //const meshGroup = createMeshGroup(); // create a Mesh group
        // const train = new Train();
        const { ambientLight, mainLight } = createLights();  // create a light source

       // scene.add(createAxesHelper(), createGridHelper()); // add axis

        loop.updatables.push(controls); // add items to the tick array
        
        scene.add(ambientLight, mainLight); // add the light source and the mesh to the scene

        // resize the frustrum
        const resizer = new Resizer(container, camera, renderer);

    }

    // async function that waits for the models to load
    async init() {
        const { parrot, flamingo1, flamingo2, flamingo3, stork } = await loadBirds();
        controls.target.copy(parrot.position); // move the target to the center of the front bird
        loop.updatables.push(parrot,  flamingo1, flamingo2, flamingo3, stork)
        scene.add(parrot,  flamingo1, flamingo2, flamingo3, stork);

    }

    // Render the scene
    render() {
        renderer.render(scene, camera); // draw a single frame
    }

    // animation loop start
    start() {
        loop.start();
    }

    // animation loop end  
    stop() {
        loop.stop();
    }
    
}
    
export { World };