import * as THREE from 'three'
export default function createCube(geoProps, matProps) {
    const geo = new THREE.BoxGeometry(geoProps[0], geoProps[1], geoProps[2])
    const mat = new THREE.MeshPhongMaterial(matProps)
    const cube = new THREE.Mesh(geo, mat)
    return cube
}