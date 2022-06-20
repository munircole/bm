import React, { Component } from 'react'
import { Link } from 'react-router-dom'



import './ad.css'

class Ad extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
                <div className="container">
                            <div>
                                <div>
                                    <h1 className="text-center" id="">Advetising</h1>
                                    <p className="text-center">This service is curruntly not available and would be available soon. <br/> <Link to="/contact-us"> Contact us </Link> </p>
                                </div>
                            </div>
                </div>
        )
    }
}

export default Ad