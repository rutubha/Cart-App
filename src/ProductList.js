import React from 'react';
import Product from './Product';

export default function ProductList(props) {
    return (
        props.productList.length > 0 ? 
        props.productList.map((product, index)=>{
            return <Product product={product} key={index} increamentQuantity={props.increamentQuantity} decreamentQuantity={props.decreamentQuantity} removeItem={props.removeItem} index={index}/>;
        }) : <h1>No Products in Cart</h1>
    );
}
