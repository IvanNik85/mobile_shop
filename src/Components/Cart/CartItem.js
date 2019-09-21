import React from 'react'
import "./CartItem.scss"

export default function CartItem({item,value}) {   
    const {id, img, title, price, count, total} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row text-center d-flex align-items-center">            
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img} 
                    className="img-fluid" 
                    style={{width: "100px", height: "100px"}} 
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none sText">Product:</span>
                <h3>{title}</h3>              
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none sText">Price:</span>
                <h3>{price}</h3>              
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <div className="btnDiv py-2">
                        <button className="incBtn" onClick={() => increment(id)}>-</button>
                        <button className="incBtn1">{count}</button>  
                        <button className="incBtn" onClick={() => decrement(id)}>+</button>      
                    </div>    
                </div>             
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="removeIcon">
                    <i className="fas fa-trash" onClick={() => removeItem(id)}></i>    
                </div>              
            </div>
            <div className="col-10 mx-auto col-lg-2 total">
                <span className="d-block d-lg-none">total: </span>   
                <p>{total}</p>                    
            </div>      
            <hr/>     
        </div>
    )
}
