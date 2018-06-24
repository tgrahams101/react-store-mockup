import React, {Component} from 'react';
import ProductList from './ProductList.js';

class AdminView extends Component {
    constructor() {
        super();
        this.state = {
            newProduct: {

            }
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted!', event.target.productName);
        this.props.handleNewProductRequest(this.state.newProduct);


    }

    handleChange(event) {
        console.log('INPUT CHANGED', event.target.name);
        const key = event.target.name;
        const value = key == "price" ? parseInt(event.target.value) : event.target.value;
        console.log('VALUE', value);
        const newProduct = { ...this.state.newProduct };
        newProduct[key] = value;
        console.log(newProduct);
        this.setState({newProduct})
        console.log(this.state);

    }
  render() {
    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
          {this.props.productList && (
              <ProductList productList={this.props.productList} />
          )}
          <h2>Create a New Product</h2>
          <div>
              <form onSubmit={this.onFormSubmit}>
              <p>Product Name: <input type="text" name="productName" onChange={this.handleChange}/> </p>
              <p>Description: <input type="text" name="description" onChange={this.handleChange} /> </p>
              <p>Price: <input type="text" name="price" onChange={this.handleChange}/> </p>
              <input type="submit" value="Submit New Product!" />
              </form>
          </div>
        </div>
    );
  }
}

export default AdminView;