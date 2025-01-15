const menuIcon = document.querySelector('#menuImg');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const form = document.querySelector('form');
const notes = [];
