$(document).ready(function() {
  $('.burger-button').on('click', function(e) {
    e.preventDefault();  
    $('.burgermenu').toggleClass('burgermenu_active');
    $('.burger-button').toggleClass('button-close');
  });
});

document.querySelector('.menu').addEventListener('click', function(e) {
    e.preventDefault(); 
    this.classList.toggle('active'); 
    document.querySelector('.text-second').classList.toggle('shift-right'); 
  });