var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav');
var headerLogo = document.querySelector('.page-header__logo');

menu.classList.remove('main-nav--no-js');
menu.classList.remove('main-nav--open');
menu.classList.add('main-nav--close');
headerLogo.classList.remove('page-header__logo--fill');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('main-nav--open')) {
    menu.classList.remove('main-nav--open');
    menu.classList.add('main-nav--close');
    headerLogo.classList.remove('page-header__logo--fill');
  }
  else {
    menu.classList.remove('main-nav--close');
    menu.classList.add('main-nav--open');
    headerLogo.classList.add('page-header__logo--fill');
  }
});
