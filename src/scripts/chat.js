const chatButton = document.querySelector('.messenger__button');
const chatLinks = document.querySelector('.messenger__links');

function showMessengers() {
  chatLinks.classList.toggle('messenger__links_show');
}

chatButton.addEventListener('click', showMessengers);