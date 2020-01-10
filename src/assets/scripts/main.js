import { tns } from 'tiny-slider/src/tiny-slider'

window.onload = function() {
  let menu_btn = document.querySelector('.section-header__burger')
  let header_menu = document.querySelector('.nav__list')
  let burger = document.querySelector('.section-header__burger')
  menu_btn.onclick = function() {
    header_menu.classList.toggle('nav__list--active')
    burger.classList.toggle('active')
  }

  let slider = tns({
    container: '.main__slider',
    items: 1,
    controls: false,
    navContainer: '.main__dotnav'
  })

  let slider_testimonials = tns({
    container: '.section-testimonials__list',
    items: 1,
    controls: false,
    navContainer: '.testimonials__userpic'
  })

}