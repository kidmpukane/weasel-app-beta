import React from 'react'

function Adz(props) {
  return (
    <div className="adz-container-card">

    <div className="adz-container">
    <span>Adz.</span>
    </div>

        <img 
            src={`../assets/${props.adz}`} 
            alt="advertisements" />

    </div>
  )
}

export default Adz