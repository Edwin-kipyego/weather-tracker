const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  
  const apiKey = 'b0bb3927d34f26388fe842cef7df4e74';
const city = document.querySelector(".search-box input").value;

if (city == '')
  return;
 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(json => {
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');


  switch (json.weather[0].main) {
    case 'Clear':
      switch (true) {
        case weatherId < 300:
            return "⛈️";
        case weatherId < 500:
            return "🌧️";
        case weatherId < 600:
            return "🌧️";
        case weatherId < 700:
            return "❄️";
        case weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId < 804:
            return "☁️";
        default:
            return "🤷‍♂️";
    }
     temperature.innerHTML = `${parseInt.round(json.main.temp)}<
  span>°C</span>`;
  description.innerHTML = json.weather[0].description;
  humidity.innerHTML = `${json.main.humidity}<span>%</span>`;
  wind.innerHTML = `${parseInt(json.wind.speed)}<span>km/h</span>`;






























      image.src = 'images/clear.png';
      break;
    case 'Rain':
      image.src = 'images/rain.png';
      break;
    case 'Snow':
      image.src = 'images/snow.png';
      break;
    case 'Clouds':
      image.src = 'images/cloud.png';
      break;
    case 'Haze':
      image.src = 'images/mist.png';
      break;
      
      default:
      image.src = 'Assets/rain.png';


});

});



























// fetching the weather data


const searchboxOne = document.querySelector("#searchCityOne");
const searchboxTwo = document.querySelector("#searchCityTwo");

//targets enter as a keypress event
searchboxOne.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    weatherData(searchboxOne.value);
  }
});

searchboxTwo.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    weatherData(searchboxTwo.value);
  }
});

function weatherData(city) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apiKey +
    "";

  fetch(url)
    .then((resp) => resp.json())
    .then(insertDetails);
}

// define destinations and send data to the destinations
function insertDetails(data) {
  document.getElementById("city").innerText = `${data.name}, ${data.sys.country}`;

  let presentDate = new Date();
  let dateDiv = document.getElementById("date");
  dateDiv.innerText = createDate(presentDate);

  let temperature = Math.round(data.main.temp);
  document.getElementById("temp").innerText = `${temperature} °C`;

  document.getElementById("description").innerText = data.weather[0].description;

  let minTemp = Math.round(data.main.temp_min);
  let maxTemp = Math.round(data.main.temp_max);
  document.getElementById("minMax").innerText = `${minTemp} °C / ${maxTemp} °C`;

  // Update humidity
  let humidity = data.main.humidity;
  document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;

  // Update wind speed
  let windSpeed = data.wind.speed;
  document.getElementById("windSpeed").innerText = `Wind Speed: ${windSpeed} km/h`;
}

// let's build the date to display in an appealing format:
// day, date, month, year

function createDate(dateValue) {
  // array for days of the week from Sunday (day-0) to saturday (day-6)
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // months of the year from January (month-0) to December (month-11)
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // JS methods for getDay, getDate, getMonth and getFullYear
  let day = days[dateValue.getDay()];
  let date = dateValue.getDate();
  let month = months[dateValue.getMonth()];
  let year = dateValue.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
// handle fedback form submission
document.querySelector(".submit-feedback").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  // Get the selected feedback option
  const selectedFeedback = document.querySelector('input[name="feedback"]:checked');

  if (selectedFeedback) {
    // Display the selected feedback (you can replace this with any action, like sending it to a server)
    alert(`Thank you for your feedback: ${selectedFeedback.value}`);
  } else {
    // Alert the user if no option is selected
    alert("Please select a feedback option before submitting.");
  }
});