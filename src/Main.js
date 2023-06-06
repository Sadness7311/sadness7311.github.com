import World from "./assets/World";
import loadModel from "./assets/loadModel";
import { createAmbientLight, createPointLight } from "./assets/createLight";
import Loader from "./3Dcomponents/Loader";
import init from '../src/init'

gsap.registerPlugin(TextPlugin)
const world = new World(document.querySelector('.webgl'))
const { scene, camera, renderer } = world;

scene.add(createPointLight('white', 1.5, [0, 0, 3]))
scene.add(createAmbientLight())
const loader = Loader()
scene.add(loader)

loadModel("/public/model.gltf").then(model => {
    init(model, scene, loader, camera)
})


function render() {
    requestAnimationFrame(render)
    renderer.render(scene, camera)
} 
render()
