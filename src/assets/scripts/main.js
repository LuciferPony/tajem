import { tns } from 'tiny-slider/src/tiny-slider'

window.onload = function() {
  let menu_btn = document.querySelector('.section-header__burger')
  let header_menu = document.querySelector('.nav__list')
  let burger_active = document.querySelector('.section')
  menu_btn.onclick = function() {
    header_menu.classList.toggle('nav__list--active')
  }

  let slider = tns({
    container: '.main__slider',
    items: 1,
    controls: false,
    navContainer: '.main__dotnav'
  })

}