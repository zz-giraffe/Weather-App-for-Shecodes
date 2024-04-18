function displayWeather(response) {
    let temperatureElement = document.querySelector("#weather-info-temp");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current) + "°C";
   
}


function searchCity(city) {
    let apiKey = "94d121f098445o8atf8a44f43b39f729";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }
  

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-box-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-box");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Singapore");