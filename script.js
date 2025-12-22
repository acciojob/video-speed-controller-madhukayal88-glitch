// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.player__button');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const rewind = player.querySelector('.rewind');
const forward = player.querySelector('.forward');

// Toggle play / pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

// Scrub video
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

// Volume & speed
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

playbackSpeed.addEventListener('input', () => {
  video.playbackRate = playbackSpeed.value;
});

// Skip buttons
rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});

forward.addEventListener('click', () => {
  video.currentTime += 25;
});

// Progress bar click
progress.addEventListener('click', scrub);
