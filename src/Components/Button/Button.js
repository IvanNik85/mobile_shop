import React from 'react'
import "./Button.scss"

export default function Button(props) {
    return (        
        <button 
            className={props.class} 
            disabled={props.disab}
        >
            {props.text}
        </button>       
    )
}
