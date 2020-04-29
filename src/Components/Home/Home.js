import React from 'react'
import { Link } from "react-router-dom"
import "./Home.scss"
import "../Button/Button.scss"
import MainClass from "../MainClass/MainClass"
import Info from "../Info/Info"
import Contact from "../Contact/Contact"
import News from "../News/News"
import images from "../../Images"
import ScrollTop from '../../UI/ScrollTop/ScrollTop'

export default class Home extends React.Component {
    state = {
        visible: false,
        im: []
    }
    myref = React.createRef();
    options = () => {
        if (window.innerWidth > 768) {
            return { rootMargin: "-300px 0px" }
        } else {
            return { rootMargin: "-150px 0px" }
        }
    }
    observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio > 0) {
            this.setState({ visible: true });
        } else {
            this.setState({ visible: false });
        }
    }, this.options())

    componentDidMount() {
        this.observer.observe(this.myref.current)
        this.imagesMap()
    }

    imagesMap() {
        const sources = images.map(img => img.src)
        let arr = [];
        do {
            const num = Math.floor(Math.random() * 12)
            arr.push(num)
            arr = arr.filter((item, index) => {
                return arr.indexOf(item) === index
            })
        } while (arr.length < 3)
        const randThree = arr.map(item => sources[item])
        this.setState({ im: randThree })
    }

    render() {
        const styleIt = { animation: 'show 2s ease forwards' }
        return (
            <div className="MainPage">
                <MainClass />
                <Info />
                <div className="container-fluid Home" id="Home" ref={this.myref}>
                    <div className="row">
                        <div className="animImages">
                            <div className={`rec firstImg ${this.state.visible ? "firAnim" : ''}`} >
                                <img src={this.state.im[0]} alt="phoneOne" />
                                <Link to='/ProductList' />
                            </div>
                            <div className={`rec secondImg ${this.state.visible ? "secAnim" : ''}`}>
                                <img src={this.state.im[1]} alt="phoneTwo" />
                                <Link to='/ProductList' />
                            </div>
                            <div className={`rec thirdImg ${this.state.visible ? "thirAnim" : ''}`}>
                                <img src={this.state.im[2]} alt="phoneThree" />
                                <Link to='/ProductList' />
                            </div>
                        </div>
                        <div className="mainButtons" style={this.state.visible ? styleIt : null}>
                            <div className="pulse">
                                <Link to="/ProductList">
                                    Products
                                    <div className="backPulse"></div>
                                </Link>
                            </div>
                            <div className="pulse">
                                <Link to="/Cart">
                                    Cart
                                    <div className="backPulse"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <News />
                <Contact />
                <ScrollTop />
            </div>
        )
    }
}
