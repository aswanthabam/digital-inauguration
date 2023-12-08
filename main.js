import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set the background color to green
scene.background = new THREE.Color(0x00ff00);
// Add directional light to make the model visible
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
// Load GLTF model

const loader = new OBJLoader();
// const loader = new GLTFLoader();
loader.load("Lamp kerala traditional lamp vilaku N110920.obj", (gltf) => {
  // loader.load("scene.gltf", (gltf) => {
  const model = gltf;
  // const model = gltf.scene;
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  model.position.sub(center);

  // // Set the model size to 100% of the screen height
  // const screenHeight = window.innerHeight;
  // const scaleFactor = screenHeight / box.getSize(new THREE.Vector3()).y;
  // model.scale.set(1, 1, 1);

  // Add the model to the scene
  scene.add(model);
});

// Set up camera position
camera.position.z = 100;

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // an animation loop is required when damping is enabled
// controls.dampingFactor = 0.25; // the damping factor for the controls
// controls.screenSpacePanning = false;
// controls.maxPolarAngle = Math.PI / 2;

// Create an animation loop
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  // Make the model movable
  // Add your custom animations or controls here

  renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();
