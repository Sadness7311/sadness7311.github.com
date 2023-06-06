import getDimensions from "../assets/getDimensions";

function resize() {
    const [ width, height ] = getDimensions()
    const navbarElem = document.getElementById('ul-elem')

    navbarElem.innerHTML = width > 800 ? `
    <i class="ri-menu-4-line"></i>
    <li>Projects</li>
    <li>Skills</li>
    <button class="sign">Sign Up</button>
    <button class="log">Log In</button>` : 
    `<i class="ri-menu-4-line"></i>
    <button class="sign">Sign Up</button>`
}
    window.addEventListener('load', resize)
    window.addEventListener('resize', resize)