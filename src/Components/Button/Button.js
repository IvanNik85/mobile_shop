import React from 'react'
import "./Button.scss"

export default function Button(props) {
    let {classN, disab, color, text, nesto} = props;
    return (        
        <button             
            className={["btn", classN].join(" ")} 
            disabled={disab}
            onClick = {() => {return nesto}}            
        >
            {text}
        </button>       
    )
}
