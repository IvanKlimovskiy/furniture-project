const popup = document.querySelector(".popup");
const goods = Array.from(document.querySelectorAll(".goods__image-wrapper"));
const buttonClosePopup = document.querySelector(".popup__close-button");
const popupOpenedImages = Array.from(document.querySelectorAll(".popup__image"));
const body = document.querySelector(".root")
const scrollWidth = window.innerWidth - body.offsetWidth + 'px';
const header = document.querySelector(".header")
const footer= document.querySelector(".footer")
const contentSection = document.querySelector(".content")
const messenger = document.querySelector(".messenger")

const pictures = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"]
const pictures2 = ["./images/commercial-furniture1.jpg", "./images/commercial-furniture2.jpg", "./images/commercial-furniture3.jpg"]
const pictures3 = ["./images/finished-furniture1.jpg", "./images/finished-furniture2.jpg", "./images/finished-furniture3.jpg"]
const pictures4 = ["./images/kitchen1.jpg", "./images/kitchen2.jpg", "./images/kitchen3.jpg"]
const pictures5 = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"]
const pictures6 = ["./images/commercial-furniture1.jpg", "./images/commercial-furniture2.jpg", "./images/commercial-furniture3.jpg"]
const pictures7 = ["./images/finished-furniture1.jpg", "./images/finished-furniture2.jpg", "./images/finished-furniture3.jpg"]
const pictures8 = ["./images/kitchen1.jpg", "./images/kitchen2.jpg", "./images/kitchen3.jpg"]

const arrays = [pictures, pictures2, pictures3, pictures4, pictures5, pictures6, pictures7, pictures8]

const lockScroll = () => {
  body.classList.add("root_scroll_disabled")
  popup.style.paddingRight = scrollWidth
  header.style.paddingRight = scrollWidth
  contentSection.style.paddingRight = scrollWidth
  footer.style.paddingRight = scrollWidth
  messenger.style.paddingRight = scrollWidth
}

const unlockScroll = () => {
  body.classList.remove("root_scroll_disabled")
  popup.style.paddingRight = "0"
  header.style.paddingRight = "0"
  footer.style.paddingRight = "0"
  contentSection.style.paddingRight = "0"
  messenger.style.paddingRight = "0"
}

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(popup);
  }
})

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  lockScroll()
  window.addEventListener("keydown", closeByEscape)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  unlockScroll()
  window.removeEventListener("keydown", closeByEscape)
}

buttonClosePopup.addEventListener("click", () => {
  closePopup(popup);
});

goods.forEach((el, number) => {
  el.addEventListener("click", () => {
    popupOpenedImages.forEach((slide, index) => {
      slide.src = arrays[number][index]
    })
    openPopup(popup);
  });
});
