// banner animation 

setTimeout(function () {
    this.document.querySelector('nav').classList.remove('banner')
}, 2000);

// nav slide 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const links = document.querySelectorAll('.nav__link')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1.5s ease forwards ${index / 5}s`;

            }
        })
    })
}

navSlide();