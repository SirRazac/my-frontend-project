// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class BasePage extends Component {
  state = {};

  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-dark text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">Willkommen auf meiner Spielwiese</h1>
            <p className="lead">
              Hier teste ich verschiedene Techniken, baue Komponenten und erweitere meine Fähigkeiten. Es ist mein eigenes privates Portfolio kleinerer Projekte und Experimente.
            </p>
          </div>
        </header>
        <main className="container my-5 flex-grow-1">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Hauptinhalt</h2>
                  <p className="card-text">
                    Diese Seite ist meine Spielwiese, auf der ich verschiedene Aspekte von Webentwicklung teste und erlerne. Hier findest du Beispiele für unterschiedliche Techniken und Designs, die ich im Rahmen meiner Lernreise aktuell entwickel und entwickelt habe.
                  </p>
                  <img
                    src="/assets/image/spielplatz.jpeg"
                    className="img-fluid rounded"
                    alt="Spielplatz"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Meine Projekte</h2>
                  <p className="card-text">
                    Hier findest du eine Übersicht inkl. Links meiner Projekte und Themen, die mich interessieren.
                  </p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a href="/qrcode" className="text-decoration-none">QR-Code-Generator</a>
                    </li>
                    <li className="list-group-item">
                      <a href="/shoppage" className="text-decoration-none">Onlineshopp</a>
                    </li>
                    <li className="list-group-item">
                      <a href="/weather" className="text-decoration-none">Wetter-App</a>
                    </li>
                    <li className="list-group-item">
                      <a href="/recipe" className="text-decoration-none">Rezeptgenerator</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default BasePage;
