import React from 'react'
import "./News.scss"
import { ProductConsumer } from "../../Context"
import NewsCard from "./NewsCard"
import {newNews} from "../../newsData"
import NewsModal from "../../UI/NewsModal/NewsModal"

export default class News extends React.Component {
    state = {
        click: false,
        anim: false,
        div: false,
        arrow: false,
        rotate: false,
        modalShow: false,
        newsData: "",
        clicked: newNews
    }
    myref1 = React.createRef();
    options = {
        rootMargin: "-300px 0px"
    }
    observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) {
            return;
        }
        window.innerWidth < 768 && this.setState({ rotate: true })
        this.setState({
            anim: true,
            div: true,
            arrow: true
        });
    }, this.options)

    componentDidMount() {
        this.observer.observe(this.myref1.current);
    }
    changeValue = (q) => {
        window.innerWidth > 1140 && this.setState({ click: q })
    }
    rotateCircle = () => {
        const rotate = { transform: `rotate(${(this.state.click * -45)}deg)` }
        return rotate;
    }
    downUpMotion = () => {
        const element = document.querySelector('.activeNews');
        element.classList.remove('added');
        setTimeout(() => {
            element.classList.add('added');
        }, 50)
    }    
    callbackFunction = (childData) => {
        this.setState({newsData: childData})
    }
    modalOpenHandler = () => {
        this.setState({ modalShow: true});       
      };
    
    modalClosedHandler = () => {
        this.setState({ modalShow: false });
      };   

    render() {           
        return (
            <ProductConsumer>
                {value => {                                        
                    return (
                        <div className="container-fluid" id="News" ref={this.myref1}>
                            <h1>News</h1>
                            <div className="row">
                                <div className="col-md-9 col-lg-8 content">
                                    <div className="row">
                                        <div className="navMenu"></div>
                                    </div>
                                    <div className="row" style={this.state.div ? { animation: "moveNews 1.5s forwards" } : null}>
                                        {this.state.clicked.map(item => {
                                            return <NewsCard key={item.id} items={item} parrentCall={this.callbackFunction} modal={this.modalOpenHandler}/>
                                        })}   
                                    </div>                                  
                                </div>
                                <div className="col-md-3 col-lg-4 circleDiv">
                                    <div className="outsideDiv">
                                        <div className={"sideDiv" + (this.state.anim ? ' rotateA' : " ")}
                                            style={this.state.click ? { transform: `rotate(${(this.state.click * 45)}deg)` } : null}
                                        >
                                            <div className={"circle" + (this.state.rotate ? ' rotateSmall' : " ")}>
                                                <span
                                                    onClick={() => {
                                                        this.changeValue(-3);
                                                        this.downUpMotion();
                                                        this.setState({ clicked: value.new })
                                                    }
                                                    }
                                                    style={this.state.click ? this.rotateCircle() : null}>
                                                    New
                                        </span>
                                            </div>
                                            <div className={"circle" + (this.state.rotate ? ' rotateSmall' : " ")}>
                                                <span
                                                    onClick={() => {
                                                        this.changeValue(3)
                                                        this.downUpMotion();
                                                        this.setState({ clicked: value.actual })
                                                    }
                                                    }
                                                    style={this.state.click ? this.rotateCircle() : null}>
                                                    Actual
                                        </span>
                                            </div>
                                            <div className={"circle" + (this.state.rotate ? ' rotateSmall' : " ")}>
                                                <span
                                                    onClick={() => {
                                                        this.changeValue(-1);
                                                        this.downUpMotion();
                                                        this.setState({ clicked: value.old })
                                                    }
                                                    }
                                                    style={this.state.click ? this.rotateCircle() : null}>
                                                    Older
                                        </span>
                                            </div>
                                            <div className={"circle" + (this.state.rotate ? ' rotateSmall' : " ")}>
                                                <span
                                                    onClick={() => {
                                                        this.changeValue(1);
                                                        this.downUpMotion();
                                                        this.setState({ clicked: value.popular })
                                                    }
                                                    }
                                                    style={this.state.click ? this.rotateCircle() : null}>
                                                    Popular
                                        </span>
                                            </div>
                                        </div>
                                        <div className={"activeNews" + (this.state.arrow ? ' revealA' : " ")}></div>
                                    </div>
                                </div>
                            </div>
                            <NewsModal modalTrue={this.state.modalShow} data={this.state.newsData} modalClose={this.modalClosedHandler}/>
                        </div>                        
                    )
                }}                
            </ProductConsumer>
        )
    }
}
