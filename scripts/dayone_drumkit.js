const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (event) => {
  console.log(event.keyCode);
  if (event.keyCode === 65) {
    const clap = document.getElementById('clap');
    document.querySelectorAll('.key')[0].classList.toggle('playing');
    clap.currentTime = 0;
    clap.play();
  } else if (event.keyCode === 83) {
    const hihat = document.getElementById('hihat');
    document.querySelectorAll('.key')[1].classList.toggle('playing');
    hihat.currentTime = 0;
    hihat.play();
  } else if (event.keyCode === 68) {
    const kick = document.getElementById('kick');
    document.querySelectorAll('.key')[2].classList.toggle('playing');
    kick.currentTime = 0;
    kick.play();
  } else if (event.keyCode === 70) {
    const openhat = document.getElementById('openhat');
    document.querySelectorAll('.key')[3].classList.toggle('playing');
    openhat.currentTime = 0;
    openhat.play();
  } else if (event.keyCode === 71) {
    const boom = document.getElementById('boom');
    document.querySelectorAll('.key')[4].classList.toggle('playing');
    boom.currentTime = 0;
    boom.play();
  } else if (event.keyCode === 72) {
    const ride = document.getElementById('ride');
    document.querySelectorAll('.key')[5].classList.toggle('playing');
    ride.currentTime = 0;
    ride.play();
  } else if (event.keyCode === 74) {
    const snare = document.getElementById('snare');
    document.querySelectorAll('.key')[6].classList.toggle('playing');
    snare.currentTime = 0;
    snare.play();
  } else if (event.keyCode === 75) {
    const tom = document.getElementById('tom');
    document.querySelectorAll('.key')[7].classList.toggle('playing');
    tom.currentTime = 0;
    tom.play();
  } else if (event.keyCode === 76) {
    const tink = document.getElementById('tink');
    document.querySelectorAll('.key')[8].classList.toggle('playing');
    tink.currentTime = 0;
    tink.play();
  }
});
