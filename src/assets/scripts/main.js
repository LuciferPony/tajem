import { tns } from 'tiny-slider/src/tiny-slider'

window.onload = function() {
  let menu_btn = document.querySelector('.section-header__burger')
  let header_menu = document.querySelector('.nav__list')
  let burger = document.querySelector('.section-header__burger')
  let map = document.querySelector('.section-map')
  let map_btn = document.querySelector('.section-map__close')
  let map_open = document.querySelector('.contacts__address')

  menu_btn.onclick = function() {
    header_menu.classList.toggle('nav__list--active')
    burger.classList.toggle('active')
  }

  map_btn.onclick = function() {
    map.classList.toggle('modal__active')
    console.log('closed')
  }

  map_open.onclick = function() {
    map.classList.toggle('modal__active')
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