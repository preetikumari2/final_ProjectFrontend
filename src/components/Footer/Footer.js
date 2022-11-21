import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import logo from '../../assets/Images/res-logo.png';
import '../../styles/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                    <div className="footer_logo text-start">
                        <img src={logo} alt="logo" />
                        <h5>美味的中国菜</h5>
                        <p>Food is one of the basic necessities of life. Food contains nutrients—substances 
                            essential for the growth, repair, and maintenance of body.</p>
                    </div>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer_title">Delivery Time</h5>
                        <ListGroup className="deliver_time-list">
                            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                    <h5 className="footer_title">Contact</h5>
                        <ListGroup className="deliver_time-list">
                            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                                <p>Location: China, Beijing, Chaoyang, Guanghua Rd, 1</p>    
                            </ListGroupItem>
                            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                                <span>Phone: 9972522152</span>    
                            </ListGroupItem>
                            <ListGroupItem className=" delivery_time-item border-0 ps-0">
                                <span>Email: preethi@gmail.com</span>   
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                    <h5 className="footer_title">Newsletter</h5>
                    <p>Subscribe our newsletter</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Enter your email" />
                        <span>
                            <i className="ri-send-plane-line"></i>
                        </span>
                    </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg='6' md='6'>
                        <p className="copyright_text"><i className="ri-copyright-line"></i>Copyright - 2022, booked by Preethi. All Rights Reserved.</p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                            <p className="m-0">Follow: </p>
                            <span>{" "}<Link to='https://www.facebook.com/'><i className="ri-facebook-line"></i></Link>{" "}</span>
                            <span><Link to='https://www.instagram.com/'><i className="ri-instagram-line"></i></Link></span>
                            <span>{" "}<Link to='https://www.youtube.com/'><i className="ri-youtube-line"></i></Link>{" "}</span>
                            <span><Link to='https://www.linkedin.com/'><i className="ri-linkedin-line"></i></Link></span>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
