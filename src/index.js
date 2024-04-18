function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-box-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-box");
searchFormElement.addEventListener("submit", handleSearchSubmit);