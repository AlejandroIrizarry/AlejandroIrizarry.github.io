const toggle = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})