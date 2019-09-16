import React, { Component } from 'react'
import "./Cart.scss"
import CartElements from "./CartElements"
import EmptyCard from './EmptyCard'
import { ProductConsumer } from "../../Context"
import CartList from './CartList'

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>  
                {value => {
                    const {cart} = value;                   
                    if(cart.length > 0) {
                        return (
                            <div className="">
                                <CartElements /> 
                                <CartList value={value}/>
                            </div>
                        )
                    }
                    return <EmptyCard />
                }}         
            </ProductConsumer>
            )
        }
    }
