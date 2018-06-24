import React, {Component} from 'react';
import ProductList from './ProductList.js';
import ProductForm from './ProductForm.js';

class AdminView extends Component {
    constructor() {
        super();
        this.state = {
            showProductForm: true
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick() {
        const showProductForm = !this.state.showProductForm;
        this.setState({showProductForm});
    }
  render() {
      const buttonText = this.state.showProductForm ? 'Hide' : 'Show Form';
    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
          {this.props.productList && (
              <ProductList productList={this.props.productList} />
          )}
          <button onClick={this.handleButtonClick}> {buttonText} </button>
          {this.state.showProductForm && <ProductForm onFormSubmit={this.props.onFormSubmit} /> }
        </div>
    );
  }
}

export default AdminView;