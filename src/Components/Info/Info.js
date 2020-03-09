import React from 'react'
import "./Info.scss"

export default class Info extends React.Component {
    state = {
        visible: false,
        hoverEnabled: false
    }
    myref = React.createRef();
    options = {
        rootMargin: "-40px 0px"
    }
    observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
            this.setState({ visible: true });
            this.textColor();
        }
    }, this.options)

    componentDidMount() {
        this.observer.observe(this.myref.current)
    }
    animMethod = (delay) => {
        const clearDiv = { animation: `fillDown 1.4s ${delay} ease forwards` }
        if (this.state.visible) {
            setTimeout(() => {
                this.setState({ hoverEnabled: true })
            }, 2000)
            return clearDiv;
        }
    }
    textColor = () => {
        let divs = document.querySelectorAll(".infoCard h3,.infoCard p")
        let styleText = "colorChange 1s"
        divs.forEach(div => {
            div.style.animation = styleText
            setTimeout(() => {
                div.style.color = "#777"
            }, 500)
        })
    }
    render() {
        return (
            <div className="wrapDiv" id="Info">
                <h1>Information</h1>
                <div className="container cardCont">
                    <div className="infoCard" ref={this.myref}>
                        <div className={`nova ${this.state.hoverEnabled && "enabled"}`} style={this.animMethod("0s")}></div>
                        <div className="content">
                            <h3><i className="fab fa-apple"></i><span>Iphones<br /></span></h3>
                            <p>Known for its innovation and simplistic elegance, Apple has always set the benchmark when it comes to their smartphones. Apple brings to the table high-end specifications blended with tasteful and minimalistic beauty, making its smartphones stand among the elite.</p>
                            <a href="##">Learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div
                            className={`nova ${this.state.hoverEnabled && "enabled"}`} style={this.animMethod(".3s")}></div>
                        <div className="content">
                            <h3><i className="fab fa-windows"></i><span>Windows<br /> phones</span></h3>
                            <p>Manage your mobile fleet. Enroll your whole mobile fleet in one go. Distribute company apps in one place. Set the level of oversight on each device, from limited to locked down. It's up to your business' needs. Choose your favourite Windows device.</p>
                            <a href="##">Learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className={`nova ${this.state.hoverEnabled && "enabled"}`} style={this.animMethod(".6s")}></div>
                        <div className="content">
                            <h3><i className="fab fa-android" aria-hidden="true"></i><span>Android phones</span></h3>
                            <p>Whether you’re looking for a waterproof phone, the longest battery life or a low-light camera, there’s an Android phone for you. Android is made for business - no matter what your business is. It’s a powerful platform that’s open to all. Find the one you love.</p>
                            <a href="##">Learn more <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
