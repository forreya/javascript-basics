
class Weather {
  constructor(client) {
    this.client = client
    this.city = ''
  }

  load(city) {
    this.city = city
  }

  getWeatherData() {
    this.client.fetchWeatherData(this.city).then((weatherData) => {
      console.log(`Weather data for ${weatherData.name}:`)
      console.log(weatherData)
    })
  }
}

module.exports = Weather;