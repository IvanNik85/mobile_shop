import React from 'react'
import "../Cart/Cart"

export default function EmptyCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h1>Your cart is empty</h1>
                </div>
            </div>
        </div>
    )
}
