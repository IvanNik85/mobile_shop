import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct
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
                closeModal: this.closeModal
                }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ProductConsumer = Context.Consumer;

export {ProductProvider, ProductConsumer};