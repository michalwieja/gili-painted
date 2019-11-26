// banner animation 

setTimeout(function () {
    this.document.querySelector('nav').classList.remove('banner')
}, 2700);

// nav slide 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const links = document.querySelectorAll('.nav__link')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
        links.forEach((link, index) => {

            link.style.animation = `navLinkFade 1.5s ease forwards ${index / 5}s`;

            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            })
        })
    })
}

navSlide();