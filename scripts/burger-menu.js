const buttonBurgerMenu = document.querySelector('.header__burger-menu'); 
const navigationMenu = document.querySelector('.nav-menu');
const buttonCloseNavigationMenu = document.querySelector('.header__close-menu-button');

buttonBurgerMenu.addEventListener('click', () => {
  navigationMenu.style.left = '0';
})

buttonCloseNavigationMenu.addEventListener('click', () => {
  navigationMenu.style.left = '-100%';
})