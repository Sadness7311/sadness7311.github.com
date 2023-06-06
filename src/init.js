import * as THREE from 'three'
import { appear, disappear } from './assets/Animations'
import Cubes from './3Dcomponents/Cubes'
import getDimensions from './assets/getDimensions'
const loadingText = document.querySelector('.loading')
export default function init(model, scene, loaderGroup, camera) {
  
  const children = model.children[0].children
  
  children.map(child => {
    child.material.transparent = true
    child.position.y += .5
    child.material.opacity = 0
    child.castShadow = true
    child.receiveShadow = true
  })
 
  let i = 0;
  setInterval(() => {
    disappear(loaderGroup.children[i])
    i += 1
    gsap.to(loadingText, { text: 'Loaded!', 
    onComplete: () => setTimeout(() => disappear(loadingText), 500)  })
    if (i === 3) {
      setTimeout(() => load(), 200)
    }
  }, 400)

  function load() {
    scene.remove(loaderGroup)
    let i = 0
    setInterval(() => {
      appear(children[i])
      i += 1
    }, 200)
        gsap.to(camera.position, { z: 10 })  
        scene.add(model)
        
    document.getElementById('container').style.display = 'block'    
    
    appear(document.querySelector('.nav'), 10)
    setTimeout(() => appear(document.querySelector('#heading'), 40), 1000)
    scene.add(Cubes())

    scene.traverse(child => child.material ? child.material.side = THREE.FrontSide:undefined)}
    
    
    model.position.set(6.5, -2.9, 0)
    model.rotation.set(0, 3.4, 0)
    model.scale.set(.85, .85, .85)
  }