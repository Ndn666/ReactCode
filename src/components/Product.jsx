import React from 'react'

export default function Product(props) {
    const {product , onAdd } = props;
    return (
        <div className="items">
            <h3>{product.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="spans">${product.price}</span>
            <button className="btn" onClick={()=> onAdd(product)}>Add</button></h3>
            
        </div>
    )
}