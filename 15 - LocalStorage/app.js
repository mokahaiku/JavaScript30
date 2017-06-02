(function init() {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `).join('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    items.push({
      text: (this.querySelector('[name="item"]')).value,
      done: false,
    });
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return false;
    const { index } = e.target.dataset;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
  }

  populateList(items, itemsList);

  addItems.addEventListener('submit', handleSubmit);
  itemsList.addEventListener('click', toggleDone);
}());
