import React, { Component } from "react";

class Warenkorb extends Component {
  state = {};

  render() {
    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {this.props.items.map((item) => (
          <div key={item.name}>
            {item.amount}x {item.name} {item.Preis}€{" "}
          </div>
        ))}
      </div>
    );
  }
}

export default Warenkorb;
