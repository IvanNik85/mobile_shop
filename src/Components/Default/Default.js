import React, { Component } from 'react'
import errorPage from '../../images/404-error.jpg'
import "./Default.scss"

export default class Default extends Component {
    render() {
        return (
            <div className="errorPage">
                <img src={errorPage} alt="errorPage"/>             
            </div>
        )
    }
}
