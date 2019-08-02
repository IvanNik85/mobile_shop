import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import ProductList from './Components/ProductList/ProductList'
import Products from './Components/Products/Products'
import Details from './Components/Details/Details'
import Default from './Components/Default/Default'
import Cart from './Components/Cart/Cart'

function App() {
    return (
       <div>  
           <Navbar />      
           <Router>
               <Switch>
                   <Route exact path="/" component={ProductList} />
                   <Route path="/Products" component={Products} />
                   <Route path="/Details" component={Details} />
                   <Route path="/Cart" component={Cart} />                   
                   <Route component={Default} />
               </Switch>
           </Router>
       </div>
    )
}

export default App;
