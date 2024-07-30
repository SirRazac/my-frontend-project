// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Import CSS
// ------------------------------------------------------------------------------
import 'leaflet/dist/leaflet.css';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import WeatherLocations from './weatherlocations';

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class Weather extends Component {
    render() {
      return (
        <div>
          <WeatherLocations/>  
        </div>
      );
    }
  }
  
  export default Weather;