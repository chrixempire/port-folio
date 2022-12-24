var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')
let seeMoreBtn = document.querySelector('.btn')
let port = document.getElementById('port')
let icon = document.getElementById('icon');
let icons = document.getElementById('icons');
let light = document.getElementById('light')
let lights = document.getElementById('lights')
let Sidemenu = document.getElementById('sideMenu');




const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
)

function closeMenu2(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}







const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 300})
sr.reveal('.contact__button', {delay: 500})









const btnScrollTop = document.getElementById('btn-scroll')
btnScrollTop.addEventListener('click', ()=>{
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
      
    );
})

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

seeMoreBtn.addEventListener('click', (e)=> {
    port.classList.toggle('show-more');
    if(seeMoreBtn.innerText === 'SEE MORE'){
        seeMoreBtn.innerText = 'SEE LESS'
    }else {
        seeMoreBtn.innerText = 'SEE MORE'
    }
})

icon.addEventListener('click', function(){
    icon.classList.toggle('bi-moon-fill')
    if(icon.classList.contains('bi-moon-fill')){
        document.body.classList.add('theme')
        light.innerHTML = 'Dark'
    

    }else{
        document.body.classList.remove('theme')
        light.innerHTML = 'Light'
      
       
    }
})
icons.addEventListener('click', function(){
    icon.classList.toggle('bi-moon-fill')
    if(icon.classList.contains('bi-moon-fill')){
        document.body.classList.add('theme')
        lights.innerHTML = 'Dark'


    }else{
        document.body.classList.remove('theme')
        lights.innerHTML = 'Light'

       
    }
})

