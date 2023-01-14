const chatButton = document.querySelector('.messenger__button');
const chatLinks = document.querySelector('.messenger__links');
const overlay = document.querySelector('#overlay');

document.addEventListener('click', function (evt) {
  if (evt.target.id == 'overlay') {
    chatLinks.classList.remove('messenger__links_show');
    overlay.style.display = "none";
  }

  if (evt.target == chatButton) {
    chatLinks.classList.toggle('messenger__links_show');
    overlay.style.display = "block";
  }
}) 