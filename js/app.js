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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
    sections.forEach(e =>{
        const li = document.createElement('li')
        li.dataset.nav = `${e.id}`
        li.className = `menu__link ${e.className}`
        li.innerHTML = `${e.dataset.nav}`;
        navbar.appendChild(li)
    })


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

    navbar.addEventListener('click', e =>{
        document.getElementById( e.target.dataset.nav).scrollIntoView()
    })


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

