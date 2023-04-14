import { WebGLRenderer } from '../build/three.module.js';

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });
  
    // turn on the physically correct lighting model - light drop-off
    renderer.physicallyCorrectLights = true;
    return renderer;
}

export { createRenderer };