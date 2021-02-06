const navBtn = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    navBtn.classList.toggle('active');
});


//fixed header 
const header = document.querySelector('header');
const navbarList = document.querySelectorAll('nav a');
const lp = document.querySelector('.landing-page');

const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('fixed');
            navbarList.forEach(listItem => {
                listItem.classList.add('fixed');
            });
        } else {
            header.classList.remove('fixed');
            navbarList.forEach(listItem => {
                listItem.classList.remove('fixed');
            });
        }
    });
}, slideObserverOptions);

slideObserver.observe(lp);



//slider
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
let counter = 1;

showSlides();
function showSlides() {
    slider.style.transform = `translateX(${-counter * 25}%)`;
    slider.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    if (counter === slide.length) {
        counter = 1;
    }

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
