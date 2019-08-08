import React, { Component } from 'react'
import {ProductConsumer} from '../../Context'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {val => {
                        return <h1>{val}</h1>
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
