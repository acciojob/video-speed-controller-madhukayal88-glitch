const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const progressBar = document.querySelector('.progress__filled');

// 1. Play/Pause Toggle
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// 2. Update Toggle Button Text (► and ❚ ❚)
function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

// 3. Skip/Rewind Functionality
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// 4. Volume and Playback Speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// 5. Progress Bar Update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));