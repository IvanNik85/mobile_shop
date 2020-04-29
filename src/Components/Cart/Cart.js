import React, { Component } from 'react'
import "./Cart.scss"
import CartHeader from "./CartHeader"
import EmptyCart from './EmptyCart'
import { ProductConsumer } from "../../Context"
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <ProductConsumer>  
                {value => {
                    const {cart} = value;                   
                    if(cart.length > 0) {
                        return (
                            <div>
                                <CartHeader /> 
                                <CartList value={value}/>
                                <CartTotal value={value}/>
                            </div>
                        )
                    }
                    return <EmptyCart />
                }}         
            </ProductConsumer>
            )
        }
    }
