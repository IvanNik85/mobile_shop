import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/ProductList/ProductList'
import Product from './Components/Product/Product'
import Details from './Components/Details/Details'
import Default from './Components/Default/Default'
import Contact from './Components/Contact/Contact'
import Cart from './Components/Cart/Cart'
import {ProductProvider} from './Context'

function App() {
    return (
       <ProductProvider>  
           <Navbar />      
           <Router>
               <Switch>
                   <Route exact path="/" component={ProductList} />                  
                   <Route path="/Details" component={Details} />
                   <Route path="/Contact" component={Contact} />
                   <Route path="/Cart" component={Cart} />                   
                   <Route component={Default} />
               </Switch>
           </Router>
       </ProductProvider>
    )
}

export default App;
