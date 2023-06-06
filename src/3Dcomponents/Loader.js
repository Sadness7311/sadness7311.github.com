import * as THREE from 'three'
import createCube from '../assets/createCube'
export default function Loader() {
    const loaderGroup  = new THREE.Group()
    for (let i = 0; i < 3; i++) {
    const cube = createCube([1, 1, 1], { color: i === 0 ? '#A49FD8' : '#F0C1DB', transparent: true })
    cube.position.y = i -1
    i === 2 && cube.position.setZ(-1)
    loaderGroup.add(cube)
    }
    loaderGroup.rotation.set(2, 0, 2)
    loaderGroup.traverse(child => {
    if (child === loaderGroup.children[2]) {
        gsap.timeline({ yoyo: true, repeat: -1 })
        .to(loaderGroup.children[1].position, { x: 1, duration: .5 })
        .to(child.position, { z: 0, duration: .5 })
    }
})
return loaderGroup
}