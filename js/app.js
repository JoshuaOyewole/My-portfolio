/* NAVBAR */
let toggleBtn = document.getElementById('toggle-btn');
let navLinks = document.getElementById('navbar');

toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})


/* COPYRIGHT YEAR */
const copyrightYear = new Date().getFullYear();

const year = document.querySelector('#cyear').innerText = copyrightYear;
