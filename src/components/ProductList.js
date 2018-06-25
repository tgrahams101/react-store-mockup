import React, {Component} from 'react';
import ProductEntry from './ProductEntry.js';

class ProductList extends Component {
    constructor() {
        super();
    }
  render() {
    return (
        <div>
            {
                this.props.productList.map( (object, index) => {
                    return (
                        <ProductEntry {...object} key={index} deleteItem={this.props.deleteItem.bind(null, object, index)}/>
                    );
                })
            }
        </div>
    );
  }
}

export default ProductList;