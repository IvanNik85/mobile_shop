import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data"
import {newNews, actualNews, popularNews, oldNews} from "./newsData"

const Context = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: JSON.parse(localStorage.getItem(`inCart`)) || [], //storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        new: newNews,
        actual: actualNews,
        popular: popularNews,
        old: oldNews
    }
    //set copy of products so storeProducts stay intacted
    setProducts = () => {
        let copyProducts = [];
        let id = [];
        storeProducts.forEach(item => {
            const oneProduct = {...item};
            copyProducts = [...copyProducts, oneProduct];
        })
        id = this.state.cart.map(cart => cart.id);
        id.map(i => copyProducts.map(copy => copy.id === i && (copy.inCart = true)));    
        this.setState(() => {
            return {products: copyProducts} 
        }, () => {
            this.state.cart && this.addTotal();           
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({detailProduct: product})
    }
    updateStorage = () => {
        localStorage.setItem(`inCart`, JSON.stringify(this.state.cart));
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
        }, () => {
            this.addTotal();
            this.updateStorage();
            // console.log(this.state.cart)
            // console.log(this.state.product)
        }
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
        let tempCart = [...this.state.cart];
        let selected = tempCart.find(item => item.id === id);

        selected.count = selected.count + 1;
        selected.total = selected.count * selected.price;

        this.setState( () => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal();
            this.updateStorage();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        let selected = tempCart.find(item => item.id === id);        
        selected.count = selected.count - 1;

        if(selected.count === 0) {
            this.removeItem(id);           
        } else {            
            selected.total = selected.count * selected.price;
            this.setState( () => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotal();
                this.updateStorage();
            })
        }      
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        let index = tempProducts.indexOf(this.getItem(id));
        let product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;

        this.setState(() => {
            return {
                cart:tempCart,
                products: tempProducts
            }
        }, () => {
            this.addTotal();
            this.updateStorage();
        });

    }

    clearCart = (id) => {
        this.setState(() => {
            return {cart: []};
        }, () => {            
            this.setProducts()
            this.addTotal();   
            this.updateStorage();       
        })
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);
        let tax = subTotal * 0.2;
        let taxRound = parseFloat(tax.toFixed(2));
        let total = (subTotal + taxRound).toFixed(2);
        this.setState(() => {
            return {
                cartSubtotal: subTotal.toFixed(2),
                cartTax: taxRound,
                cartTotal: total
            }           
        });
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