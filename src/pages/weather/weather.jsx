// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Import CSS
// ------------------------------------------------------------------------------
import 'leaflet/dist/leaflet.css';
import "../../styles/WeatherLocations.module.css";

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
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body text-center">
                <h2 className="card-title">Aktuelle Wetterbedingungen</h2>
                <WeatherLocations />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Temperaturfarbenlegende</h2>
                <p>Die Farben passen sich der aktuellen Temperatur an</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge bg-darkblue me-3"></span>
                    <span>Dunkelblau: Kalt</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge bg-lightblue me-3"></span>
                    <span>Hellblau: Frisch</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge bg-yellow me-3"></span>
                    <span>Gelb: Mild</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge bg-orange me-3"></span>
                    <span>Orange: Warm</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className="badge bg-red me-3"></span>
                    <span>Rot: Heiß</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;