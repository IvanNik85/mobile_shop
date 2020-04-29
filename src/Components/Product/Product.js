import React, { Component } from 'react'
import "./Product.scss"
import { Link } from "react-router-dom"
import { ProductConsumer } from "../../Context"
import PropTypes from "prop-types"

export default class Product extends Component {
    state = {
        isLoading: true
    }
    handleLoading = () => {  
        setTimeout(() => {
            this.setState({ isLoading: false })    
        },1000)  
    }
    render() {
        window.scrollTo(0, 0);
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductConsumer>
                {value => (
                    <div className="col-9 col-md-6 col-lg-3 mx-auto product">
                        <div className={this.state.isLoading ? "loaderDiv" : "none"}>
                            <div className="loader">
                                <div className="face face1">
                                    <div className="circle">
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="circle">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card"
                            onClick={() => value.handleDetail(id)}>
                            <h1>{title}</h1>
                            <Link to="./Details">
                                <img src={img} onLoad={() => this.handleLoading()} alt="phone1" />
                            </Link>
                            <div className="cardFooter">
                                <button
                                    className={inCart ? "inCart" : "cartBtn"}
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }
                                    }
                                >
                                    {inCart ? <span>In Cart</span> : <i className="fas fa-cart-plus"></i>}
                                </button>
                                <p>{price}€</p>
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
