import React, { Component } from 'react'

const Context = React.createContext();

class ProductProvider extends Component {
    render() {
        return (
            <Context.Provider value="Hello from Context">
                {this.props.children}
            </Context.Provider>
        )
    }
}

const ProductConsumer = Context.Consumer;

export {ProductProvider, ProductConsumer};