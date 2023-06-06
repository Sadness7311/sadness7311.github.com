export default function getDimensions() {
    let width = window.innerWidth
    let height = window.innerHeight
    window.addEventListener('resize', () => {
        width = window.innerWidth
        height = window.innerHeight
        console.log(width, height)
    })
    return [width, height]
}