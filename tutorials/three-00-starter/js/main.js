// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

let scene, camera, renderer, cube, octahedron;

function init() {
    // ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
    scene = new THREE.Scene();

    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(1, 1, 5);
    scene.add(light);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
    const controls = new OrbitControls(camera, renderer.domElement);
    const loader = new GLTFLoader(); // to load 3d models

    loader.load('assets/spaceship.gltf', function (gltf) {
        const spaceship = gltf.scene;
        scene.add(spaceship);
    });

    // ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
    // →→→→→→ Follow next steps in tutorial: 
    // // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

    /*
    // --- Octahedron ---
    const geometry1 = new THREE.OctahedronGeometry(1, 0);
    const tex1 = new THREE.TextureLoader().load('textures/bw.jpg');
    const mat1 = new THREE.MeshBasicMaterial({ map: tex1 }); 
    octahedron = new THREE.Mesh(geometry1, mat1);
    scene.add(octahedron);

    // --- Torus ---
    const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const texture = new THREE.TextureLoader().load('textures/ice.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    */

    camera.position.z = 5;
}

//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function animate() {
    requestAnimationFrame(animate);


    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // octahedron.rotation.x -= 0.01;
    // octahedron.rotation.y += 0.02;


    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
