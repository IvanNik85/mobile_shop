import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }
    setItem = (id) => {
        const product = this.state.products.find(item => item.id == id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.setItem(id);
        this.setState({detailProduct: product})
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