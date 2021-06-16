const toggleDiver = document.querySelector('.toggle');
const slider = document.querySelector('.slayder');

toggleDiver.addEventListener('click', (evt)=>{
  slider.classList.toggle('slayder__avtive--toggle');
});
