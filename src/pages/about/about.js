import React, { Component } from 'react'



import './about.css'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='component-about'>
                <div className="container">
                    <div className="about">
                            <div>
                                <div>
                                    <h1 className="text-center" id="about-text">My Bookismate</h1>
                                    <p className="text-center">Bokishmate is peer to peer knowledge sharing platform for tertiary institution students where students ask questions and get answers to their courseworks and assignments from other students, you can also search and read books here for free. Bookishmate operates a group of social learning networks for students in tertiary institutions. Bookishmate inspires students to share and explore knowledge in a collaborative community and engage in peer-to-peer educational assistance.</p>
                                </div>


                                <div className="section">
                                    <h1 className="text-center" id="library" >BM E-Library</h1>
                                    <p className="text-center">With BM library, you can get  and read ebooks from google here for free, with BM Library, you can search for any type of book for academic or research purposes, you can search and read books on  computer science, quantitative biology, quantitative finance, statistics, electric, literature, and many more.</p>
                                </div>

                            </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default About