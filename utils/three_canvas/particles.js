import * as THREE from "three";
import circle from "../../assets/circle.png";
// Scene
export default function () {
  const canvasWrapper = document.querySelector(".sliderWrapper");
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  //box
  const boxGeo = new THREE.TorusGeometry(2, 0.9, 16, 50);
  const circleTexture = new THREE.TextureLoader().load(circle);

  const pointsGeometry = new THREE.BufferGeometry();
  const pointsCount = 10000;
  const postArray = new Float32Array(pointsCount * 3);
  for (let index = 0; index < pointsCount; index++) {
    postArray[index] = (Math.random() - 0.5) * (Math.random() * 50);
  }
  pointsGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(postArray, 3)
  );
  const pMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  });
  const pGeo = new THREE.SphereGeometry(2);
  const boxMaterial = new THREE.PointsMaterial({
    map: circleTexture,
    size: Math.random() * 0.04 + 0.02,
    transparent: true,
  });
  for (let index = 0; index < pointsCount; index++) {
    const pMesh = new THREE.Mesh(pGeo, pMaterial);
    pMesh.position.set(
      (Math.random() - 0.5) * (Math.random() * 50),
      (Math.random() - 0.5) * (Math.random() * 50),
      Math.random() * 10 - 5
    );
  }
  const boxMesh = new THREE.Points(boxGeo, boxMaterial);
  const particlesmesh = new THREE.Points(pointsGeometry, boxMaterial);

  boxMesh.position.z = -10;
  boxMesh.position.y = -0;

  // Camera
  // const camera = new THREE.PerspectiveCamera(60, 760 / 320, 0.1, 1000);
  const camera = new THREE.PerspectiveCamera(60);

  camera.position.z = -10;

  // mouse position
  const mouse = {
    x: 0,
    y: 0,
  };

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  // direction light
  const directionalLight = new THREE.PointLight(0x2f188b, 5);
  directionalLight.position.set(4, 10, 25);

  // add scene

  scene.add(directionalLight);
  scene.add(particlesmesh);
  canvasWrapper.appendChild(renderer.domElement);

  // renderer
  renderer.render(scene, camera);

  const clock = new THREE.Clock();
  function animate() {
    const elapseTime = clock.getElapsedTime();
    requestAnimationFrame(animate);
    boxMesh.rotation.y = 0.5 * elapseTime;
    particlesmesh.rotation.y = -(0.1 * elapseTime);

    renderer.render(scene, camera);
  }
  window.addEventListener("resize", () => {
    renderer.setSize(
      canvasWrapper.getBoundingClientRect().width,
      canvasWrapper.getBoundingClientRect().height
    );
    camera.aspect =
      canvasWrapper.getBoundingClientRect().width /
      canvasWrapper.getBoundingClientRect().height;
    camera.updateProjectionMatrix();
  });
  camera.aspect = 1920 / 370;
  camera.far = 1000;
  camera.near = 0.1;
  renderer.setSize(1920, 370);
  camera.updateProjectionMatrix();

  animate();
}
