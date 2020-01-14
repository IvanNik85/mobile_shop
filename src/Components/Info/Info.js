import React from 'react'
import "./Info.scss"

export default class Info extends React.Component {
    state = {
        visible: false,
        // cardCli: false   
    }
    myref = React.createRef();
    options = {
        rootMargin: "-40px 0px"
    }
    observer = new IntersectionObserver(entries => {
        if(entries[0].intersectionRatio > 0) {
            this.setState({visible: true }); 
            this.textColor();     
        } 
    }, this.options)  

    componentDidMount() {  
        this.observer.observe(this.myref.current)  
    }     
    animMethod = (delay) => {
        let clearDiv = {animation: `fillDown 1.4s ${delay} ease forwards`}
        return (this.state.visible ? clearDiv : null )
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
    startAnim = () => {
        let fullCard = {animation: `fullAnim 1.4s forwards`} 
        return (this.state.cardCli ? fullCard: null)
    }
    render() {                
        return (
            <div className="wrapDiv" id="Info">
                <h1>Information</h1>
                <div className="container cardCont">
                    <div className="infoCard" style={this.startAnim()} ref={this.myref}> 
                        <div className="nova" style = {this.animMethod("0s")}></div>
                        <div>
                            <h3>Card 01</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro, obcaecati, voluptate impedit itaque blanditiis nihil id magnam tenetur labore, velit tempore temporibus? Recusandae fugit voluptates voluptatibus cumque rem odit?</p>
                            <a href="##" onClick={() => this.setState({cardCli: true})}>Click here</a>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="nova" style = {this.animMethod(".3s")}></div>
                        <div>
                            <h3>Card 02</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro, obcaecati, voluptate impedit itaque blanditiis nihil id magnam tenetur labore, velit tempore temporibus? Recusandae fugit voluptates voluptatibus cumque rem odit?</p>
                            <a href="##">Click here</a>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="nova" style = {this.animMethod(".6s")}></div>
                        <div>
                            <h3>Card 03</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro, obcaecati, voluptate impedit itaque blanditiis nihil id magnam tenetur labore, velit tempore temporibus? Recusandae fugit voluptates voluptatibus cumque rem odit?</p>
                            <a href="##">Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
