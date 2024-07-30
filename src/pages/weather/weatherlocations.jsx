// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';
import axios from 'axios';

// ------------------------------------------------------------------------------
// Import CSS
// ------------------------------------------------------------------------------
import styles from '../../styles/WeatherLocations.module.css'; 

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class WeatherLocations extends Component {
  state = {
    locations: [
      { name: 'Euskirchen', lat: 50.6600, lon: 6.7878 },
      { name: 'Kell am See', lat: 49.6097, lon: 6.8283 },
      { name: 'Bad Neuenahr', lat: 50.5432, lon: 7.1158 },
      { name: 'Leienkaul', lat: 50.2320, lon: 7.1264 },
      { name: 'Föhren', lat: 49.8278, lon: 6.7590 },
    ],
    weatherData: {}
  };

  componentDidMount() {
    this.state.locations.forEach(location => {
      this.fetchWeatherData(location);
    });
  }

  fetchWeatherData = async (location) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; 
    if (!API_KEY) {
      console.error("API-Schlüssel fehlt!");
      return;
    }
    
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`);
      this.setState(prevState => ({
        weatherData: {
          ...prevState.weatherData,
          [location.name]: response.data
        }
      }));
    } catch (error) {
      console.error("Fehler beim Abrufen der Wetterdaten:", error);
    }
  }

  getTemperatureClass(temp) {
    if (temp <= 0) return styles.cold;
    if (temp <= 10) return styles.cool;
    if (temp <= 20) return styles.mild;
    if (temp <= 30) return styles.warm;
    return styles.hot;
  }

  renderWeatherInfo() {
    const { weatherData, locations } = this.state;

    const sortedLocations = locations
      .map(location => ({
        ...location,
        weather: weatherData[location.name]
      }))
      .filter(location => location.weather)
      .sort((a, b) => b.weather.main.temp - a.weather.main.temp);

    return sortedLocations.map(location => {
      const weather = location.weather;
      const tempClass = this.getTemperatureClass(weather.main.temp);
      const rainAmount = weather.rain ? weather.rain['1h'] || weather.rain['3h'] || 0 : 0;

      return (
        <div key={location.name} className={`${styles.locationContainer} ${tempClass}`}>
          <h2>{location.name}</h2>
          <div>
            <p>Temperatur: {weather.main.temp}°C</p>
            <p>Wolken: {weather.weather[0].description}</p>
            <p>Luftfeuchtigkeit: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
            <p>Regen: {rainAmount} mm</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Wetter in Familienstädten</h1>
        <div className={styles.grid}>
          {this.renderWeatherInfo()}
        </div>
      </div>
    );
  }
}

export default WeatherLocations;
