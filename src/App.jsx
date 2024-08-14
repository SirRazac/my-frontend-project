// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import Navbar from "./component/navbars/navbar.jsx";

// ------------------------------------------------------------------------------
// Import Pages
// ------------------------------------------------------------------------------
import BasePage from "./pages/basepage.jsx";
import ShopPage from "./pages/shoppage/shoppage.jsx";
import QrCode from "./pages/qrcode/qrcode.jsx";
import Weather from "./pages/weather/weather.jsx";
import Recipe from "./pages/recipe/recipe.jsx";
import HtmlTutorial from "./pages/htmltutorial/htmltutorial.jsx";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
const menuItems = [
  {
    label: "Menü 1",
    link: "/",
    subItems: [
      { label: "QR Code Generator", link: "/qrcode" },
      { label: "Shop", link: "/shoppage" },
      { label: "Wetter", link: "/weather" },
    ],
  },
  {
    label: "Menü 2",
    link: "#about",
    subItems: [
      { label: "Rezept Generator", link: "/recipe" },
      { label: "HTML-Tutorial", link: "/htmltutorial" },
      { label: "Submenu 3", link: "#about/sub3" },
    ],
  }
 
];
class App extends Component {
  render() {
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <React.Fragment>
            <Navbar title="Home" menuItems={menuItems} />
            <Routes>
              <Route path="/" element={<BasePage />} />
              <Route path="/shoppage" element={<ShopPage />} />
              <Route path="/qrcode" element={<QrCode />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/htmltutorial" element={<HtmlTutorial />} />
            </Routes>
            <footer className="bg-dark text-white text-center py-3 mt-auto">
              <div className="container">
                <p>
                  &copy; 2024 Das gehört alles mir. Alle Rechte vorbehalten.
                </p>
              </div>
            </footer>
          </React.Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
