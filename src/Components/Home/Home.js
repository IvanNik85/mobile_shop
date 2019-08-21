import React from 'react'
import {Link} from "react-router-dom"
import "./Home.scss"
import mainImage from "../../images/mainImage.jpg"
import Button from "../Button/Button"
import "../Button/Button.scss"

export default function Home() {
    return (
        <div className="container-fluid Home">                            
            <h1>Welcome to<br></br>ICA MobileShop</h1> 
            <div className="row">
                {/* <img src={mainImage} className="img-fluid mainImg" alt="mainImage"/> */}
                <div className="mainButtons">
                    <div className="pulse">
                        <Link to="/ProductList">
                            Products
                            <div className="backPulse"></div>
                        </Link>                    
                    </div>
                    <div className="pulse">
                        <Link to="/Cart">
                            Cart
                            <div className="backPulse"></div>
                        </Link>                    
                    </div>
                </div>

                {/* <Link to="/Cart">
                    <Button classN="homeBtn orange" text="Cart">                    
                    </Button>
                </Link>  */}
                
            </div>            
        </div>
    )
}
