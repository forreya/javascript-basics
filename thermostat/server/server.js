
const express = require('express')
const app = express();
const port = 3000;
const Thermostat = require('../library/thermostat')
const thermostat = new Thermostat()

app.get('/temperature', (req, res) => {
  temperature = thermostat.getTemperature();
  res.send(`Current temperature: ${temperature} degrees.`);
})

app.post('/up', (req,res) => {
  thermostat.up()
  res.send('Temperature increased.');
})

app.post('/down', (req,res) => {
  thermostat.down()
  res.send('Temperature decreased.');
})

app.delete('/temperature', (req,res) => {
  thermostat.reset()
  res.send('Temperature has been reset to 20 degrees.');
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);