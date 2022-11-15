const popup = document.querySelector('.popup');
const imageLink = document.querySelector('.furniture__image-link');
const buttonClosePopup = document.querySelector('.popup__close-button');
const buttonBurgerMenu = document.querySelector('.header__burger-menu'); 
const navigationMenu = document.querySelector('.nav-menu');
const buttonCloseNavigationMenu = document.querySelector('.header__close-menu-button');

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// buttonClosePopup.addEventListener("click", () => {
//   closePopup(popup);
// });

// imageLink.addEventListener("click", () => {
//   openPopup(popup);
// });

buttonBurgerMenu.addEventListener('click', () => {
  navigationMenu.style.left = '0';
})

buttonCloseNavigationMenu.addEventListener('click', () => {
  navigationMenu.style.left = '-100%';
})