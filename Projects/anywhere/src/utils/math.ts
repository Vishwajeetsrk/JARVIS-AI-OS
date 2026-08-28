import * as THREE from 'three';

/**
 * Distributes a number of points evenly around a sphere's surface.
 * Returns an array of THREE.Vector3.
 */
export function generateFibonacciSphere(samples: number, radius: number = 1): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

  for (let i = 0; i < samples; i++) {
    // y goes from 1 to -1
    const y = 1 - (i / (samples - 1)) * 2;
    // radius at y
    const r = Math.sqrt(1 - y * y);

    // golden angle increment
    const theta = phi * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }

  return points;
}
