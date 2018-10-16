
// Boton Buscar en Google
const searchButton = document.querySelector(".buttonSerch");
const searchInput = document.getElementById('form');
// Boton Voy a Tener Suerte
const searchButtonLuck = document.getElementById("buttonSerchLuck");
// Boton Buscar en Google
searchButton.addEventListener('click', search);
searchInput.addEventListener('keypress', searchEnter);
// Boton Voy a Tener Suerte
searchButtonLuck.addEventListener('click', serchLuck);

function search() {
  event.preventDefault();
  let inputValue = searchInput.value;
  let url = 'https://www.google.com/search?q=' + inputValue;
  window.location.assign(url);
}

function searchEnter() {
  if(event.keyCode == 13) {
    event.preventDefault();
    let inputValue = searchInput.value;
    let url = 'https://www.google.com/search?q=' + inputValue;
    window.location.assign(url);
  }
}
function serchLuck()
{
  event.preventDefault();
  let inputValue = searchInput.value;
  let url = 'http://www.google.com/search?btnI=1&q=' + inputValue;
  window.location.assign(url);

}
