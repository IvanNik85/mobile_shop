import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        // cartSubtotal: 0,
        // cardTax: 0,
        // cardTotal: 0
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id == id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({detailProduct: product})
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(() => {
            return {products: tempProducts,           
                    cart: [...this.state.cart, product]}
        }, () => {console.log(this.state)}
            )        
        }
    
    openModal = (id) => {
        const product = this.getItem(id);       
        this.setState(() => {
            return {
                modalOpen: true,
                modalProduct: product                
            }
        })
    }    

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        console.log("icremented product")
    }

    decrement = (id) => {
        console.log("decremented product")
    }

    removeItem = (id) => {
        console.log("removed product")
    }

    clearCart = (id) => {
        console.log("cleared Cart")
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
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ProductConsumer = Context.Consumer;

export {ProductProvider, ProductConsumer};