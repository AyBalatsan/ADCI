const lock = document.querySelector('.page-header__avtor');
const authorization = document.querySelector('.authorization');
const close = document.querySelector('.authorization__close');
const blure = document.querySelector('.after-modal');

lock.addEventListener('click', (evt)=>{
  evt.preventDefault();
  authorization.classList.toggle('authorization--active');
  blure.classList.toggle('blure--active');
});
close.addEventListener('click', (evt)=>{
  authorization.classList.toggle('authorization--active');
  blure.classList.toggle('blure--active');
});
