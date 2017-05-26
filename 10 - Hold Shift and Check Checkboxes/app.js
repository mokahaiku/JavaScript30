(function init() {
  let lastIndex = -1;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (event) => {
      const currentIndex = [...checkboxes].findIndex(v => v === event.target);
      if (event.shiftKey) {
        const from = currentIndex > lastIndex ? lastIndex : currentIndex;
        const to = currentIndex > lastIndex ? currentIndex : lastIndex;
        checkboxes.forEach((v, i) => {
          if (i > from && i < to) v.checked = !v.checked;
        });
      }
      lastIndex = currentIndex;
    });
  });
}());
