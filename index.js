const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuWrapper = document.querySelector('.menu-wrapper');
const body = document.querySelector('body');

menuWrapper.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
}