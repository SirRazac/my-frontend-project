import React, { Component } from "react";

class Warenkorb extends Component {
  handleRemove = (name) => {
    this.props.onRemove(name);
  };

  render() {
    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {this.props.items.length === 0 ? (
          <p>Dein Warenkorb ist leer.</p>
        ) : (
          this.props.items.map(item => (
            <div key={item.name}>
              {item.amount}x {item.name} {item.Preis}€
              <button onClick={() => this.handleRemove(item.name)} className="btn btn-danger btn-sm ml-2">
                Entfernen
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Warenkorb;
