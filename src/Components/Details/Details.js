import React, { Component } from 'react'
import {ProductConsumer} from "../../Context"
import {Link} from "react-router-dom"
import "./Details.scss"
import Button from "../Button/Button"

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {                   
                   const {
                       id,
                       title,
                       img,
                       price,
                       description,
                       inCart
                   } = value.products[0];
                   return (
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto m-5"><h1>{title}</h1></div>
                            </div>   
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto pt-4 image">
                                    <img src={img} className="img-fluid" alt={title}/>
                                </div>
                                <div className="col-10 col-md-6 mx-auto pt-4 details">
                                    <h3>Model: {title}</h3>
                                    <h4>Price: {price}</h4>
                                   <p className="text-muted">{description}</p>
                                   <Link to="/">
                                        <Button text="Back to products" class="cart"/>
                                    </Link>
                                    <Link to="/Cart">
                                        <Button 
                                            text={inCart ? "in cart" : "Add to cart"}                                        
                                            disab={inCart ? true : false}
                                            class="cart1"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                   )}
                }
            </ProductConsumer>
        )
    }
}
