import {loadGLTF} from "../libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    const start = async() => {

    // initialize MindAR
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.body,
        // imageTargetSrc: "../assets/targets/targets.mind",
        imageTargetSrc: "../assets/targets/musicband.mind",
        maxTrack: 2,
    });
    const {renderer, scene, camera} = mindarThree;

    // create light
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);


    // const raccoon = await loadGLTF("../assets/models/gltf/dat.gltf");musicband-raccoon
    // raccoon.scene.scale.set(0.005, 0.005, 0.005);
    // raccoon.scene.position.set(-0.2, -0.4, -0.2);
    // raccoon.scene.rotation.set(-0.4, 90, -30);

    const raccoon = await loadGLTF("../assets/models/musicband-raccoon/scene.gltf");
    raccoon.scene.scale.set(0.1, 0.1, 0.1);
    raccoon.scene.position.set(0, -0.4, 0);

    
    // create anchor
    const racoonAnchor = mindarThree.addAnchor(0);    
    racoonAnchor.group.add(raccoon.scene);

    // start AR
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
    }
    start();
});