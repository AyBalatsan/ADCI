const toggleDiver = document.querySelector('.toggle');
const informBlock = document.querySelector('.inform-block');
const toggleDiverL = document.querySelector('.toggle__button-left');
const toggleDiverR = document.querySelector('.toggle__button-right');

toggleDiver.addEventListener('click', () => {
  if(informBlock.style.display === 'none'){
    informBlock.style.display = 'flex';
    toggleDiverL.style.transform = 'rotate(30deg)';
    toggleDiverR.style.transform = 'rotate(-30deg)';
    toggleDiver.style.bottom = '165px';
  }
  else{
    informBlock.style.display = 'none';
    toggleDiverL.style.transform = 'rotate(-30deg)';
    toggleDiverR.style.transform = 'rotate(30deg)';
    toggleDiver.style.bottom = '-15px';
  }
})
