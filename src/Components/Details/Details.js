import React, { Component } from 'react'
import {ProductConsumer} from "../../Context"
import {Link} from "react-router-dom"
import "./Details.scss"
import Button from "../Button/Button"

export default class Details extends Component {  
    render() {
        return (
            <ProductConsumer>
                {value => {                   
                   const {
                       id,
                       title,
                       img,
                       price,
                       description,
                       inCart
                   } = value.detailProduct;               
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
                                   <Link to="/ProductList">
                                        <Button text="Back to products" classN="blue"/>
                                    </Link>                                    
                                    <button     
                                        className="btn red"                          
                                        disabled={inCart ? true : false}                                                                             
                                        onClick = {() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                            }
                                        }
                                       
                                    >{inCart ? <span>In Cart</span> : "Add to cart"}
                                    </button>                                  
                                </div>
                            </div>
                        </div>
                   )}
                }
            </ProductConsumer>
        )
    }
}
