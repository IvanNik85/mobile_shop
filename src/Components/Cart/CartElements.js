import React from 'react'

export default function CartElements() {
    return (
        <div className="container-fluid cart">
            <h1>Your Cart</h1>
            <div className="row">
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Products</p>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Name of products</p>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Price</p>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Quantity</p>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Remove</p>
                </div>
                <div className="col-10 mx-auto col-md-4 col-lg-2 cartElement">
                    <p>Total</p>
                </div>
            </div>

        </div>
    )
}
