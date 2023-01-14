const inputElements = Array.from(document.querySelectorAll(".form__input"));
const buttonForm = document.querySelector(".form__submit-button");
const agreementCheckbox = document.querySelector("input[name=agreement]");

const activateSubmitButton = () => {
  buttonForm.classList.remove("form__submit-button_disabled")
  buttonForm.disabled = false
}

const deactivateSubmitButton = () => {
  buttonForm.classList.add("form__submit-button_disabled")
  buttonForm.disabled = true
}

agreementCheckbox.addEventListener("change", () => {
  if (agreementCheckbox.checked) {
    activateSubmitButton()
  } else {
    deactivateSubmitButton()
  }
})

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

