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

window.onscroll = function() {
  let sidebar = document.querySelector('.sidebar');
  let footer = document.querySelector('footer');
  let header = document.querySelector('header'); 
  
  
  let headerHeight = header.offsetHeight;
  let scrollY = window.scrollY;
  let footerTop = footer.offsetTop;
  let sidebarHeight = sidebar.offsetHeight;
  
  if (scrollY + headerHeight + sidebarHeight > footerTop) {
    sidebar.style.position = 'absolute';
    sidebar.style.top = (footerTop - sidebarHeight) + 'px';
  } else {
    sidebar.style.position = 'absolute';
    sidebar.style.top = scrollY + headerHeight + 'px';
  }
};