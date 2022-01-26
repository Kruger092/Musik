const burger = document.querySelector(".js-burger");
const links = document.querySelector(".js-links");
const {body} = document

burger.addEventListener('click', () => {
  links.classList.toggle('open-list')
  burger.classList.toggle('open-list')
  body.classList.toggle('overflow-body')
})