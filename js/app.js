//NAVBAR 
let toggleBtn = document.getElementById('toggle-btn');
let navLinks = document.getElementById('navbar');

toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');

})

//COPYRIGHT YEAR
const getYear = document.querySelector('.copyright_year').innerText = `${new Date().getFullYear()}. `;