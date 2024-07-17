// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import NavBar from './component/navbar';
// ------------------------------------------------------------------------------
// Import Pages
// ------------------------------------------------------------------------------
import BasePage from './basepage';
import ShopPage from './pages/shoppage/shoppage.jsx';
// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class App extends Component {
    state = {
        isSidebarOpen: true,
        items: [],
        menuItems: [
            {
                label: 'Shop',
                link: '/shoppage',
                subItems: [
                    {}
                ]
            },
            {
                label: 'Kontakt',
                link: '#kontakt',
                subItems: [
                    {}
                ]
            }
        ]


    }
    render() {
        return (
            <Router>
                <React.Fragment>
                <NavBar title="Home" menuItems={this.state.menuItems} />
                        <Routes>
                            <Route path="/" element={<BasePage />} />
                            <Route path="/shoppage" element={<ShopPage />} />
                        </Routes>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;