const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const apiKey = 'b0bb3927d34f26388fe842cef7df4e74';
  const city = document.querySelector(".search-box input").value;

  if (city == '') return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {


        
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');
      const weatherEmoji = document.querySelector('.weather-box .weatherEmoji'); // Target the emoji element

      function displayEmoji(weatherId) {
        switch (true) {
          case weatherId < 300:
            return "⛈️"; // Thunderstorm
          case weatherId < 500:
            return "🌧️"; // Drizzle
          case weatherId < 600:
            return "🌧️"; // Rain
          case weatherId < 700:
            return "❄️"; // Snow
          case weatherId < 800:
            return "🌫️"; // Atmosphere (mist, fog, etc.)
          case weatherId === 800:
            return "☀️"; // Clear sky
          case weatherId < 804:
            return "☁️"; // Few or scattered clouds
          default:
            return "🤷‍♂️"; // Unknown weather
        }
      }

      // Update the DOM with weather data
      temperature.innerHTML = `${Math.round(json.main.temp - 273.15)}<span>°C</span>`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}<span>%</span>`;
      wind.innerHTML = `${Math.round(json.wind.speed)}<span>km/h</span>`;

      // Update the emoji in the DOM
      const weatherId = json.weather[0].id;
      const emoji = displayEmoji(weatherId);
      weatherEmoji.innerHTML = emoji; // Update the emoji element in the DOM

      console.log(`Weather Emoji: ${emoji}`);

      function createDate(dateValue) {
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

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

        let day = days[dateValue.getDay()];
        let date = dateValue.getDate();
        let month = months[dateValue.getMonth()];
        let year = dateValue.getFullYear();

        return `${day} ${date} ${month} ${year}`;
      }

      // Example usage of createDate
      let today = new Date();
      console.log(createDate(today)); // Logs the formatted date
    })
    .catch(error => console.error('Error fetching weather data:', error));
});