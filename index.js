
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbarr');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelector('.nav-list');
const hamOne = document.querySelector('.ham-one');
const hamTwo = document.querySelector('.ham-two');
const hamThree = document.querySelector('.ham-three');

overlay.addEventListener('click', () => {
    hamOne.classList.remove('active-right');
    hamThree.classList.remove('active-left');
    hamTwo.style.display = 'block';
    overlay.style.display = 'none';
    navLinks.style.display = 'none';
    nav.classList.remove('nav-links');
    hamburger.classList.remove('is-active');
}
);
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('is-active')) {
        hamOne.classList.remove('active-right');
        hamThree.classList.remove('active-left');
        hamTwo.style.display = 'block';
        overlay.style.display = 'none';
        navLinks.style.display = 'none';
        nav.classList.remove('nav-links');
        hamburger.classList.remove('is-active');
    }
    else {
        hamOne.classList.add('active-right');
        hamThree.classList.add('active-left');
        hamTwo.style.display = 'none';
        overlay.style.display = 'inline-block';
        navLinks.style.display = 'block';
        nav.classList.toggle('nav-links');
        hamburger.classList.toggle('is-active');
    }
}
);


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})