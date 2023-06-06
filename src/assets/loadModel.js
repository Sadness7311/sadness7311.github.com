import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default function loadModel(path) {
    const loader = new GLTFLoader()
    return new Promise((resolve) => {
        loader.load(path, gltf => {
            resolve(gltf.scene)
        })
    })
}