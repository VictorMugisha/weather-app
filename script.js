
const apiKey = "66b39adbefd5024c0eef42b4d19d1a1a"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBtn = document.querySelector("#search-btn")
const weatherIcon = document.querySelector(".weather-icon")
const errorSection = document.querySelector(".error")

searchBtn.addEventListener('click', () => {
    const inputCity = document.querySelector("#input").value
    checkWeather(inputCity)
})

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json()

    if (!response.ok || response.status !== 200) {
        errorSection.style.display = "block"
        document.querySelector(".weather").style.display = "none"
        return;
    }
    console.log(data)
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png"
    }

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    document.querySelector(".weather").style.display = "block"

}

// checkWeather()