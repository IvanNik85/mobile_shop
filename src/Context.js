import React, { Component } from 'react'
import {storeProducts} from "./data"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: []
    }
    handleDetail = () => {
        console.log("Hello Detail")
    }
    addToCart = () => {
        console.log("Hello Cart")
    }
    setProducts = () => {
        let copyProducts = [];
        storeProducts.forEach(item => {
            const oneProduct = {...item};
            copyProducts = [...copyProducts, oneProduct];
        })
        this.setState(() => {
            return {products: copyProducts} 
        })
    }
    
    componentDidMount() {
        this.setProducts();
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