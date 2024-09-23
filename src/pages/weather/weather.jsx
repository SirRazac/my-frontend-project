// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import WeatherLocations from './weatherlocations';

// ------------------------------------------------------------------------------
// Import CSS
// ------------------------------------------------------------------------------
import styles from "../../styles/WeatherLocations.module.css";
import clouds from "./assets/image/clouds.jpg";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class Weather extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          paddingTop: '60px',
          backgroundImage: `url(${clouds})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%', // Vollständige Breite
          position: 'relative'
        }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mb-4 shadow-lg">
              <div className="card-body text-center">
                <h2 className={styles.header}>Wetter in unseren Familienstädten</h2>
                <div className="d-flex flex-wrap justify-content-center">
                  <WeatherLocations />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-center">Temperaturfarbenlegende</h2>
                <p>Die Farben passen sich der aktuellen Temperatur an</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex align-items-center">
                    <span className={`${styles.badge} ${styles.cold} me-3`}></span>
                    <span>Kalt</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className={`${styles.badge} ${styles.cool} me-3`}></span>
                    <span>Frisch</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className={`${styles.badge} ${styles.mild} me-3`}></span>
                    <span>Mild</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className={`${styles.badge} ${styles.warm} me-3`}></span>
                    <span>Warm</span>
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <span className={`${styles.badge} ${styles.hot} me-3`}></span>
                    <span>Heiß</span>
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
