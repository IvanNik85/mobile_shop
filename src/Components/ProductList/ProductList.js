import React, { Component } from 'react'
import {ProductConsumer} from '../../Context'
import Product from "../Product/Product"

export default class ProductList extends Component {
    render() {
        return (
            <div className="container" id="ProductList">               
               <div className="row">
                    <ProductConsumer>
                        {val => {
                           return val.products.map(product => {
                               return <Product key={product.id} product={product}/>
                           })
                        }}
                    </ProductConsumer>
               </div>
            </div>
        )
    }
}
