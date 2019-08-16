import React from 'react'
import "./Home.scss"
import mainImage from "../../images/mainImage.jpg"

export default function Home() {
    return (
        <div>
            <img src={mainImage} className="img-fluid mainImg" alt="mainImage"/>
        </div>
    )
}
