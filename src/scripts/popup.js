const popup = document.querySelector('.popup');
const imagesLink = document.querySelectorAll('.furniture__image-wrapper');
const buttonClosePopup = document.querySelector('.popup__close-button');
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

Array.from(imagesLink).forEach((el) => {
  el.addEventListener('click', function(evt) {
    popupOpenedImage.src = evt.target.src;
    openPopup(popup);
  })
})