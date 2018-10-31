var menuButton = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav');
var headerLogo = document.querySelector('.page-header__logo');
var submitBtn = document.querySelector('.form-list__submit-btn');
var surnameInput = document.querySelector('#form_surname');
var nameInput = document.querySelector('#form_name');
var emailInput = document.querySelector('#form_contacts_email');
var popupSucces = document.querySelector('.pop-up--succes');
var popupFailure = document.querySelector('.pop-up--failure');

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

if (submitBtn) {
  submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!surnameInput.value || !nameInput.value || !emailInput.value) {
      popupFailure.classList.add('pop-up--active');
    }
    else {
      popupSucces.classList.add('pop-up--active');
    }
  })
};

if (popupFailure) {
  var popupFailureBtn = popupFailure.querySelector('.pop-up__button');
  var popupSuccesBtn = popupSucces.querySelector('.pop-up__button');
}
if (popupFailureBtn) {
  popupFailureBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    var popupFailureBtn = popupFailure.querySelector('.pop-up__button');
    if (popupFailure.classList.contains('pop-up--active')) {
      popupFailure.classList.remove('pop-up--active');
    }
  })
};

if (popupSuccesBtn) {
  popupSuccesBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (popupSucces.classList.contains('pop-up--active')) {
      popupSucces.classList.remove('pop-up--active');
    }
  })
};
