import React, { Component } from 'react'
import "./Modal.scss"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../../Context"

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { title, img, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className="container-fluid modal">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center px-5 py-3 modalArea">
                                        <h2>Added to cart</h2>
                                        <img className="imageModal" src={img} alt={title}/>
                                        <h3>{title}</h3>
                                        <p>{price}</p>  
                                        <Link to="./ProductList">
                                            <button className="btn blue" onClick={() => value.closeModal()}>Back to products</button>
                                        </Link>                                        
                                        <Link to="./Cart">
                                            <button className="btn red" onClick={() => value.closeModal()}>To cart</button>
                                        </Link>                                       
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
