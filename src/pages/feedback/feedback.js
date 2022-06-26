import React, { Component } from 'react'


import './feedback.css'

class Feedback extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (

        <div className="container">
            <h1 className="text-center" id="header-text"> Give Us Feedback </h1>
            <h3 className="text-center">We Would Love To Hear From You!</h3>
            <p className="text-center">Please feel free to give us suggestion or feedback on your experience on our site, this would help us improve on our product and features . </p>

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
                        <textarea  name="feedback" required id="feedback" type="feedback" className="form-control" placeholder="feedback..." ></textarea>
                    </div>

                    <div className="button-div">
                        <button type="submit" className="button">Send</button>

                    </div>

                </div>

                </form>
                </div>
            </div>

        </div >
        )
    }
}

export default Feedback