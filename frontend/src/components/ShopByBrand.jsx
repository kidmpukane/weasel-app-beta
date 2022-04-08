import React from 'react'
import { useState } from "react"

function ShopByBrand(props) {

  const [followStatus, setfollowStatus] = useState("Follow");

  const handleClick = () => {
    setfollowStatus("Following");
  }

  return (
    <div className="shop-by-brand-container">
        <img 
            src={`../assets/${props.profilePicture}`} 
            alt="image_logo" />
            <button 
                onClick={handleClick}
                className="shop-by-brand-button">
                { followStatus }
            </button>
    </div>
  )
}

export default ShopByBrand