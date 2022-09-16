import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Redeem extends Component {
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
                                    <h1 className="text-center" id="">Redeem Your BM Points</h1>
                                    <p className="text-center">Soon, You will be able to redeem your BM Points as gift cards or use them to unlock future premium features. SO what are you waiting for, ask, answer question to gain BM Coins, the more upvotes you get, the more points you gain.  <br/> <Link to="/contact-us"> Contact us </Link> </p>
                                </div>
                            </div>
                </div>
        )
    }
}

export default Redeem