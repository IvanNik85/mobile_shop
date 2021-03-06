import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/ProductList/ProductList'
import Details from './Components/Details/Details'
import Default from './Components/Default/Default'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'
import Modal from "./Components/Modal/Modal"
import {ProductProvider} from './Context'

function App() {
    return (
       <ProductProvider>  
           <Navbar />             
           <Router>
               <Switch>                  
                   <Route exact path="/" component={Home} /> 
                   <Route path="/ProductList" component={ProductList} />                 
                   <Route path="/Details" component={Details} />                   
                   <Route path="/Cart" component={Cart} />                   
                   <Route component={Default} />
               </Switch>
               <Modal />
           </Router>            
       </ProductProvider>
    )
}

export default App;
