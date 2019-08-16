import React, { Component } from 'react'
import "./Product.scss"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../../Context"
import PropTypes from "prop-types"

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;          
        return (
            <div className="col-9 col-md-6 col-lg-3 mx-auto product">
                <div className="card" onClick={() => console.log(`kliknuto na carticu`)}>
                   <h1>{title}</h1>
                    <Link to="./Details">
                        <img src={img} alt="phone1"/>
                    </Link>
                    <div className="cardFooter">
                        <button 
                            className="cartBtn" 
                            disabled={inCart ? true : false}
                            onClick={() => console.log(`added to Cart`)}
                        >
                            {inCart?<span>In Cart</span>:<i className="fas fa-cart-plus"></i>}                        
                        </button>
                        <p>{price}</p>
                    </div>
                </div>                
            </div>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.string,
        inCart: PropTypes.bool
    }).isRequired
}
