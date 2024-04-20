import React, {useEffect} from "react";
import '../styles/contact.css';
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollButton from "../components/UI/ScrollButton";
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div className="contact">
            <ScrollButton />
            <section className="contact_title">
                  <h2 className="text-center py-5">Contact Us</h2>
            </section>
            <section className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.038245769355!2d78.42150817134677!3d17.45788346419826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911ce872790d%3A0x4f46dd04313930f0!2swebingate%20solutions%20pvt%20ltd.!5e0!3m2!1sen!2sin!4v1701353792836!5m2!1sen!2sin"></iframe>
            </section>

            <section className="py-5 form_input">
                <Container>
                {/* <h2 className="heading">Contact Us</h2> */}

                  <div className="py-4">
                     <h2 className="heading">We Expertise In</h2>
                  </div>
                    <Row className="align-items-center">
                        <Col lg='6'>
                           <form className="pb-5">
                            <Row>
                                <Col lg='6'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                    </div>
                                </Col>
                                <Col lg='6'>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                    </div>
                                </Col>
                                <Col sm='12'>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                    </div>
                                </Col>
                                <Col sm='12'>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '150px'}}></textarea>
                                    <label htmlFor="floatingTextarea2">Comments</label>

                                    {/* <textarea className="form-control" placeholder="Message">

                                    </textarea> */}
                                </div>

                                <div className="pt-5">
                                    <button className="send_btn">SEND MESSAGE</button>
                                </div>
                                </Col>
                                
                            </Row>
                           
                            
                           </form>
                        </Col>
                        <Col lg='6'>
                            <div className="address">
                                <h5>Our Office</h5>
                                <ul>
                                    <li className="para"><b>Address:</b> 1st Floor, P.No.9/2, Survey No# 64, HUDA Techno Enclave, Phase II,    HITEC City, Madhapur, Hyderabad - 500081, Telangana, INDIA</li>
                                    <li><b>Phone:</b> +91 830 972 0696</li>
                                    <li className="d-flex">
                                        <div>
                                          <b>Email: </b>
                                        </div>
                                        <div>
                                           <Link> webingate@yandex.com</Link> <br/>
                                           <Link> webingate@gmail.com</Link>
                                        </div>
                                        </li>
                                </ul>

                                <div className="pt-4">
                                    <h5>Business Hours</h5>
                                    <ul>
                                        <li><i class="ri-time-line"></i> Monday - Friday - 9am to 5pm</li>
                                        <li><i class="ri-time-line"></i> Saturday - 9am to 2pm</li>
                                        <li><i class="ri-time-line"></i> Sunday - Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default Contact;