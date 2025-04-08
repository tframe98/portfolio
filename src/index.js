// src/index.js
import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';
import { swirlVertex } from './shaders/swirlVertex.js';
import { swirlFragment } from './shaders/swirlFragment.js';

let camera, scene, renderer, material;
init();
animate();

function init() {
  // Create scene and orthographic camera
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  // Create renderer and add the canvas to the DOM
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Full-screen plane geometry
  const geometry = new THREE.PlaneGeometry(2, 2);

  // Create a ShaderMaterial with custom vertex and fragment shaders
  material = new THREE.ShaderMaterial({
    vertexShader: swirlVertex,
    fragmentShader: swirlFragment,
    uniforms: {
      u_time: { value: 4 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }
  });

  // Mesh with our plane and shader material
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Resize handling
  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  // Update time uniform for animation
  material.uniforms.u_time.value = performance.now() * 0.001;
  renderer.render(scene, camera);
}