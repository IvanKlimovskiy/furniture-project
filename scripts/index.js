"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.querySelector('.messenger__button');
  const chatLinks = document.querySelector('.messenger__links');
  const overlay = document.querySelector('#overlay');
  const popupOpenedSlider = document.querySelector(".popup_type_slider");
  const popupOpenedImage = document.querySelector(".popup_type_image");
  const popupSendFormConfirmation = document.querySelector(".popup_type_confirmation");
  const popups = Array.from(document.querySelectorAll(".popup"));
  const goodsKitchen = Array.from(document.querySelectorAll(".goods__image-wrapper_type_kitchen-living-rooms"));
  const goodsCabinets = Array.from(document.querySelectorAll(".goods__image-wrapper_type_cabinets"));
  const goodsDressingRooms = Array.from(document.querySelectorAll(".goods__image-wrapper_type_dressing-rooms"));
  const buttonClosePopup = document.querySelector(".popup__close-button");
  const imagesOpenedPopup = Array.from(document.querySelectorAll(".popup__image"));
  const imageOpenedPopup = document.querySelector(".popup__image");
  const body = document.querySelector(".root");
  const scrollWidth = window.innerWidth - body.offsetWidth + 'px';
  const messenger = document.querySelector(".messenger");
  const messengerLinks = Array.from(document.querySelectorAll(".messenger__link"));
  const buttonBurgerMenu = document.querySelector('.header__burger-menu');
  const navigationMenu = document.querySelector('.nav-menu');
  const buttonCloseNavigationMenu = document.querySelector('.header__close-menu-button');
  const buttonSubmitForm = document.querySelector(".form__submit-button");
  const buttonSendFormConfirmation = document.querySelector(".send-form-popup__button");
  const form = document.querySelector(".form");
  const titleSendFormConfirmation = document.querySelector(".send-form-popup__title");
  const inputElements = Array.from(document.querySelectorAll(".form__input"));
  const buttonForm = document.querySelector(".form__submit-button");
  const agreementCheckbox = document.querySelector("input[name=agreement]");
  const promoFurnitureImages = Array.from(document.querySelectorAll(".furniture__image-wrapper"));
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

  goodsCabinets.forEach((cabinet) => {
    cabinet.addEventListener("click", (evt) => {
      imageOpenedPopup.src = evt.target.src
      openPopup(popupOpenedImage)
    })
  })

  goodsDressingRooms.forEach((dressingRoom) => {
    dressingRoom.addEventListener("click", (evt) => {
      openPopup(popupOpenedImage)
      imageOpenedPopup.src = evt.target.src;
    })
  })

  goodsKitchen.forEach((kitchen, number) => {
    kitchen.addEventListener("click", () => {
      imagesOpenedPopup.forEach((slide, index) => {
        slide.src = kitchenImagesPack[number][index]
      })
      openPopup(popupOpenedSlider)
    })
  });

  promoFurnitureImages.forEach((image) => {
    image.addEventListener("click", (evt) => {
      openPopup(popupOpenedImage)
      imageOpenedPopup.src = evt.target.src;
    })
  })

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
    if (popup.classList.contains("popup_type_slider")) {
      imagesOpenedPopup.forEach((imageOpenedPopup) => {
        imageOpenedPopup.style.visibility = "visible"
      })
    }
  }

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
    setTimeout(() => {
      popup.classList.remove("popup_opened_style_z-index");
    }, 800)
    unlockScroll()
    window.removeEventListener("keydown", closeByEscape)
    if (popup.classList.contains("popup_type_slider")) {
      imagesOpenedPopup.forEach((imageOpenedPopup) => {
        setTimeout(() => {
          imageOpenedPopup.style.visibility = "hidden"
        }, 800)
      })
    }
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
    console.log(formData)
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

  messengerLinks.forEach((messengerLink) => {
    messengerLink.addEventListener("click", () => {
      chatLinks.classList.remove('messenger__links_show');
      overlay.style.display = "none";
    })
  })

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
    if (popup.classList.contains("popup_type_slider") || popup.classList.contains("popup_type_image")) {
      buttonClosePopup.addEventListener("click", () => {
        const popup = buttonClosePopup.closest(".popup");
        closePopup(popup);
      });
    }
  })

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
