const playSound = (keyCode) => {
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!sound) return 0;
  sound.currentTime = 0;
  sound.play();
  return sound.duration * 1000;
};

const highlightBox = (keyCode, soundDuration) => {
  const box = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!box) return false;
  box.classList.add('playing');
  return setTimeout(() => box.classList.remove('playing'), soundDuration);
};

(function init() {
  window.addEventListener('keydown', (event) => {
    const soundDuration = playSound(event.keyCode);
    highlightBox(event.keyCode, soundDuration);
  });
}());
