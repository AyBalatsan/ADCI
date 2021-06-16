const lock = document.querySelector('.page-header__avtor');
const authorization = document.querySelector('.authorization');
const close = document.querySelector('.authorization__close');

lock.addEventListener('click', (evt)=>{
  evt.preventDefault();
  authorization.classList.toggle('authorization--active');
});
close.addEventListener('click', (evt)=>{
  evt.preventDefault();
  authorization.classList.toggle('authorization--active');
});
// const popUp = (target) =>{
//   target.addEventListener('click', (evt)=>{
//     evt.preventDefault();
//     authorization.classList.toggle('authorization--active');
//   });
// }
