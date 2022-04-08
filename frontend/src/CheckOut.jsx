import React from 'react'
import {  useState  } from "react"

function CheckOut() {

    const [count, setCount] = useState(0)
    
    function add() {
        setCount(count + 1)
    }
    
    function subtract() {
        setCount(count - 1)
    }
    
  

  return (
    <div>

<h3 className="product-price-counter">
          <div className="product-price">$200</div>

          <div className="quantity-counter">

          <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
          
          </div>
        </h3>
    </div>
  )
}

export default CheckOut