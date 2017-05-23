(function init() {
  let db = [];
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  fetch(endpoint).then(blob => blob.json()).then((json) => {
    db = json;
    if (console && console.log) console.log(db);
  });
  const suggestionsNode = document.querySelector('ul.suggestions');
  const inputNode = document.querySelector('input');
  const emptyInputHTML = suggestionsNode.innerHTML;
  inputNode.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
      suggestionsNode.innerHTML = db
        .filter((v) => {
          const re = new RegExp(event.target.value, 'gi');
          return re.test(v.city) || re.test(v.state);
        })
        .map((v) => {
          const re = new RegExp(event.target.value, 'gi');
          const cityName = v.city.replace(re, `<span class="hl">${event.target.value}</span>`);
          const stateName = v.state.replace(re, `<span class="hl">${event.target.value}</span>`);
          return `<li><span class="name">${cityName}, ${stateName}</span><span class="population">${v.population}</span></li>`;
        })
        .join('');
    } else {
      suggestionsNode.innerHTML = emptyInputHTML;
    }
  });
}());
