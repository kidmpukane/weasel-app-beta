import * as React from 'react';
import { useEffect, useState } from "react";

export default function Search({ navigation }) {
    return (
        <div className="search-bar-container">
          <h1>        
            <input
                className="search-bar" 
                placeholder="Search Item"/>

            <img
                className="search-icon" 
                src="/loupe.png" 
                alt="src-icon" /> 
           </h1>
           <h1>   
           <button className="filter-button">
             <img
                className="filter-icon" 
                src="/filter.png" 
                alt="filter-btn" />
            </button>
           </h1>
        </div>
    );
}