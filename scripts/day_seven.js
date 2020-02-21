const vid = document.querySelector('.video');
const progressBar = document.querySelector('.progress-filled');
const volume = document.querySelector('.volume');
const speed = document.querySelector('.speed');
const playButton = document.querySelector('.play-button');
const controls = document.querySelector('.controls-wrapper');
const skipBack = document.querySelector('.skip-1');
let play;

// Playing progress bar

const updateProgress = () => {
  let percent = Math.round((vid.currentTime / vid.duration) * 100);
  progressBar.style.width = `${percent}%`;
}

const progress = () => {
  play = setInterval(updateProgress, 10);
}

const stopProgress = (e) => {
  clearInterval(play);
}

// Volume Adjustments

const adjustVolume = (e) => {
  vid.volume = e.target.value;
}

// Speed Adjustments

const adjustSpeed = (e) => {
  vid.playbackRate = e.target.value;
}

// Play Video
const playVid = (e) => {
  if (vid.paused) {
    vid.play();
    playButton.innerText = "■"
  } else {
    vid.pause();
    playButton.innerText = "►"
  }
}

// Moving Controls Bar
const moveBarUp = (e) => {
  controls.style.bottom = "0";
}

const moveBarDown = (e) => {
  controls.style.bottom = "-50px";
}

// skip back

const skipB = () => {
  vid.currentTime +=  parseFloat(0.1);
  console.log(vid.currentTime);
}

vid.addEventListener('play', progress);
vid.addEventListener('pause', stopProgress);
volume.addEventListener('change', adjustVolume);
speed.addEventListener('change', adjustSpeed);
playButton.addEventListener('click', playVid);
controls.addEventListener('mouseover', moveBarUp);
controls.addEventListener('mouseout', moveBarDown);
skipBack.addEventListener('click', skipB);
