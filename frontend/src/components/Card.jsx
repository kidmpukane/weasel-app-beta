import React from 'react';

export default function Cards() {
    return(
        <div className= "cards--wrap">   
            <div className= "card--container">
                  <img 
                  src= "/images/photo-card.jfif" 
                  className= "product--img"  
                  alt= "card--img"
                    />
                  <div className= "card--content_upper">
                      <img 
                      src= "./images/bookmark-50.png"
                      className= "bookmark--icon"
                      alt= "bookmark--img"
                       />
                    </div>
                  <div className= "card--content_lower"></div>
              </div>
            </div>
    );
}



