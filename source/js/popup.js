var submitBtn = document.querySelector('.form-list__submit-btn');
var surnameInput = document.querySelector('#form_surname');
var nameInput = document.querySelector('#form_name');
var emailInput = document.querySelector('#form_contacts_email');
var popupSucces = document.querySelector('.pop-up--succes');
var popupFailure = document.querySelector('.pop-up--failure');
var popupSuccesBtn = popupSucces.querySelector('.pop-up__button');
var popupFailureBtn = popupFailure.querySelector('.pop-up__button');

submitBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!surnameInput.value || !nameInput.value || !emailInput.value) {
    popupFailure.classList.add('pop-up--active');
  }
  else {
    popupSucces.classList.add('pop-up--active');
  }
});

popupFailureBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popupFailure.classList.contains('pop-up--active')) {
    popupFailure.classList.remove('pop-up--active');
  }
});

popupSuccesBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (popupSucces.classList.contains('pop-up--active')) {
    popupSucces.classList.remove('pop-up--active');
  }
});
