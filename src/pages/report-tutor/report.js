import React, { Component } from 'react'


import './report.css'

class Report extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
            <h1 className="text-center" id="header-text"> Report A Tutor</h1>
            <p className="text-center">Got any report or complaint to make againt a tutor?, please call us or fill in the form below and we will be sure to handle your complaintas soon as possible. </p>

            <div className="contactForm">
                <div className="col-lg-6 col-sm-12">
                <form  autocomplete="off">
                 <div className="row">
                    <div className="form-group  col-sm-12">
                         <input  name="name" required id="name" type="text" className="form-control" placeholder="Your Name..."  />
                    </div>

                    <div class="form-group  col-sm-12">
                         <input  name="email" required id="email" type="email" className="form-control" placeholder="your Email..."  />
                    </div>


                    <div className="form-group  col-sm-12">
                         <input  name="tutorUsername" required id="tutorUsername" type="text" className="form-control" placeholder="Enter the tutor's Username..."  />
                    </div>


                    <div class="form-group col-sm-12">
                        <textarea  name="report" required id="report" type="report" className="form-control" placeholder="detail your complaint here..." ></textarea>
                    </div>

                    <div class="button-div">
                        <button type="submit" className="button">Send Report</button>

                    </div>

                </div>

                </form>
                </div>
            </div>

        </div >        )
    }
}

export default Report