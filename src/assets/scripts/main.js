import { tns } from 'tiny-slider/src/tiny-slider'

window.onload = function() {
  let menu_btn = document.querySelector('.section-header__burger')
  let header_menu = document.querySelector('.nav__list')
  menu_btn.onclick = function() {
    header_menu.classList.toggle('nav__list--active')
  }

  let slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  })
}