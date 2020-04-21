import React from "react"
import { ProductConsumer } from '../../Context'
import "./NewsCard.scss"

export default class NewsCard extends React.Component { 
    state = {
        modalShow: false,
    }   
    render() {
        const {id, title, img, text} = this.props.items    
        return (            
            <ProductConsumer>
                {value => {
                    return (                        
                        <div className="col-12 col-md-10 col-xl-9 news">   
                            <div className="image"><img src={img} alt={`img${id}}`}/></div>
                            <div className="text">
                                <h5>{title}</h5>
                                <p>{text}</p>
                                <a href="##" className="readMore" 
                                    onClick = {() => {
                                        this.props.modal(); 
                                        this.props.parrentCall(this.props.items);
                                        }
                                    }>Read more
                                    <i className="fas fa-angle-double-right"></i>
                                </a>
                            </div>
                        </div>                       
                    )}}
            </ProductConsumer>           
        )
    }
}
