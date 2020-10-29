const menuBtn = document.querySelector('.mobile-menu');
const modal = document.querySelector('.menu-modal');
const terminal = document.querySelector('.terminal');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', ()=>{
    modal.style.display = 'block';
    terminal.classList.add('after')
});

closeBtn.addEventListener("click", () =>{
    modal.style.display = 'none';
    modal.style.transition = "visibility 0s 2s, opacity 2s linear";
    terminal.classList.remove('after');
})