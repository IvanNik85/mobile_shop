import React from 'react'
import "./Contact.scss"

export default function Contact() {
    return (
        <div className="contactInfo" id="Contact">
            <div className="wrap">
                <h1>Contact Information</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 contact">
                            <div className="contactData">
                                <h3>Contact</h3>
                                <p>If you have any questions related to our products  or any other subject please fell free to contact us  and we will be happy to help you.</p>
                            </div>
                            <div className="phoneNum">
                                <h3>Phone</h3>
                                <p>064/2323-232</p>
                                <p>064/2323-131</p>
                            </div>
                            <div className="emaiInfo">
                                <h3>E-mail</h3>
                                <p>mobilehopICA@gmail.com</p>
                            </div>
                            <div className="adressInfo">
                                <h3>Adress</h3>
                                <p>Mekenzijeva 34</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 messageField">
                            <form autocomplete="off" action="##">
                                <div className="ddd">                                   
                                    <input type="text" name="name" className="text" placeholder="Name" /><br />
                                    <input type="email" name="email" className="mail" placeholder="E-mail" /><br />
                                    <textarea name="textArea" className="area" cols="40" rows="5" placeholder="Your message"></textarea><br />
                                    <button type="submit" className="submitBtn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright &copy; Ivan Nikolic 2019.</p>
                </div>
            </div>
        </div>
    )
}
