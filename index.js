// const menuIcon = document.querySelector('#menuImg');
// const navLinks = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });

const account = document.querySelector('#account');
const form = document.querySelector('.box');


const defaultContent = form.innerHTML;

account.addEventListener('click', () => {
    form.innerHTML = 'Profile';
});

const notes = document.querySelector('#notes');
notes.addEventListener('click', () => {
    form.innerHTML = 'Notes and stuff';
});

const home = document.querySelector('#home');
home.addEventListener('click', () => {
    form.innerHTML = defaultContent;
});


