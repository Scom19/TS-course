class Renderer {
  constructor() {
    this.BASE_WEATHER_URL = [
      "http://api.weatherapi.com/v1/current.json?key=a232fcd1f665437ea95192014241512&q=",
      "&aqi=no",
    ];
    this.BASE_FORECAST_URL = [
      "http://api.weatherapi.com/v1/forecast.json?key=a232fcd1f665437ea95192014241512&q=",
      "&days=1&aqi=no&alerts=no",
    ];
  }

  async fetchCurrentDataByCity(city, type) {
    const url =
      type === "current"
        ? `${this.BASE_WEATHER_URL[0]}${city}${this.BASE_WEATHER_URL[1]}`
        : `${this.BASE_FORECAST_URL[0]}${city}${this.BASE_FORECAST_URL[1]}`;
    const rawResponse = await fetch(url);
    return await rawResponse.json();
  }

  async onCitySubmit() {
    await this.clearWeather();

    const locationInputValue = document.querySelector(".location-input").value;

    const currentWeatherData = await this.fetchCurrentDataByCity(locationInputValue, "current");
    const forecastData = await this.fetchCurrentDataByCity(locationInputValue, "forecast");

    this.renderWeather(
      `http:${currentWeatherData.current.condition.icon}`,
      currentWeatherData.current.temp_c,
      currentWeatherData.current.condition.text
    );

    this.renderForecast(forecastData.forecast.forecastday[0].hour);
  }

  async createCustomElement(elementType, elementClass, elementImgUrl = null, elementInner = null) {
    const element = document.createElement(elementType);
    element.setAttribute("class", elementClass);
    if (elementInner !== null) {
      element.innerHTML = elementInner;
    } else {
      element.setAttribute("src", elementImgUrl);
    }
    return element;
  }

  renderWeather(iconUrl, temp, status) {
    const weatherElement = document.querySelector(".current-weather");
    weatherElement.innerHTML = `
      <img class="current-weather-icon" src="${iconUrl}" alt="Weather icon">
      <p class="current-weather-temperature">${temp}°C</p>
      <p class="current-weather-status">${status}</p>
    `;
  }

  renderForecast(data) {
    const forecastContainer = document.querySelector(".forecast");
    data.forEach((item) => {
      const forecastElement = `
        <div class="forecast-element">
          <p class="forecast-time">${item.time.slice(11)}</p>
          <img class="forecast-icon" src="http:${item.condition.icon}" alt="${item.condition.text}">
          <p class="forecast-temperature">${item.temp_c}°C</p>
        </div>`;
      forecastContainer.innerHTML += forecastElement;
    });
  }

  clearWeather() {
    document.querySelector(".current-weather").innerHTML = "";
    document.querySelector(".forecast").innerHTML = "";
  }
}

const renderer = new Renderer();

document.querySelector(".location-button").addEventListener("click", function () {
  renderer.onCitySubmit();
});