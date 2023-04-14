import { 
    Group,
    MathUtils
} from '../../build/three.module.js';

import { createMeshes } from './meshes.js';

class Train extends Group {
    constructor() {

        super(); // This means the Train class now has all the normal functionality of a Group. In particular, we can add objects to it, and we can add it directly to our scene

        this.meshes = createMeshes();

        this.add(
            this.wheelSpeed = MathUtils.degToRad(24),
            this.meshes.nose,
            this.meshes.cabin,
            this.meshes.chimney,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            this.meshes.bigWheel,
        );
    }


    // each frame, rotate the entire group of spheres
    tick = (delta) => {
        this.meshes.bigWheel.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelRear.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelCenter.rotation.y += this.wheelSpeed * delta;
        this.meshes.smallWheelFront.rotation.y += this.wheelSpeed * delta;
    };
}

export {Train}