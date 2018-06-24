import React, {Component} from 'react';
import AdminView from './AdminView.js';

class HomePage extends Component {
  constructor() {
      super();
      this.state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: false,
        productList: [
        {
            productName: 'Hammer',
            description: 'Itsa hammer',
            price: 12.3,
        },
        {
            productName: 'Nail',
            description: 'Itsa nail',
            price: 0.12,
        }
        ]
      };
      this.toggleEdit = this.toggleEdit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleNewProductRequest = this.handleNewProductRequest.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  toggleEdit() {
      const editSaleItem = !this.state.editSaleItem;
      this.setState({editSaleItem});
  }

  handleInputChange(event) {
      console.log('THIS VALUE', event.target.value);
      const itemCurrentlyOnSale = event.target.value;
      this.setState({ itemCurrentlyOnSale });
  }

  handleNewProductRequest(newProduct) {
    console.log('HANDLING NEW PRODUCT REQUEST', newProduct);
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({productList});

  } 
  onFormSubmit(newProduct) {
    console.log('NEW PRODUCT', newProduct);
    this.handleNewProductRequest(newProduct);
  }

  render() {
    return (
        <div>
            <h1> My Hardware Store </h1>
            <div>
                <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                <span><button onClick={this.toggleEdit}> { this.state.editSaleItem ? "Hide": "Edit Sale Item" } </button></span>
                {
                    this.state.editSaleItem && (
                        <div>
                            <input type="text" value={this.state.itemCurrentlyOnSale} onChange={this.handleInputChange}/>
                        </div>
                    )
                }
                <AdminView productList={this.state.productList} handleNewProductRequest={this.handleNewProductRequest} onFormSubmit={this.onFormSubmit}/>
            </div>
        </div>
    );
  }
}

export default HomePage;