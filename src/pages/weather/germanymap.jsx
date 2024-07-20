// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class GermanyMap extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '90vh', overflow: 'hidden' }}>
        <object
          type="image/svg+xml"
          data="https://upload.wikimedia.org/wikipedia/commons/0/0d/Germany_location_map.svg"
          style={{ width: '100%', height: '100%' }}>
          Ihr Browser unterstützt keine SVG-Dateien.
        </object>
      </div>
    );
  }
}

export default GermanyMap;