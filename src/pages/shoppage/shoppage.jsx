// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from "react";

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import Product from "../../component/shopping/product";
import Warenkorb from "../../component/shopping/Warenkorb";

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class ShopPage extends Component {
  constructor(props) {
    super(props);
    const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('Loaded items from localStorage:', savedItems); // Debugging

    this.state = {
      items: savedItems,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      console.log('Updating localStorage with items:', this.state.items); // Debugging
      localStorage.setItem('cartItems', JSON.stringify(this.state.items));
    }
  }

  addItem = (amount, name, Preis) => {
    this.setState(prevState => {
      const existingItem = prevState.items.find(item => item.name === name);
      const updatedItems = existingItem
        ? prevState.items.map(item =>
            item.name === name ? { ...item, amount: item.amount + amount } : item
          )
        : [...prevState.items, { amount, name, Preis }];

      return { items: updatedItems };
    });
  };

  removeItem = (name) => {
    this.setState(prevState => {
      const updatedItems = prevState.items.filter(item => item.name !== name);
      return { items: updatedItems };
    });
  };

  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-dark text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">Willkommen im Prototyp meines Online-Shops</h1>
            <p className="lead">
              Dieser Shop ist derzeit im Aufbau und noch in seiner Rohform. Viele
              Funktionen sind in Arbeit, aber Du kannst bereits erste Produkte
              ausprobieren und Deinem Warenkorb hinzufügen.
            </p>
          </div>
        </header>
        <main className="container my-5 flex-grow-1">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <Product
                    onAdd={() => this.addItem(1, "Tomaten", 3.99)}
                    image="tomatoes.jpg"
                    title="Frische Tomaten"
                    description="Saftige, reife Tomaten aus biologischem Anbau. Perfekt für Salate und Saucen."
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <Product
                    onAdd={() => this.addItem(1, "Gurken", 1.99)}
                    image="cucumbers.jpg"
                    title="Knackige Gurken"
                    description="Erfrischende Gurken, ideal für Salate oder als gesunder Snack zwischendurch."
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <Product
                    onAdd={() => this.addItem(1, "Äpfel", 4.99)}
                    image="apples.jpg"
                    title="Köstliche Äpfel"
                    description="Süße und saftige Äpfel, direkt vom Bauernhof. Ein Genuss für Groß und Klein."
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <Product
                    onAdd={() => this.addItem(1, "Birnen", 2.99)}
                    image="pears.jpg"
                    title="Aromatische Birnen"
                    description="Aromatische Birnen mit weichem Fruchtfleisch und einem süßlichen Geschmack."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <Warenkorb items={this.state.items} onRemove={this.removeItem} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ShopPage;
