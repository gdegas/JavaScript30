/* Get our elements */

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




/* Build up our function */

function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  console.log(+this.dataset.skip)
  video.currentTime += (+this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime/video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`;
}


/* Set up our event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
})
ranges.forEach(range => {
  range.addEventListener('change', handleRangeUpdate);
})
video.addEventListener('timeupdate', handleProgress);
