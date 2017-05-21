(function init() {
  const toggleOpen = function toggleOpen() {
    this.classList.toggle('open');
  };
  const toggleActive = function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  };
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}());
