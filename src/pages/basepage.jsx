// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class BasePage extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                <header className="bg-dark text-white text-center py-5">
                    <div className="container">
                        <h1 className="display-4">Willkommen auf meiner Spielwiese</h1>
                        <p className="lead">Hier gibt es viele Funktionen und Komponenten. Super zum Lernen und vertiefen.</p>
                    </div>
                </header>
                <main className="container my-5 flex-grow-1">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Hauptinhalt</h2>
                            <p>Mal schauen, was ich hier an dieser Stelle für einen Inhalt einsetzen werde. Das weiß ich gerade noch nicht.</p>
                            <img src="/assets/image/spielplatz.jpeg" className="img-fluid" alt="Bildbeschreibung" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies urna id lacus facilisis, ac condimentum nunc finibus. Donec euismod neque at velit cursus, in pulvinar quam interdum.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Sidebar</h2>
                            <p>In der Sidebar kann ich zusätzliche Informationen oder Links platzieren.</p>
                            <ul className="list-group">
                                <li className="list-group-item">Link 1</li>
                                <li className="list-group-item">Link 2</li>
                                <li className="list-group-item">Link 3</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default BasePage;