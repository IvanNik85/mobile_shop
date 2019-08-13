import React, { Component } from 'react'
import {storeProducts} from "./data"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts
    }
    handleDetail = () => {
        console.log("Hello Detail")
    }
    addToCart = () => {
        console.log("Hello Cart")
    }
    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ProductConsumer = Context.Consumer;

export {ProductProvider, ProductConsumer};