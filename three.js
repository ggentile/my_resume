import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// checar como fazer o navbar funcionar de forma correta. 
let radius = 100;
let segment = 64;
const geometry = new THREE.CircleGeometry(radius, segment);
const material = new THREE.LineBasicMaterial( {color: 0xff0000});

geometry.vertices.shift();

const elipse = new THREE.Line(geometry, material);
scene.add(elipse);



function animate () {
    requestAnimationFrame(animate);
    elipse.rotation.x += 0.01;
    elipse.rotation.y += 0.005
    elipse.rotation.z +=0.01

    renderer.render(scene, camera);
}

animate();
