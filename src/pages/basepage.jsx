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
                    Diese Seite ist meine Spielwiese, auf der ich verschiedene Aspekte von Webentwicklung teste und erlerne. Hier findest du Beispiele für unterschiedliche Techniken und Designs, die ich im Rahmen meiner Lernreise entwickelt habe.
                  </p>
                  <img
                    src="/assets/image/spielplatz.jpeg"
                    className="img-fluid rounded"
                    alt="Spielplatz"
                  />
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies urna id lacus facilisis, ac condimentum nunc finibus. Donec euismod neque at velit cursus, in pulvinar quam interdum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Sidebar</h2>
                  <p className="card-text">
                    In der Sidebar findest du in Zukunft zusätzliche Informationen und Links zu anderen Projekten und Themen, die mich interessieren.
                  </p>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <a href="#link1" className="text-decoration-none">Link 1</a>
                    </li>
                    <li className="list-group-item">
                      <a href="#link2" className="text-decoration-none">Link 2</a>
                    </li>
                    <li className="list-group-item">
                      <a href="#link3" className="text-decoration-none">Link 3</a>
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
