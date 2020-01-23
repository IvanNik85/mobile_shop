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
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > (document.documentElement.offsetHeight / 2)
        ) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
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
                    <button type="button" onClick={() => this.scrollToTop()}>
                        <i class="fas fa-angle-double-up"></i>
                    </button>
                )}
            </div>
        )
    }
}

