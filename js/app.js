/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const navbar = document.querySelector('#navbar__list');
const menu = document.querySelector('navbar__menu');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/*let timer = null;
window.addEventListener('mousemove', () => {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(() => {
         navbar.style.display = 'none';
    }, 800);

return false}, );


window.addEventListener('scroll', () => {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(()=> {
         navbar.style.display = '';
    }, );
}, false);*/

window.addEventListener('mousemove', ()=>{
    navbar.style.display ='';
    show();
    hide();
});

const hide =() => {
    timer = setTimeout(()=>{
        navbar.style.display ='none';
    }, 1000);
}
const show = () => {
    if(typeof timer != 'undefined'){
        clearTimeout(timer);
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
    sections.forEach(e =>{
        const li = document.createElement('li')
        li.dataset.nav = `${e.id}`
        li.className = `menu__link`
        li.innerHTML = `${e.dataset.nav}`;
        navbar.appendChild(li)
    });


// Add class 'active' to section when near top of viewport


    window.addEventListener('scroll', e =>{
            sections.forEach( e=> {
                const section = e.getBoundingClientRect();
                const li = document.querySelector('li[data-nav="' + e.id + '"]');
                if (section.top <= window.innerHeight/2 && section.bottom >= window.innerHeight/2){
                    e.classList.add('your-active-class');
                    li.classList.add('active');
                } else {
                     e.classList.remove('your-active-class');
                      li.classList.remove('active');
                }
                })
            })
        
    

// Scroll to anchor ID using scrollTO event

    navbar.addEventListener('click', e =>{
        document.getElementById(e.target.dataset.nav).scrollIntoView()
    });

/**
 * End Main Functions
 * Begin Events
 *
*/



// Build menu

// Scroll to section on link click

// Set sections as active


