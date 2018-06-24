import React, {Component} from 'react';

class ProductForm extends Component {
    constructor() {
        super();
        this.state = {
            newProduct: {

            }
        };
        this.handleChange = this.handleChange.bind(this);
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
          <h2>Create a New Product</h2>
          <div>
              <form onSubmit={ (event)=> {
                  event.preventDefault();
                  console.log('WITHIN PRODUCT FORM', this.state.newProduct);
                  this.props.onFormSubmit(this.state.newProduct) } }>
              <p>Product Name: <input type="text" name="productName" placeholder="Product Name" onChange={this.handleChange}/> </p>
              <p>Description: <input type="text" name="description" placeholder="Description" onChange={this.handleChange} /> </p>
              <p>Price: <input type="number" min="0.00" step="0.01" name="price" placeholder="Price" onChange={this.handleChange}/> </p>
              <input type="submit" value="Submit New Product!" />
              </form>
          </div>
        </div>
    );
  }
}

export default ProductForm;