import React from 'react'
import {Link} from "react-router-dom"
import "./CartTotal.scss"

export default function CartTotal({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <div className="container">
            <div className="row">
                <div className="col-11 mx-auto d-flex flex-column flex-md-row align-items-center justify-content-around ">  
                    <div className="sumTotal text-right mb-4 mr-3">
                        <h3>
                            <span>Subtotal:</span> <span>{cartSubtotal}€</span>
                        </h3>
                        <h3>
                            <span>Tax:</span> <span>{cartTax}€</span>
                        </h3>
                        <h3>
                            <span>Total:</span> <span>{cartTotal}€</span>
                        </h3>
                    </div>
                   <div className="buyClear">
                        <Link to="/Cart">
                            <button className="btn red" type="button"
                            onClick={() => clearCart()}>Clear cart</button>                       
                        </Link>       
                        <Link to="/">
                            <button className="btn blue" type="button"
                            onClick={() => clearCart()}>Buy</button>                       
                        </Link>                
                   </div>            
                </div>
            </div>
        </div>
    )
}
