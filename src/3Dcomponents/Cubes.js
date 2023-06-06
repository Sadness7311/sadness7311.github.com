import * as THREE from 'three'
import createCube from '../assets/createCube'
export default function Cubes() {
    const cubes = new THREE.Group()
    const props = [[2, 3, 0, 'orange', [ 4.494, 3.954, 0.901]], 
    [-1, -4, 2, '#cecdcd', [0, -1, 0]], [13, 4, 0, '#fff893', [ 4.494, 3.954, 0.901]],
    [-13, -7, -1, 'lightblue', [0, 0, 0]]]
    for(let i = 0; i < props.length; i++) {
        const cube = createCube([.5, .5, .5], { color: props[i][3] })
        cube.position.set(props[i][0], props[i][1], props[i][2])
        cube.rotation.set(props[i][4][0], props[i][4][1], props[i][4][2])
        cube.castShadow = true
        cube.receiveShadow = true
        cubes.add(cube)
}
    return cubes
}