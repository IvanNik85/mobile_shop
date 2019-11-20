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
    myref = React.createRef();   
    options = () => {
        if(window.innerWidth > 768) {
            return {rootMargin: "-300px 0px"}
        } else {            
            return {rootMargin: "-150px 0px"}
        }  
    } 
    // options = {
    //     rootMargin: "-300px"
    // }
    observer = new IntersectionObserver(entries => {
        if(entries[0].intersectionRatio > 0) {
            this.setState({visible: true }); 
        } else {
            this.setState({visible: false }); 
        }
    }, this.options())         
    
    componentDidMount() {       
        this.observer.observe(this.myref.current)       
    }     
    
    render () {    
        const styleIt = {animation: 'show 2s ease forwards'}        
        return (
            <div>
                <MainClass />  
                <Info />  
                <div className="container-fluid Home" id="Home" ref={this.myref}>  
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
                          
                    </div>    
                </div>   
                <News />               
                <Contact />      
            </div>
        )
    }
}
