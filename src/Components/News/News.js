import React from 'react'
import "./News.css"

export default class News extends React.Component {
    state = {
        click: false       
    }
    changeValue = (q) => {
        window.innerWidth > 1140 && this.setState({ click: q })
    }
    rotateCircle = () => {      
        const rotate = {transform: `rotate(${(this.state.click * -45)}deg)`}
        return rotate;
    }
    downUpMotion = () => {            
        const element = document.querySelector('.activeNews');
        element.classList.remove('added');
        setTimeout(() => {
            element.classList.add('added'); 
        },50)         
    }

    render() {       
        return (
            <div className="container-fluid" id="News">
                <h1>News</h1>
                <div className="row">
                    <div className="col-md-9 col-lg-8 content">
                        <div className="row">
                            <div className="navMenu"></div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 col-xl-8 news">
                                <div className="image"></div>
                                <div className="text">
                                    <h5>News title</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>
                                    <a href="##" className="readMore">Read more<i className="fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 col-xl-8 news">
                                <div className="image"></div>
                                <div className="text">
                                    <h5>News title</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>
                                    <a href="##" className="readMore">Read more<i className="fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 col-xl-8 news">                                
                                <div className="image"></div>
                                <div className="text">
                                    <h5>News title</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>  
                                    <a href="##" className="readMore">Read more<i className="fas fa-angle-double-right"></i></a>
                                </div>
                                <div className="more">
                                    <a href="##">More News <i className="fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-3 col-lg-4 circleDiv">
                       <div className="outsideDiv">
                            <div className="sideDiv" style={this.state.click ? { transform: `rotate(${(this.state.click * 45)}deg)` } : null}>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(-3);
                                            this.downUpMotion();
                                            }
                                        }
                                        style={this.state.click ? this.rotateCircle() : null}>
                                        New
                                    </span>
                                </div>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(3)
                                            this.downUpMotion();
                                            } 
                                        }
                                        style={this.state.click ? this.rotateCircle() : null}>
                                        Actual
                                    </span>
                                </div>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(-1);
                                            this.downUpMotion();
                                            }
                                        } 
                                        style={this.state.click ? this.rotateCircle() : null}>
                                        Older
                                    </span>
                                </div>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(1);
                                            this.downUpMotion();
                                            }
                                        } 
                                        style={this.state.click ? this.rotateCircle() : null}>
                                        Popular
                                    </span>
                                </div>                                
                            </div>                               
                            <div className="activeNews"></div>                 
                       </div>   
                    </div>
                </div>

            </div>
        )
    }
}
