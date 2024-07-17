// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { Component } from 'react';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import Product from '../../component/product';
import Warenkorb from '../../component/Warenkorb';

// ------------------------------------------------------------------------------
// Class
// ------------------------------------------------------------------------------
class ShopPage extends Component {
    state = {  
        items: [],   
    } 
    
    addItem = (amount, name, Preis) => {
        let currentItems = this.state.items;
        let existingItem = this.state.items.find(item => item.name === name);
        if(existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount, 
                name, 
                Preis
            });
        }
        this.setState({ items: currentItems});
        console.log(this.state);
    }
     
    render() { 
        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="product-container">
                        <Product onAdd={() => this.addItem(1, 'Tomaten', 3.99)} image="tomatoes.jpg"  title="Tomaten" description="Füge Tomaten zum Warenkorb hinzu"/>
                        <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="cucumbers.jpg"  title="Gurken" description="Füge Gurken zum Warenkorb hinzu"/>
                        <Product onAdd={() => this.addItem(1, 'Äpfel', 4.99)} image="apples.jpg"  title="Äpfel" description="Füge Äpfel zum Warenkorb hinzu"/>
                        <Product onAdd={() => this.addItem(1, 'Birnen', 2.99)} image="pears.jpg"  title="Birnen" description="Füge Birnen zum Warenkorb hinzu"/>
                    </div>
                    <Warenkorb items={this.state.items} />
                </div>    
            </React.Fragment>
        );
    }
}

export default ShopPage;