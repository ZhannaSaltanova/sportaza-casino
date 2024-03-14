

document.querySelector('.menu').addEventListener('click', function(e) {
    e.preventDefault(); 
    this.classList.toggle('active'); 
    document.querySelector('.text-second').classList.toggle('shift-right'); 
  });