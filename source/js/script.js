// import './authorization.js';
// import './inform-block.js';
// import './navigation.js';
// import './other-information.js';
// import './slayder.js';
const slides = document.querySelectorAll(".slayder__item");
const dots = document.querySelectorAll(".toggle-round__item");
const slideIndex = 2;

function showSlides(slideIndex) {
  let i;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " toggle-round__item--active";
  }
}

dots.forEach((item) =>
  item.addEventListener('click', () => {
    showSlides(item.id);
  })
);

showSlides(slideIndex);
window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " toggle-round__item--active";
  }
  else{
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
    }
  }
});
document.querySelectorAll('.other-information__title').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('other-information__item--active');
  })
);
const burger = document.querySelector('.page-header__burger');
const closeBurger = document.querySelector('.page-header__burger-span');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', ()=>{
  if(navigation.style.display === 'none'){
    navigation.style.display = 'block';
    closeBurger.classList.add("page-header__x-burger");
  }
  else{
    navigation.style.display = 'none';
    closeBurger.classList.remove("page-header__x-burger");
  }
});

document.querySelectorAll('.navigation__link').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('navigation__item--active');
  })
);
const toggleDiver = document.querySelector('.toggle');
const informBlock = document.querySelector('.inform-block');
const toggleDiverL = document.querySelector('.toggle__button-left');
const toggleDiverR = document.querySelector('.toggle__button-right');

toggleDiver.addEventListener('click', () => {
  if(informBlock.style.display === 'none'){
    informBlock.style.display = 'flex';
    toggleDiverL.style.transform = 'rotate(38deg)';
    toggleDiverR.style.transform = 'rotate(-38deg)';
    toggleDiver.style.bottom = '157px';
  }
  else{
    informBlock.style.display = 'none';
    toggleDiverL.style.transform = 'rotate(-38deg)';
    toggleDiverR.style.transform = 'rotate(38deg)';
    toggleDiver.style.bottom = '-15px';
  }
})
const login = document.querySelector('.login__title');
const registration = document.querySelector('.registration__title');
const authorization = document.querySelector('.authorization');
const close = document.querySelector('.authorization__close');
const lock = document.querySelector('.page-header__avtor');
const loginForm = document.querySelector('.login__form');
const registrationForm = document.querySelector('.registration__form');
const header = document.querySelector('.page-header');
const main = document.querySelector('.page-main');

lock.addEventListener('click', (evt)=>{
  evt.preventDefault();
  authorization.classList.toggle('authorization--active');
});

close.addEventListener('click', (evt)=>{
  evt.preventDefault();
  authorization.classList.toggle('authorization--active');
});

document.querySelectorAll('.authorization__name-title').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('visible');
  })
);
