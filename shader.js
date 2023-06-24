import * as THREE from './main/Three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, -3, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var backgroundContainer = document.getElementById("background-container");
backgroundContainer.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry( 20 );
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();

window.onresize = function() {
    renderer.setSize( window.innerWidth, window.innerHeight );
}