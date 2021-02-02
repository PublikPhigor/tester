const navBtn = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    navBtn.classList.toggle('active');
});