import React from 'react'
import "./Info.scss"

export default function Info() {
    return (
       <div className="wrapDiv" id="Info">
           <h1>Information</h1>
            <div className="container cardCont">                
                <div className="infoCard">
                    <div>
                        <h3>Card 01</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro, obcaecati, voluptate impedit itaque blanditiis nihil id magnam tenetur labore, velit tempore temporibus? Recusandae fugit voluptates voluptatibus cumque rem odit?</p>
                        <a href="##">Click here</a>
                    </div>
                </div>
                <div className="infoCard">
                    <div>
                        <h3>Card 02</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro, obcaecati, voluptate impedit itaque blanditiis nihil id magnam tenetur labore, velit tempore temporibus? Recusandae fugit voluptates voluptatibus cumque rem odit?</p>
                        <a href="##">Click here</a>
                    </div>
                </div>
                <div className="infoCard">
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
