import React, { Component } from 'react'


import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

        <div className="container">
            <h1 className="text-center" id="header-text"> Mail Us </h1>
            <h3 className="text-center">We Would Love To Hear From You!</h3>
            <p className="text-center">If you have any questions, please call us or fill in the form below and we will get back to you very soon. </p>

            <div className="contactForm">
                <div className="col-lg-6 col-sm-12">
                <form  autocomplete="off">
                 <div className="row">
                    <div className="form-group  col-sm-12">
                         <input  name="name" required id="name" type="text" className="form-control" placeholder="Your Name..."  />
                    </div>

                    <div className="form-group  col-sm-12">
                         <input  name="email" required id="email" type="email" className="form-control" placeholder="Email..."  />
                    </div>

                    <div className="form-group col-sm-12">
                        <textarea  name="message" required id="message" type="message" className="form-control" placeholder="Message..." ></textarea>
                    </div>

                    <div className="button-div">
                        <button type="submit" className="button">Send Message</button>

                    </div>

                </div>

                </form>
                </div>
            </div>

        </div >
        )
    }
}

export default Contact