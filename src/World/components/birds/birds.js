import { GLTFLoader } from '../../build/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {

    const loader = new GLTFLoader();

    //const room = await loader.loadAsync('/portfolio/src/World/build/room.glb'); // load single element

    const [flamingoData1, flamingoData2, flamingoData3, parrotData, storkData] = await Promise.all([
        loader.loadAsync('./Flamingo.glb'),
        loader.loadAsync('./Flamingo.glb'),
        loader.loadAsync('./Flamingo.glb'),
        loader.loadAsync('./Parrot.glb'),
        loader.loadAsync('./Stork.glb'),
    ]);

    console.log('Squaaawk!', parrotData);

    const flamingo1 = setupModel(flamingoData1);
    flamingo1.position.set(7.5, 5, 5);
    flamingo1.scale.set(0.05, 0.05, 0.05);

    const flamingo2 = setupModel(flamingoData2);
    flamingo2.position.set(0, 0, 15);
    flamingo2.scale.set(0.05, 0.05, 0.05);

    const flamingo3 = setupModel(flamingoData3);
    flamingo3.position.set(-5, 10, -0.5);
    flamingo3.scale.set(0.05, 0.05, 0.05);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 2.5);
    parrot.scale.set(0.05, 0.05, 0.05);
    
    const stork = setupModel(storkData);
    stork.position.set(0, -2.5, -10);
    stork.scale.set(0.05, 0.05, 0.05);
    
    return {
      parrot,
      flamingo1,
      flamingo2,
      flamingo3,
      stork,
    };
}

export { loadBirds };