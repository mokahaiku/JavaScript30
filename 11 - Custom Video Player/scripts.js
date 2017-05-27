const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const fullscreen = player.querySelector('.fullscreen');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const togglePlay = () => video[video.paused ? 'play' : 'pause']();
const updateButton = ({ target: { paused } }) => { toggle.textContent = paused ? '►' : '❚ ❚'; };
const skip = ({ target: { dataset } }) => { video.currentTime += Number(dataset.skip); };
const handleRangeUpdate = ({ target: { name, value } }) => { video[name] = value; };
const handleProgress = () => { progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`; };
const scrub = (e) => { video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration; };
const handleFullscreen = () => {
  const rfs = video.requestFullscreen
    || video.webkitRequestFullScreen
    || video.mozRequestFullScreen
    || video.msRequestFullscreen;

  rfs.call(video);
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
fullscreen.addEventListener('click', handleFullscreen);
skipButtons.forEach(v => v.addEventListener('click', skip));
ranges.forEach(v => v.addEventListener('input', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => { mousedown = true; });
progress.addEventListener('mouseup', () => { mousedown = false; });

