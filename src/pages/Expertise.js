import React, {useEffect} from "react";
import '../styles/expertise.css';
import { Container, Row, Col } from "reactstrap";

import dev01 from '../assets/images/dev06.jpg';
import dev02 from '../assets/images/dev07.jpg';
import dev03 from '../assets/images/dev08.jpg';
import dev04 from '../assets/images/dev09.jpg';
import dev05 from '../assets/images/dev10.jpg';
import dev06 from '../assets/images/dev11.jpg';
import ScrollButton from "../components/UI/ScrollButton";

const Expertise = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="expertise">
            <ScrollButton />
            <section className="expertise_title">
                  <h2 className="text-center py-5">OUR EXPERTISE</h2>
            </section>

            <section className="expertise_b">
                <Container>
                {/* <h2 className="heading">We Expertise In</h2> */}
                  <div className="py-4">
                     <h2 className="heading">We Expertise In</h2>
                  </div>

                <p className="para">Webingate drives innovation through our many service offerings. We can execute and staff advanced technology initiatives with qualified candidates. Whether you’re looking for a full team to complete a project or you don’t know which project to start next for your digital transformation - we can help.</p>
                <Row>
                    <Col lg='4' className="py-4">
                        <ul className="expertise_list">
                            <li><i className="ri-arrow-right-double-line"></i> Project Development</li>
                            <li><i className="ri-arrow-right-double-line"></i>Mobile Apps Development</li>
                            <li><i className="ri-arrow-right-double-line"></i>Web Hosting & Development</li>
                        </ul>
                    </Col>
                    <Col lg='4' className="py-4">
                        <ul className="expertise_list">
                            <li><i className="ri-arrow-right-double-line"></i> Product Design & Development</li>
                            <li><i className="ri-arrow-right-double-line"></i>Firmware Development</li>
                            <li><i className="ri-arrow-right-double-line"></i>EAI Solutions</li>
                        </ul>
                    </Col>
                    <Col lg='4' className="py-4">
                        <ul className="expertise_list">
                            <li><i className="ri-arrow-right-double-line"></i> Big Date and DataScience</li>
                            <li><i className="ri-arrow-right-double-line"></i>Training and Staffing</li>
                            <li><i className="ri-arrow-right-double-line"></i>ERP Solutions</li>
                        </ul>
                    </Col>
                </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev01} className="w-100" alt="img" />
                            </div>
                        </Col>
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>Project Development</h3>
                                 <p className="para">
                                 Project Development is the systematic use of resources, knowledge and practices to design and implement a given project and meet its goals and objectives under specific requirements. It is also defined as the process of transforming available project inputs into desired outputs by consuming available resources.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> END-TO-END CLIENT-SERVER, WEB BASED, MIDDLEWARE, CLIENT SIDE SOLUTIONS DEVELOPMENT</li>
                                    <li><i className="ri-arrow-right-s-line"></i> .NET, JAVA, NODEJS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> SQL AND NO-SQL SOLUTIONS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> IOT SOLUTIONS</li>
                                 </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>Mobile Apps Development</h3>
                                 <p className="para">
                                 Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> ANDROID & IOS APPS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> FLUTTER APPS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> PLAYSTORE PUBLISHING</li>
                                    <li><i className="ri-arrow-right-s-line"></i> APPLE STORE PUBLISHING</li>
                                    <li><i className="ri-arrow-right-s-line"></i> APPS DESIGNING AND DEVELOPMENT</li>
                                    <li><i className="ri-arrow-right-s-line"></i> ADMIN PROTALS & APP THEMES DEVELOPMENT</li>
                                 </ul>
                            </div>
                        </Col>
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev02} className="w-100" alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev03} className="w-100" alt="img" />
                            </div>
                        </Col>
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>Web Hosting & Development</h3>
                                 <p className="para">
                                 Project Development is the systematic use of resources, knowledge and practices to design and implement a given project and meet its goals and objectives under specific requirements. It is also defined as the process of transforming available project inputs into desired outputs by consuming available resources.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> WEBSITE DESIGN & DEVELOPMENT</li>
                                    <li><i className="ri-arrow-right-s-line"></i> AZURE & AMAZON CLOUD HOSTING</li>
                                    <li><i className="ri-arrow-right-s-line"></i> WEB HOSTING & DEVELOPOMENT</li>
                                    <li><i className="ri-arrow-right-s-line"></i> HTML5, BOOTSTRAP, MATERIAL DESIGNING</li>
                                    <li><i className="ri-arrow-right-s-line"></i> ANGULARJS, ANGULAR, JQUERY</li>
                                    <li><i className="ri-arrow-right-s-line"></i> JAVA, .NET, WEB API, REST, SOAP SERVICES</li>
                                    <li><i className="ri-arrow-right-s-line"></i> CMS - WORDPRESS, DRUPAL</li>
                                 </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>Product Design & Development</h3>
                                 <p className="para">
                                 Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> SDLC PHASES SERVICES</li>
                                    <li><i className="ri-arrow-right-s-line"></i> SOLUTION / PRODUCT ARCHITECTURE, DESIGN & IMPLEMENTATION</li>
                                    <li><i className="ri-arrow-right-s-line"></i> PRODUCT MAINTAINANCE & TESTING SERVICES</li>
                                 </ul>
                            </div>
                        </Col>
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev04} className="w-100" alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev05} className="w-100" alt="img" />
                            </div>
                        </Col>
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>Firmware Development</h3>
                                 <p className="para">
                                 Project Development is the systematic use of resources, knowledge and practices to design and implement a given project and meet its goals and objectives under specific requirements. It is also defined as the process of transforming available project inputs into desired outputs by consuming available resources.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> EMBEDDED C, FIRMWARE</li>
                                    <li><i className="ri-arrow-right-s-line"></i> DEVICE DRIVERS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> IOT SOLUTIONS & CARD-BASED SOLUTIONS</li>
                                    <li><i className="ri-arrow-right-s-line"></i> PRINTERS, SCANNERS, SENSORS BASED SOLUTIONS</li>
                                 </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="development_b01 pt-5">
                <Container>
                    <Row className="align-items-center">
                        
                        <Col lg='7' className="mb-5">
                            <div className="development_text">
                                 <h3>EAI Solutions</h3>
                                 <p className="para">
                                 Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.
                                 </p>

                                 <ul>
                                    <li><i className="ri-arrow-right-s-line"></i> BIZTALK SERVER, MULESOFT</li>
                                    <li><i className="ri-arrow-right-s-line"></i> WEBSERVICES</li>
                                    <li><i className="ri-arrow-right-s-line"></i> RESTFUL SERVICES</li>
                                    <li><i className="ri-arrow-right-s-line"></i> SAP ARIBA INTEGRATIONS</li>
                                 </ul>
                            </div>
                        </Col>
                        <Col lg='5' className="mb-5">
                            <div className="development_img">
                                <img src={dev06} className="w-100" alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default Expertise;