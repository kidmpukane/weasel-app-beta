import React from 'react'
import Counter from '../../components/Counter';

export default function Basket(props) {
  return (
    <div className="basket-card-container">
      
    <img 
      className="basket-image"
      src={`../assets/${props.productImage}`} 
      alt="image"
        />
    <div 
      className="basket-product-card-text ">
    <h1 
      className="basket-product-title">
        {props.productTitle}
    </h1>
    <span 
      className="basket-price">
        {props.price}
    </span>
    </div>
    <button
      className="cancel-order-button">
      X
    </button>
    <span>

    <section className="check-out-container">
    <Counter />
    </section>
    </span>
    
    </div>
      
  )
}
