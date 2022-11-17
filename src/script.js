const popup = document.querySelector('.popup');
const imagesLink = document.querySelectorAll('.furniture__image-link');
const buttonClosePopup = document.querySelector('.popup__close-button');
const buttonBurgerMenu = document.querySelector('.header__burger-menu'); 
const navigationMenu = document.querySelector('.nav-menu');
const buttonCloseNavigationMenu = document.querySelector('.header__close-menu-button');
const popupOpenedImage = document.querySelector('.popup__image')

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonClosePopup.addEventListener("click", () => {
  closePopup(popup);
});

buttonBurgerMenu.addEventListener('click', () => {
  navigationMenu.style.left = '0';
})

buttonCloseNavigationMenu.addEventListener('click', () => {
  navigationMenu.style.left = '-100%';
})

Array.from(imagesLink).forEach((el) => {
  el.addEventListener('click', function(evt) {
    popupOpenedImage.src = evt.target.src;
    openPopup(popup);
  })
})