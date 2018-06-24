import React, {Component} from 'react';

const ProductEntry = (props) => {
 return (
    <div>
        <h2> {props.productName} </h2>
        <p> <b>Price: </b> {props.price}</p>
        <p>{props.description} </p>
    </div>
 );

};

export default ProductEntry;