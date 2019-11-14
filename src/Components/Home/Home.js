import React from 'react'
import {Link} from "react-router-dom"
import "./Home.scss"
import "../Button/Button.scss"
import MainClass from "../MainClass/MainClass"
import Info from "../Info/Info"
import Contact from "../Contact/Contact"
import News from "../News/News"

export default class Home extends React.Component {    
    state = {
        visible: false    
    }    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    } 
    
    handleScroll = () => {
        if(window.pageYOffset > window.innerHeight * 2) { 
            this.setState({visible: true });  
        } 
    }
    render () {    
        const styleIt = {animation: 'show 2s ease forwards'}
        return (
            <div>
                <MainClass />  
                <Info />  
                <div className="container-fluid Home" id="Home">                            
                    {/* <h1>Welcome to<br></br>ICA MobileShop</h1>  */}
                    <div className="row">
                        {/* <img src={mainImage} className="img-fluid mainImg" alt="mainImage"/> */}
                        <div className="mainButtons" style={this.state.visible ? styleIt : null}>
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
                <News />               
                <Contact />      
            </div>
        )
    }
}
