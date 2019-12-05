import React, { Component } from 'react'
import "./NewsModal.scss"

export default class NewsModal extends Component {
    render() {
        const {id, title, img, text} = this.props.data;
        const {modalTrue} = this.props;        
        if(!modalTrue) {
            return null
        } else {
            return (
                <div className="container-fluid newsModal">
                    <div className="row">
                        <div className="col-10 mx-auto text-center px-5 py-3 newsArea">
                            <button className="closeNews" onClick={() => this.props.modalClose()}>&#x274C;</button>
                            <h2>{title}</h2>
                            <img className="imageModal" src={img} alt={title} />
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
