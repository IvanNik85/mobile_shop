import React, { Component } from 'react'
import "./ScrollTop.scss"

export default class ScrollTop extends Component {
    state = {
        is_visible: false
    }
    
    componentDidMount() {
        const scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
            console.log(scrollComponent)
        });
    }

    toggleVisibility() {
        if(this.state.is_visible || !this.state.is_visible) {        
        if (window.pageYOffset > (document.documentElement.offsetHeight / 2)) {
            this.setState({
                is_visible: true
            });
            return;
        } else {
            this.setState({
                is_visible: false
            });
        }}
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() { 
        return (
            <div className="scrollTop">
                {this.state.is_visible && (
                    <button className="toTopBtn" type="button" onClick={() => this.scrollToTop()}>
                        <i className="fas fa-angle-double-up"></i>
                    </button>
                )}
            </div>
        )
    }
}

