import React from "react"

export default function ProductDetails() {


  return (
    <div className="product-info-container">

          <img 
            className="product-info-image"
            src="/assets/pexels-tomáš-malík-10399167.jpg"
            alt="product-info-img" />

          <div className="product-info-card">
              
          <div  className="info-1">  
          <h1 className="product-brand-name">A Product Brand</h1>
          <span><button className="back">back</button></span>
          </div>

          <div  className="info-2">
          <h2 className="product-name">The Products Name</h2>
          <h2 className="product-price">$200.98</h2>
          </div>

          <span className="product-description">The time to take action was now. 
          All three men knew in their hearts this was the case, 
          yet none of them moved a muscle to try. 
          They were all watching and waiting for one of the others to make the first move so they could follow a step or two behind and help.
          The situation demanded a leader and all three men were followers.
          </span>

          <p><button className="add-to-chart" >Add to Chart +</button></p>
        
          </div>

    </div>
  )
}