document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("getWeatherBtn");

    if (searchButton) {
        searchButton.addEventListener("click", getWeather);
    }
});

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const weatherResult = document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = `<p style="color: red;">Please enter a city name.</p>`;
        return;
    }

    const apiKey = "b0bb3927d34f26388fe842cef7df4e74"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}