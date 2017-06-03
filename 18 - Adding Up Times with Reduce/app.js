(function init() {
  const totalSeconds = Array.from(document.querySelectorAll('[data-time]'), v => v.dataset.time.split(':').map(Number)).reduce((r, [m, s]) => r + m * 60 + s, 0);
  const time = `${Math.floor(totalSeconds / 3600)}:${Math.floor((totalSeconds % 3600) / 60)}:${totalSeconds % 60}`;
  if (console && console.log) console.log(time);
}());
