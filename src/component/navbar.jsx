// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';
import PropTypes from "prop-types"

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class NavBar extends Component {
    render() {
        const { title, menuItems } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {menuItems.map((item, index) => (
                                <li className="nav-item dropdown" key={index}>
                                    <a className="nav-link dropdown-toggle" href={item.link} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.label}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a className="dropdown-item" href={subItem.link}>{subItem.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            subItems: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default NavBar;