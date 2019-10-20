import React from 'react'
import "./Button.scss"

export default function Button(props) {
    let {classN, disab, text} = props;
    return (  
        <button             
            className={["btn", classN].join(" ")} 
            disabled={disab}                      
        >
            {text}
        </button> 
    )
}
