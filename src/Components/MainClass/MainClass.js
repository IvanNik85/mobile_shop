import React from 'react'
import "./MainClass.scss"
import Carousel from 'react-bootstrap/Carousel'
import images from "../../images/mainImg1.jpg"
import images1 from "../../images/mainImg2.jpeg"
import images2 from "../../images/mainImg3.jpg"

export default class MainClass extends React.Component {    
    state = {
        anim: false,
        isLoading: true        
    }

    handleImageLoaded() {
        this.setState({ isLoading: false});              
    }

    render() {        
        let an = {animation: "disapearCircle 3s forwards"}
        return (
            <div id="Main">              
               <div className={this.state.isLoading? "none" : "mainText"} 
                    onClick = {() => this.setState({anim: true})} 
                    style = {this.state.anim ? an : null} >
                    <h1>Welcome</h1>
                    <span>to</span>
                    <h2><span>ICA</span> mobile shop</h2>  
               </div>       
                <Carousel>                
                    <Carousel.Item>
                        <img   
                            onLoad={() => this.handleImageLoaded()}                         
                            className="d-block w-100"
                            src={images}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>       
            </div>        
        )
    }   
    
}
