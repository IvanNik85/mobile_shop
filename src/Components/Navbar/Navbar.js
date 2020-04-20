import React, {Component} from 'react'
import Navbar from '../../../node_modules/react-bootstrap/Navbar';
import Nav from '../../../node_modules/react-bootstrap/Nav';
import logo from '../../images/logo.png'
import './Navbar.scss'

class NavbarMain extends Component {   
    state = {
        prevScrollPos: window.pageYOffset,
        visible: true,
        hideNav: false
    }
    handleScroll = () => {
        const {prevScrollPos} = this.state
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos        
        this.setState({
            prevScrollPos: currentScrollPos,
            visible,           
        })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }    

    render() {
        return (
            <Navbar className={!this.state.visible && "nabar-hidden"} bg="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img src={logo} 
                        width="50"
                        height="50%"
                        className="d-inline-block align-top" 
                        alt="logo"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">  
                    <Nav className="mr-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./#Info">Info</Nav.Link>                       
                        <Nav.Link href="./ProductList">Products</Nav.Link>   
                        <Nav.Link href="./#News">News</Nav.Link>                  
                        <Nav.Link href="./#Contact">Contact</Nav.Link>                        
                        <Nav.Link href="./Cart"><i className="fas fa-cart-plus mx-2"></i>Cart</Nav.Link>                       
                    </Nav>					
                </Navbar.Collapse>
            </Navbar>
        )    
    }    
}

export default NavbarMain

