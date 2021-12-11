let toggleBtn = document.getElementById('toggle-btn');
let navLinks = document.getElementById('navbar');

toggleBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');

})