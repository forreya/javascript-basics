
const WeatherClient = require('./weatherClient');
const Weather = require('./weather')

const client = new WeatherClient();
const weather = new Weather(client);

weather.load('Kuala Lumpur');

weather.getWeatherData();