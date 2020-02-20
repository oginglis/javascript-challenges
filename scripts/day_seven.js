const vid = document.querySelector('.video');
const progressBar = document.querySelector('.progress-filled');
let playing = false;

const updateProgress = () => {
  let percent = Math.round((vid.currentTime / vid.duration) * 100);
  progressBar.style.width = `${percent}%`;
  console.log(percent);
  if (!playing) {
    clearInterval();
  }
}

const progress = () => {
  playing = true;
  setInterval(updateProgress, 10);
}

const stopProgress = (e) => {
  playing = false;
}

vid.addEventListener('play', progress);
vid.addEventListener('pause', stopProgress);
