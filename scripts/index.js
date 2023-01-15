'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const chatButton = document.querySelector('.messenger__button');
  const chatLinks = document.querySelector('.messenger__links');
  const overlay = document.querySelector('#overlay');
  const popupOpenedImage = document.querySelector(".popup_type_image");
  const popups = Array.from(document.querySelectorAll(".popup"));
  const goods = Array.from(document.querySelectorAll(".goods__image-wrapper"));
  const buttonClosePopup = document.querySelector(".popup__close-button");
  const popupOpenedImages = Array.from(document.querySelectorAll(".popup__image"));
  const body = document.querySelector(".root");
  const scrollWidth = window.innerWidth - body.offsetWidth + 'px';
  const messenger = document.querySelector(".messenger");
  const buttonBurgerMenu = document.querySelector('.header__burger-menu');
  const navigationMenu = document.querySelector('.nav-menu');
  const buttonCloseNavigationMenu = document.querySelector('.header__close-menu-button');
  const buttonSubmitForm = document.querySelector(".form__submit-button");
  const buttonSendFormConfirmation = document.querySelector(".send-form-popup__button");
  const form = document.querySelector(".form");
  const titleSendFormConfirmation = document.querySelector(".send-form-popup__title");
  const popupSendFormConfirmation = document.querySelector(".popup_type_confirmation");
  const inputElements = Array.from(document.querySelectorAll(".form__input"));
  const buttonForm = document.querySelector(".form__submit-button");
  const agreementCheckbox = document.querySelector("input[name=agreement]");
  const firstKitchenImages = ["./images/kitchens/kitchen1/A5xZ3VriGTY.jpg", "./images/kitchens/kitchen1/bjoutB56jLk.jpg", "./images/kitchens/kitchen1/znUJ-lvCAO0.jpg"];
  const secondKitchenImages = ["./images/kitchens/kitchen2/d_Z27ziCwUE.jpg", "./images/kitchens/kitchen2/JLj3T2mM6fE.jpg", "./images/kitchens/kitchen2/uJwNOiZgBkI.jpg"];
  const thirdKitchenImages = ["./images/kitchens/kitchen3/dfxfgdf.jpg", "./images/kitchens/kitchen3/fghfds.jpg", "./images/kitchens/kitchen3/sthgfth.jpg"];
  const fourthKitchenImages = ["./images/kitchens/kitchen4/FR22m1X5vuI.jpg", "./images/kitchens/kitchen4/TjG4YjDNbwY.jpg", "./images/kitchens/kitchen4/uEUZpOlqcpo.jpg"];
  const fifthKitchenImages = ["./images/kitchens/kitchen5/9oYSHQo9vN8.jpg", "./images/kitchens/kitchen5/_R8AcMsIbkY.jpg", "./images/kitchens/kitchen5/S6G_xgvZqD0.jpg"];
  const sixKitchenImages = ["./images/kitchens/kitchen6/D59fNNNIHxQ.jpg", "./images/kitchens/kitchen6/YhDrFmzxB1o.jpg", "./images/kitchens/kitchen6/znOfK3_mNrg.jpg"];
  const kitchenImagesPack = [firstKitchenImages, secondKitchenImages, thirdKitchenImages, fourthKitchenImages, fifthKitchenImages, sixKitchenImages];

  const lockScroll = () => {
    body.classList.add("root_scroll_disabled")
    body.style.paddingRight = scrollWidth
    messenger.style.paddingRight = scrollWidth
  }

  goods.forEach((el, number) => {
    el.addEventListener("click", () => {
      popupOpenedImages.forEach((slide, index) => {
        Promise.resolve(slide.src = kitchenImagesPack[number][index])
          .then(() => openPopup(popupOpenedImage))
      })
    });
  });

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      if (!inputElement.validity.valid) {
        inputElement.classList.add("form__input_type_error")
        toggleButtonState(hasInvalidInputs(inputElements))
      } else {
        inputElement.classList.remove("form__input_type_error")
        toggleButtonState(hasInvalidInputs(inputElements))
      }
    })
  })

  const activateSubmitButton = () => {
    buttonForm.classList.remove("form__submit-button_disabled")
    buttonForm.disabled = false
  }

  const deactivateSubmitButton = () => {
    buttonForm.classList.add("form__submit-button_disabled")
    buttonForm.disabled = true
  }
  const toggleButtonState = (hasInvalidInputs) => {
    if (hasInvalidInputs || !agreementCheckbox.checked) {
      deactivateSubmitButton()
    } else {
      activateSubmitButton()
    }
  }

  const hasInvalidInputs = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const unlockScroll = () => {
    setTimeout(() => {
      body.classList.remove("root_scroll_disabled")
      body.style.paddingRight = "0"
      messenger.style.paddingRight = "0"
    }, 800)
  }

  const closeByEscape = (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened')
      closePopup(openedPopup)
    }
  }

  function openPopup(popup) {
    popup.classList.add("popup_opened_style_z-index");
    popup.classList.add("popup_opened");
    lockScroll()
    window.addEventListener("keydown", closeByEscape)
  }

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
    setTimeout(() => {
      popup.classList.remove("popup_opened_style_z-index");
    }, 800)
    unlockScroll()
    window.removeEventListener("keydown", closeByEscape)
  }

  function toggleButtonSendingData(isSent) {
    if (isSent) {
      buttonSubmitForm.textContent = "Отправить"
      buttonSubmitForm.disabled = false
    } else {
      buttonSubmitForm.textContent = "Отправка..."
      buttonSubmitForm.disabled = true
    }
  }

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    toggleButtonSendingData(false)
    const formData = new FormData(form);
    fetch("sendmail.php", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка: ${response.status}`);
      }
    }).then((response) => {
      openPopup(popupSendFormConfirmation)
      titleSendFormConfirmation.textContent = response.message
    }).catch((error) => {
      titleSendFormConfirmation.textContent = error.message
    }).finally(() => {
      toggleButtonSendingData(true)
      deactivateSubmitButton()
    })
    form.reset()
  });

  document.addEventListener('click', function (evt) {
    if (evt.target.id === 'overlay') {
      chatLinks.classList.remove('messenger__links_show');
      overlay.style.display = "none";
    }

    if (evt.target === chatButton) {
      chatLinks.classList.toggle('messenger__links_show');
      overlay.style.display = "block";
    }
  })

  popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup")) {
        closePopup(popup);
      }
    })
  })

  buttonClosePopup.addEventListener("click", () => {
    closePopup(popupOpenedImage);
  });

  buttonBurgerMenu.addEventListener('click', () => {
    navigationMenu.style.left = '0';
  })

  buttonCloseNavigationMenu.addEventListener('click', () => {
    navigationMenu.style.left = '-100%';
  })

  agreementCheckbox.addEventListener("change", () => {
    toggleButtonState(hasInvalidInputs(inputElements))
  })

  buttonSendFormConfirmation.addEventListener("click", () => {
    closePopup(popupSendFormConfirmation);
  })
})
