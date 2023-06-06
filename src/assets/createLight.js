import * as THREE from 'three'
export function createPointLight(color = 'white', density = 1.5, position = [0, 0, 0]) {
    const light = new THREE.PointLight(color, density)
    light.position.set(position[0], position[1], position[2])
    light.shadow.mapSize.width = 4000; 
    light.shadow.mapSize.height = 4000;
    light.castShadow = true
    return light
}
export function createAmbientLight(color = 'white', density = .3) {
    const ambientlight = new THREE.AmbientLight(color, density)
    return ambientlight
}