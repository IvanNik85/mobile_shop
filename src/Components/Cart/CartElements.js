import React from 'react'
import "./CartElement.scss"

export default function CartElements() {
    return (
        <div className="container-fluid cart">
            <h1>Your Cart</h1>
            <div className="row">
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Products</h3>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Name</h3>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Price</h3>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Quantity</h3>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Remove</h3>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 d-none d-lg-block cartElement">
                    <h3>Total</h3>
                </div>
                <hr className="d-none d-lg-block"/>
            </div>           
        </div>
    )
}
