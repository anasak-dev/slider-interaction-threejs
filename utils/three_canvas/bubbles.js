import * as THREE from "three";
export default function () {
  const canvas = document.querySelector(".particles");
  const sphereCount = 2500;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(500, 380);
  canvas.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0);
  const geo = new THREE.SphereGeometry(0.3, 10, 10);
  const material = new THREE.MeshBasicMaterial({});
  const mesh = new THREE.InstancedMesh(geo, material, sphereCount);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 500 / 380, 0.1, 1000);

  // Camera positioning
  camera.position.set(0, -25, 30);

  // camera.position.z = 7;
  const obj3d = new THREE.Object3D();
  for (let i = 0; i < sphereCount; i++) {
    obj3d.position.x = Math.random() * 500 - 10;

    obj3d.position.y = Math.random() * (2 - 260) + 2;
    obj3d.position.z = -20;
    obj3d.scale.x = obj3d.scale.y = Math.random();
    obj3d.updateMatrix();
    mesh.setMatrixAt(i, obj3d.matrix);
  }

  scene.add(mesh);

  renderer.render(scene, camera);
  const matrix = new THREE.Matrix4();
  function animate() {
    for (let i = 0; i < sphereCount; i++) {
      mesh.getMatrixAt(i, matrix);
      matrix.decompose(obj3d.position, obj3d.rotation, obj3d.scale);
      obj3d.position.x += Math.random() * 0.2;
      // Move the boxMesh upwards

      // Check if the boxMesh is outside the camera's view
      if (obj3d.position.x > camera.position.x + 5) {
        // Reset the boxMesh's position to the top
        obj3d.position.x = Math.random() * 0.8;
        obj3d.scale.x = obj3d.scale.y = Math.random() * 40 * 0.04;
      }
      obj3d.updateMatrix();
      mesh.setMatrixAt(i, obj3d.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    renderer.render(scene, camera);
    // gui.updateDisplay();
  }

  renderer.setAnimationLoop(animate);

  window.addEventListener("resize", function () {
    camera.aspect = 500 / 380;
    camera.updateProjectionMatrix();
    renderer.setSize(500, 380);
  });
}
