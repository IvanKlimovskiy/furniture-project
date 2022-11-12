const popup = document.querySelector('.popup');
const imageLink = document.querySelector('.furniture__image-link');
const buttonClosePopup = document.querySelector('.popup__close-button');
const width = screen.width;

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonClosePopup.addEventListener("click", () => {
  closePopup(popup);
});

imageLink.addEventListener("click", () => {
  openPopup(popup);
});