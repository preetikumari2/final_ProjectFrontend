import React from "react";
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg from '../assets/Images/heroimage.jpg';
import '../styles/hero-section.css';
import { Link } from "react-router-dom";
import Category from '../components/UI/category/Category.js';
import '../styles/home.css';
import feature1 from '../assets/Images/service-01.png';
import feature2 from '../assets/Images/service-02.png';
import feature3 from '../assets/Images/service-03.png';


import whyImg from '../assets/Images/location.png';

import networkImg from '../assets/Images/network.png';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.js';



const featureData =[
  {
      title: 'Delicious Dine In',
      imgUrl: feature2,
      desc: "Enjoy the food with your family and friends." 
  },
  {
      title: 'Quick Delivery',
      imgUrl: feature1,
      desc: "your food will be delivered soon, If you place order." 
  },
  {
      title: 'Easy Pick Up',
      imgUrl: feature3,
      desc: "Our delivery person will pick the dish as soon as you order it." 
  },
]

const Home = () => {

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='hero_content'>
                                <h5 className="mb-3">Tasty Chinese Cusine That Will Water Up Your Mouth</h5>
                                <h1 className="mb-4 hero_title"><span>HUNGRY?</span> Just wait <br/> food at<span> your door</span></h1>
                                <p>Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features. </p>
                                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                                    <button className="order_btn d-flex align-items-center justify-content-between">Order now <i className="ri-arrow-right-s-line"></i></button>
                                    <button className="all_foods-btn"><Link to='/foods'>See all foods</Link></button>
                                </div>
                                <div className="hero-service d-flex align-items-center gap-10 mt-5">
                                    <p className="d-flex align-items-center gap-2"><span className="shipping_icon"><i className="ri-car-line"></i></span>{" "} No Shipping Charges</p>
                                    <p className="d-flex align-items-center gap-2"><span className="shipping_icon"><i className="ri-shield-check-line"></i></span>{" "} 100% Secured Checkout</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero_img">
                                <img src={heroImg} alt="hero-img" className="w-100"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category />
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                            <h5 className="feature_subtitle mb-3">What We Serve</h5>
                            <h2 className="feature_title">Just sit back at home</h2>
                            <h2 className="feature_title">we will <span>take care</span></h2>
                            <p className="mb-1 mt-4 feature_text">You can enjoy food with your friends and family here with good vibes and atmosphere</p>
                            <p className="feature_text">Takeaways and online booking is also available here</p>
                        </Col>
                        {
                            featureData.map((item,index) =>(
                                <Col lg='4' md='6' sm='6' key={index} className="mt-5">
                                <div className="feature_item text-center px-5 py-3">
                                    <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                                    <h5 className=" fw-bold mb-3">{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>

                            ))
                        }
                       
                    </Row>
                </Container>
            </section>
            
            <section className="why_choose-us">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <img src={whyImg} alt="why-tasty-treat" className="w-100"/>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="why_tasty-treat">
                                <h2 className="tasty_treat-title mb-4 mt-5">Why <span>美味的中国菜 ?</span></h2>
                                <p className="tasty_treat-desc">China’s food is very unique and traditional. Grains are the main food 
                                    in China. Rice is the favorite grain among the people in the South. 
                                    Food in China is mostly stir-fried rapidly in oil at a very high 
                                    temperature. Fujian Cuisine is famous for delicately cooked fish and 
                                    crabs for soups and for flavorings such as soy-sauce.</p>
                                    <ListGroup className="mt-4 mb-3">
                                        <ListGroupItem className="border-0 ps-0">
                                            <p className=" choose_us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                                            Fresh and tasty foods</p>
                                            <p className="choose_us-desc">Roasted sweet potatoes are a popular snack eaten by the Chinese. 
                                                The people also like eggs, fish, fruit, and shellfish.</p>
                                        </ListGroupItem>
                                        <ListGroupItem className="border-0 ps-0">
                                            <p className=" choose_us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                                            Quality support</p>
                                            <p className="choose_us-desc">The food which we provide to you will be tasty and healthy whether 
                                                is delivered at your door step or served at the restaurant.</p>
                                        </ListGroupItem>
                                        <ListGroupItem className="border-0 ps-0">
                                            <p className=" choose_us-title d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>
                                            Order from any location</p>
                                            <p className="choose_us-desc">You can order your food from any place your food will be delivered 
                                                fresh and on time with the help of our delivery partners.</p>
                                        </ListGroupItem>
                                    </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <Row>
                        
                        <Col lg='6' md='6'>
                            <div className="testimonial ">
                              <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                              <h2 className="testimonial_title mb-4">What our <span>customers</span> are saying</h2>
                              <p className="testimonial_desc">A Chinese cuisine has definite rules for the appropriate combining of the ingredients 
                                into dishes, and dishes in to an appropriate meal. A typical home meal for no special 
                                purpose might include boiled rice, soup, steamed fish.</p>
                                <TestimonialSlider />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <img src={networkImg} alt='testimonial-img' className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </Helmet>
    )
};

export default Home;