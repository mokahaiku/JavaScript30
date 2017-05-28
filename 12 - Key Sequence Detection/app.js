(function init() {
  const code = 'dovydas';
  let entered = '';
  window.addEventListener('keyup', (e) => {
    entered = entered.slice(1 - code.length) + e.key;
    if (entered === code) {
      entered = '';
      cornify_add();
    }
  });
}());
