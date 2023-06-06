export function disappear(element) {
    try {
        if(element.isMesh) {
        gsap.to(element.position, { z: element.position.z + .8, duration: .3 })
        gsap.to(element.material, { opacity: 0, duration: .3 })
        } else {
            gsap.to(element, { y: '+=30', opacity: 0, duration: .3, 
            onComplete: () => element.style.display = 'none' })
        }
    } catch (error) {}
}
export function appear(element, drop = 20) {
    try {
        if (element.isMesh) {
            gsap.to(element.position, { y: element.position.y - .5, duration: 1 })
            gsap.to(element.material, { opacity: 1, duration: 1 })
        } else {
            gsap.to(element, { y: `+=${drop}`, opacity: 1, duration: .5 })
        }
    } catch (error) {}
}