import { 
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
} from '../../build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterial } from './materials.js';

function createMeshes() {
  const geometries = createGeometries();
    

  const cabin = new Mesh(geometries.cabin, createMaterial('/portfolio/src/World/assets/textures/harshbricks/harshbricks-albedo.png'));
  cabin.position.set(1.5, 1.4, 0);

  const chimney = new Mesh(geometries.chimney, createMaterial('/portfolio/src/World/assets/textures/harshbricks/harshbricks-albedo.png'));
  chimney.position.set(-2, 1.9, 0);

  const nose = new Mesh(geometries.nose, createMaterial('/portfolio/src/World/assets/textures/harshbricks/harshbricks-albedo.png'));
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  const smallWheelRear = new Mesh(geometries.wheel, createMaterial('/portfolio/src/World/assets/textures/harshbricks/harshbricks-albedo.png'));
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2);

  return {
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  };
}

export { createMeshes };
