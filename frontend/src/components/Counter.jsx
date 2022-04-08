import React from 'react'
import {  useState  } from "react";

export default function Counter() {

    const [count, setCount] = useState(0)
    
    function add() {
        setCount(count + 1)
    }
    
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div 
            className="counter-container">
        
        <button 
            className="counter-minus" 
            onClick={subtract}>–
        </button>
        <div 
            className="counter-count">
        <h1>
            {count}
        </h1>
        </div>
        <button 
            className="counter-plus" 
            onClick={add}>+
        </button>
        </div>
    )
}

