import React from "react";
import './footer.css';
import { Col, Container, Row } from "reactstrap";
import logo02 from "../../assets/images/Webingate_White_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer pt-5">
            <Container>
                <Row>
                    <Col lg='5' md='12' className="mb-5">
                        <div className="footer_b">
                            <div className="logo mb-4">
                                <img src={logo02} alt="logo" />
                            </div>
                            <div className="footer_text">
                                <p>Webingate solutions is a fast growing technology solution provider to the businesses through its innovative and latest technology solutions. It helps to build the latest technology enabled intelligent gateways, to the web, for your businesses.

                                Experience the flexibility, agility, quality and easy of business with Webingate...</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6' className="mb-5">
                        <div className="footer_b">
                        <ul>
                            <li>
                                <Link><i className="ri-map-pin-line"></i>Address: 1st Floor, P.No.9/2, Survey No# 64,HUDA Techno Enclave, Phase II, HITEC City, Madhapur, Hyderabad - 500081, Telangana, INDIA.</Link></li>
                            <li>
                                <Link><i className="ri-whatsapp-line"></i>+91 830 972 0696</Link>
                            </li>

                            <li>
                                <Link><i class="ri-mail-line"></i>webingate@yandex.com <br/> webingate@gmail.com</Link>
                            </li>
                        </ul>
                        </div>
                    </Col>
                    <Col lg='4' md='6' className="mb-5">
                        <div className="footer_b">
                            <ul>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> Project Development</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> Mobile Apps Development</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i>Web Hosting & Development</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i>Product Design & Development</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> Firmware Development</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> EAI Solutions</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> About Us</Link>
                                </li>
                                <li>
                                    <Link><i className="ri-arrow-right-s-line"></i> Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer_line py-4">
                <p>© Copyright 2023. All Rights Reserved.</p>
            </div>
        </section>
    )
};

export default Footer;