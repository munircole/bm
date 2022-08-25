import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo1 from '../../images/logo1.png';



import './footer.css'

class Footer extends Component {
    constructor(props) {
        super()
        var today = new Date(),
            date = today.getFullYear()
        this.state = {
            date: date

        };
    }
    


    render() {
        return (
            <div className='component-footer'>
                <footer id="footer" className="">
                    <div className="footer-top">
                        <div className="container1">
                            <div className="ask" style={{ backgroundColor: 'white', height: 'auto' }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4 style={{ color: 'black'}}>Are you stuck on assignment?</h4>
                                        <h6 style={{ color: 'black'}}> get unstuck - ask a question <br /> and get answers from other students</h6>
                                    </div>
                                    <div className="image col-lg-4">
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="askquestion" type="button"  ><Link to="/ask" className="button-link">Ask question</Link></button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 footer-info">
                                <img src={logo1} width="125px"  alt="BM logo" />
                                    <p>Ask questions and get answers to your  homeworks and assignments from other students, search and read books here for free
                                     </p>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Menu</h4>
                                    <ul>
                                        <li><Link to="/">Questions</Link></li>
                                        <li><Link to="/library">BM Library</Link></li>
                                        <li><Link to="/tags">Tags</Link></li>
                                        <li><Link to="/users">Users</Link></li>
                                        <li><Link to={{pathname:"https://bookishmate.blog"}} target="_blank">Blog</Link></li>


                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/advertising">Advitising</Link></li>
                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                        <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        <li><Link to="/privacy-policy">cookie Policy</Link></li>


                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <h5>Bookishtechnologies@gmail.com</h5>
                                    <h5>Tel: +2348139735791</h5>
                                    <div className="social-links">
                                        <Link to="#" className="twitter"><i className="fas fa-twitter"></i></Link>
                                        <Link to="#" className="facebook"><i className="fas fa-facebook"></i></Link>
                                        <Link to="#" className="instagram"><i className="fas fa-instagram"></i></Link>
                                        <Link to="#" className="linkedin"><i className="fas fa-linkedin"></i></Link>

                                    </div>
                                </div>
                            </div>


                            <div className="copyright-container">
                                <div className="copyright">
                                    &copy; Copyright <strong>BOOKISH-MATE</strong>. All Rights Reserved {this.state.date}
                                </div>
                            </div>

                        </div>

                    </div>

                </footer>
            </div>
        )
    }
}

Footer.propTypes = {

};

export default Footer