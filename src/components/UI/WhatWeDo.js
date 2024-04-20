import React from "react";
import { Container, Row, Col } from "reactstrap";
import '../../styles/whatwedo.css';

// images
import what01 from '../../assets/images/what01.webp';
import what02 from '../../assets/images/what02.webp';
import what03 from '../../assets/images/what03.webp';
import what04 from '../../assets/images/what04.jpg';
import what05 from '../../assets/images/what05.jpg';
import what06 from '../../assets/images/what06.webp';
import what07 from '../../assets/images/customer.jpg';
import what08 from '../../assets/images/webhosting.jpg';

const WhatWeDo = () => {
    return (
        <section className="py-5">
            <Container>
                <div className="pb-4">
                   <h2 className="heading">What We Do</h2>
                </div>
                <Row>
                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what01} className="w-100" alt="img" />
                                <h5 className="what_card-title">Solution Design</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Solution Design</h5>
                               <p className="para">We at Webingate provide solution design services for your business concepts and make your vision come true. Providing simplified and effective solutions is one of our core busines.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what02} className="w-100" alt="img" />
                                <h5 className="what_card-title">PROJECT DEVELOPMENT</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Project Development</h5>
                               <p className="para">Webingate provides latest technology solutions with effeciency and easy of use for all your projects.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what03} className="w-100" alt="img" />
                                <h5 className="what_card-title">MOBILE APPS DEVELOPMENT</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Mobile Apps Development</h5>
                               <p className="para">To helps our clients reach the markets of next generation, Webingate offers wide range of Mobile application development solutons.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what04} className="w-100" alt="img" />
                                <h5 className="what_card-title">PRODUCT DESIGN</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Product Design</h5>
                               <p className="para">Webingate would conceptualize and design your envisioned products ranging from simple POS machines to state of the art business equipments and electronic products.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what05} className="w-100" alt="img" />
                                <h5 className="what_card-title">PRODUCT DEVELOPMENT</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Product Development</h5>
                               <p className="para">Webingate with its collaborative partners offers end-to-end product design and developement solutions along with the front end and product management software.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what06} className="w-100" alt="img" />
                                <h5 className="what_card-title">APPLICATION TESTING</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Application Testing</h5>
                               <p className="para">Clients can use Webingate testing services to reduce the time, effort and budget on testing their end products. We offer wide range of testing services from manual to automation and performance testing services.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what01} className="w-100" alt="img" />
                                <h5 className="what_card-title">ONLINE LICENSING</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Online Licensing</h5>
                               <p className="para">Need a online licensing software for your products? Webingate offers the online licensing software to market and offer licensing to your clients.</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what08} className="w-100" alt="img" />
                                <h5 className="what_card-title">WEB HOSTING</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Web Hosting</h5>
                               <p className="para">Start your business online with our web site development and hosting services. Webingate provides end-to-end online and web solutions for your business including hosting, domain management, registration services</p>
                        </div>
                       </div>
                    </Col>

                    <Col lg='4' md='6' className="mb-5">
                       <div className="what_do-card">
                           <div className="what_card-img">
                                <img src={what07} className="w-100" alt="img" />
                                <h5 className="what_card-title">CUSTOMER SUPPORT</h5>
                           </div>

                           <div className="hover_b">
                               <h5 className="hover_b-title">Customer Support</h5>
                               <p className="para">Our customer testimonals and feedback speaks of the best services and support provided by Webingate. Let us serve your in the best way possible and enhance your satisfaction.</p>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default WhatWeDo;