const apiKey = require('../apiKey');

class WeatherClient {
  constructor() {

  }

  fetchWeatherData = (city) => {
    return new Promise((resolve, reject) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch(error => reject(error))
    })
  }
  
}

module.exports = WeatherClient;