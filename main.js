const apiKey = "782ca1b5f136ca244a8b699a4f689dd0";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const Btn = document.querySelector(".search button");
const img = document.querySelector(".weather_icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      img.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      img.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      img.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      img.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      img.src = "./images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

Btn.addEventListener("click", () => {
  checkWeather(input.value);
  input.value = "";
});
