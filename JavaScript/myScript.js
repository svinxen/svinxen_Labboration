
/* VISA MENY*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* MENY I MOBIL */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu') /* Tryck på länk tar bort menyn */
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click0', linkAction))


/* BLUR FOR HEADER */
const blurHeader = () =>{
    const header = document.getElementById('header')
    /* När man ser 50% eller mindre av headern */
    this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)