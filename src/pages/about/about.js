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
                                    <p className="text-center">With BM library, you can download  and read arxiv ebooks here for free, arXiv has over 1,945,078 scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and systems science, and economics.</p>
                                </div>

                            </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default About