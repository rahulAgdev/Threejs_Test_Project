import * as THREE from 'three';
// adding scene (sort of like canvas)
const scene = new THREE.Scene();
// adding camera (viewpoint source)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// adding renderer (to render the threejs model)
const renderer = new THREE.WebGLRenderer();
// setting renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
// appending to document
document.body.appendChild(renderer.domElement);
// adding geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// adding material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// creating mesh cube with geometry and material
const cube = new THREE.Mesh(geometry, material);
// adding cube to scene
scene.add(cube);
// distancing the camera away from the origin
camera.position.z = 5;

// creating render/animation loop
function animate() {
    // giving rotation to the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);