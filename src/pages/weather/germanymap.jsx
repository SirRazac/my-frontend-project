import React, { Component } from 'react';
import axios from 'axios';
import { Tooltip } from 'react-tooltip';

class GermanyMap extends Component {
  state = {
    locations: [
      { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
      { name: 'Munich', lat: 48.1351, lon: 11.5820 },
      // Weitere Standorte hinzufügen
    ],
    weatherData: {}
  };

  componentDidMount() {
    this.state.locations.forEach(location => {
      this.fetchWeatherData(location);
    });
  }

  fetchWeatherData = async (location) => {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Hole den API-Schlüssel aus den Umgebungsvariablen
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

  renderMarkers() {
    return this.state.locations.map(location => {
      const weather = this.state.weatherData[location.name];
      return (
        <div
          key={location.name}
          style={{
            position: 'absolute',
            top: `${location.lat}%`,
            left: `${location.lon}%`,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            color: 'red',
          }}
          data-tooltip-id={location.name}
          data-tooltip-content={weather ? `Temperature: ${weather.main.temp}°C, ${weather.weather[0].description}` : 'Loading...'}
        >
          ●
          <Tooltip id={location.name} />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ width: '100%', height: '90vh', position: 'relative' }}>
        <object
          type="image/svg+xml"
          data="https://upload.wikimedia.org/wikipedia/commons/0/0d/Germany_location_map.svg"
          style={{ width: '100%', height: '100%' }}
        >
          Ihr Browser unterstützt keine SVG-Dateien.
        </object>
        {this.renderMarkers()}
      </div>
    );
  }
}

export default GermanyMap;
