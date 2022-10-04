const buttons = document.querySelectorAll('.popup-btn')
const closePopUp = document.getElementById('pop-up-close')
const popUp = document.getElementById('pop-up')
const navButton = document.querySelector('.hamburger')

buttons.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    popUp.classList.add('active')
  })
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active')
})

navButton.addEventListener('click', ()=>{
  navMenu.classList.toggle('navbar-menu_active')
})

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navbar-menu'),
  menuItem = document.querySelectorAll('.navbar-menu__link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navbar-menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('navbar-menu_active');
      })
  })
})