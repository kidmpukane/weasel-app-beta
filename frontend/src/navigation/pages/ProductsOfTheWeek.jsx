import React from 'react'

function ProductsOfTheWeek(props) {
  return (
    <main>
      
    <div className="product-of-the-week-card">
      <img
        src={`../assets/${props.productImage}`}
        alt="product_picture"
        />
      <h3>{props.user}</h3>
      <div className="info-group">
      <p>{props.productTitle}</p>
      </div>
      <div className="info-group">
      <p>{props.price}</p>
      </div>
    </div>
    </main>
    )
    }


export default ProductsOfTheWeek