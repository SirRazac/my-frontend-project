// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import Navbar from "./component/navbars/navbar.jsx";

// ------------------------------------------------------------------------------
// Import Pages
// ------------------------------------------------------------------------------
import BasePage from './pages/basepage.jsx';
import ShopPage from './pages/shoppage/shoppage.jsx';
import QrCode from './pages/qrcode/qrcode.jsx';
import Weather from './pages/weather/weather.jsx';

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
const menuItems = [
    {
      label: 'Home',
      link: '/',
      subItems: [
        { label: 'QR Code Generator', link: '/qrcode' },
        { label: 'Shop', link: '/shoppage' },
        { label: 'Wetter', link: '/weather' }
      ]
    },
    {
      label: 'Menü 2',
      link: '#about',
      subItems: [
        { label: 'Submenu 1', link: '#about/sub1' },
        { label: 'Submenu 2', link: '#about/sub2' },
        { label: 'Submenu 3', link: '#about/sub3' }
      ]
    },
    {
      label: 'Menü 3',
      link: '#services',
      subItems: [
        { label: 'Submenu 1', link: '#services/sub1' },
        { label: 'Submenu 2', link: '#services/sub2' },
        { label: 'Submenu 3', link: '#services/sub3' }
      ]
    },
    {
      label: 'Menü 4',
      link: '#portfolio',
      subItems: [
        { label: 'Submenu 1', link: '#portfolio/sub1' },
        { label: 'Submenu 2', link: '#portfolio/sub2' },
        { label: 'Submenu 3', link: '#portfolio/sub3' }
      ]
    },
    {
      label: 'Menü 5',
      link: '#contact',
      subItems: [
        { label: 'Submenu 1', link: '#contact/sub1' },
        { label: 'Submenu 2', link: '#contact/sub2' },
        { label: 'Submenu 3', link: '#contact/sub3' }
      ]
    }
  ];
  class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar title="Home" menuItems={menuItems} />
                    <Routes>
                        <Route path="/" element={<BasePage />} />
                        <Route path="/shoppage" element={<ShopPage />} />
                        <Route path="/qrcode" element={<QrCode />} />
                        <Route path="/weather" element={<Weather />} />
                    </Routes>
                    <footer className="bg-dark text-white text-center py-3">
                        <div className="container">
                            <p>&copy; 2024 Das gehört alles mir. Alle Rechte vorbehalten.</p>
                        </div>
                    </footer>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;