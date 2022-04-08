import React from 'react'

function AdditionalBasketInfo() {
  return (

<div>
<div    
    className="additional-basket-info-container">
     
<h1>
        
<input
    className="promo-code-bar" 
    placeholder="Promo Code"/>

</h1>

<h1>

<button 
    className="additional-basket-info-button">
    Submit
</button>
</h1>
</div>

<div
    className="additional-basket-info-text">

<h2>
<span
    className="basket-info-header">
    Subtotal
</span>
<span
    className="basket-info-price">
    $5690.86 
</span>
</h2>

<hr class="solid"></hr>
<h2>
<span
    className="basket-info-header">
    Shippings
</span>
<span
    className="basket-info-price">
    $2000.00 
</span>
</h2>

<hr class="solid"></hr>
<h2>
<span
    className="basket-info-header">
    Discounts
</span>
<span
    className="basket-info-price">
    -$1000.00 
</span>
</h2>

<hr class="solid"></hr>
<h2>
<span
    className="basket-info-header">
    Total
</span>
<span
    className="basket-info-price">
    $7690.86 
</span>
</h2>


</div>
</div>
  )
}

export default AdditionalBasketInfo