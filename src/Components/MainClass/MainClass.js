import React from 'react'
import "./MainClass.scss"
import Carousel from 'react-bootstrap/Carousel'
import images from "../../images/mainImg1.jpg"
import images1 from "../../images/mainImg2.jpeg"
import images2 from "../../images/mainImg3.jpg"

export default function MainClass() {
    return (
        <div id="Main">
            <Carousel>
                <Carousel.Item>
                    <img
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
            {/* <h1>Welcome</h1><span>to</span>
            <h2>ICA mobile shop</h2> */}
        </div>        
    )
}
