
const Thermostat = require('../library/thermostat')

describe('Thermostat', () => {
  it('calls up function twice and returns temperture', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(22);
  })

  it('calls up function twice, down function once and returns temperture', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.up()
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(21);
  })

  it('sets power saving mode to true, increases temperature by 10, returns max temperature', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i<10; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(25);
  })

  it('sets power saving mode to false, increases temperature by 10, returns 30', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i<10; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(30);
  })

  it('sets power saving mode to false, increases temperature by 20, returns max temperature 32', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i<20; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toBe(32);

    // resets the thermostat to default temperature
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  })
})