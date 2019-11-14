import React from 'react'
import "./News.css"

export default class News extends React.Component {
    state = {
        click: false       
    }
    changeValue = (q) => {
        this.setState({ click: q })
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
        },0)         
    }

    render() {       
        return (
            <div className="container-fluid" id="News">
                <h1>News</h1>
                <div className="row">
                    <div className="col-md-8 content">
                        <div className="row news">

                            <div className="col-md-4 image"></div>
                            <div className="col-md-8 text">
                                <h5>News title</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>
                            </div>

                        </div>
                        <div className="row news">

                            <div className="col-md-4 image"></div>
                            <div className="col-md-8 text">
                                <h5>News title</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>
                            </div>

                        </div>
                        <div className="row news">

                            <div className="col-md-4 image"></div>
                            <div className="col-md-8 text">
                                <h5>News title</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ducimus repudiandae perspiciatis assumenda deleniti vitae laudantium aliquid sed molestias totam molestiae, nulla expedita facere, incidunt unde nisi officia atque? Omnis laborum excepturi facere eos quisquam cupiditate provident, cum maiores aliquam nam. Sequi, sunt? Nemo maxime reprehenderit dignissimos saepe voluptate similique quae a dolor. Harum suscipit placeat veniam sunt exercitationem ex eligendi vero accusantium sapiente sint quis distinctio aliquam facilis ducimus earum quisquam dolore cumque inventore eum, perferendis sed! Alias error dicta fugiat sapiente totam? Quo dignissimos reprehenderit facilis voluptates est ut maxime? Itaque possimus ea eos odio mollitia ipsum doloremque!</p>
                            </div>

                        </div>
                        <div className="more">
                            <a href="##">More News <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 circleDiv">
                       <div className="outsideDiv">
                            <div className="sideDiv" style={this.state.click ? { transform: `rotate(${(this.state.click * 45)}deg)` } : null}>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(1);
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
                                            this.changeValue(-1)
                                            this.downUpMotion();
                                            } 
                                        }
                                        style={this.state.click ? { transform: `rotate(${(this.state.click * (-45))}deg)` }: null}>
                                        Actual
                                    </span>
                                </div>
                                <div className="circle">
                                    <span
                                        onClick={() => {
                                            this.changeValue(3);
                                            this.downUpMotion();
                                            }
                                        } 
                                        style={this.state.click ? { transform: `rotate(${(this.state.click * (-45))}deg)` }: null}>
                                        Older
                                    </span>
                                </div>
                                <div className="circle"><span></span></div>                                
                            </div>                               
                            <div className="activeNews"></div>                 
                       </div>   
                    </div>
                </div>

            </div>
        )
    }
}
