import { PerspectiveCamera } from '../build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    40, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(45, 0, 30);

  return camera;
}

export { createCamera };