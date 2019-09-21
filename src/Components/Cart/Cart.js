import React, { Component } from 'react'
import "./Cart.scss"
import CartHeader from "./CartHeader"
import EmptyCard from './EmptyCard'
import { ProductConsumer } from "../../Context"
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
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
                    return <EmptyCard />
                }}         
            </ProductConsumer>
            )
        }
    }
