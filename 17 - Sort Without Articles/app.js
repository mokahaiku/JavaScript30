(function init() {
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  bands.sort((a, b) => console.log(a.replace(/(The |An? )/, '')) || a.replace(/(The |An? )/, '').localeCompare(b.replace(/(The |An? )/, '')));
  if (console && console.log) console.log(bands);
}());
