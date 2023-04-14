const setSize = (container, camera, renderer) => {
    
    camera.aspect = container.clientWidth / container.clientHeight; // Set the camera's aspect ratio
    camera.updateProjectionMatrix(); // update the camera's frustum
    renderer.setSize(container.clientWidth, container.clientHeight); // update the size of the renderer AND the canvas
    renderer.setPixelRatio(window.devicePixelRatio); // set the pixel ratio (for mobile devices)
};

class Resizer {

    constructor(container, camera, renderer) {
        
        setSize(container, camera, renderer); // set initial size on load
    
        window.addEventListener("resize", () => {
            // set the size again if a resize occurs
            setSize(container, camera, renderer);
            // perform any custom actions
            this.onResize();
        });
    }

    onResize() {};
}

export { Resizer };