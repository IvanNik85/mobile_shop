import React from 'react'
import "./Cart"
import "./EmptyCart.scss"
import emptyCart from "../../images/emptycart.png"

export default function EmptyCart() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center empty">
                    <h1>Your cart is empty</h1>
                    <img src={emptyCart} alt="emptyCart"/>
                </div>
            </div>
        </div>
    )
}
