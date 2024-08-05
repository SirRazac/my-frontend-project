// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";
import { Link } from "react-router-dom";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class Navbar extends Component {
  render() {
    const { title, menuItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={item.link}
                    id={`navbarDropdown${index}`}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && item.subItems.length > 0 && (
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`navbarDropdown${index}`}
                    >
                      {item.subItems.map((subitem, subindex) => (
                        <li key={subindex}>
                          <Link className="dropdown-item" to={subitem.link}>
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
