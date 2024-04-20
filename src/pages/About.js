import React, {useEffect} from "react";
import { Col, Container, Row } from "reactstrap";
import '../styles/about.css';

import aboutus from '../assets/images/about_us.jpg'
import OurTeam from "../components/UI/OurTeam";
import ScrollButton from "../components/UI/ScrollButton";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className="about">
            <ScrollButton />
            <section className="about_title">
                  <h2 className="text-center py-5">About Us</h2>
            </section>

            <section className="about_scn py-5">
                <Container>
                   {/* <h2 className="heading">About Us</h2> */}
                   <div className="pb-4">
                     <h2 className="heading">About Us</h2>
                  </div>
                    <Row className="align-items-center">
                        <Col lg='6' className="mb-5">
                            <div className="about_img">
                                <img src={aboutus} className="w-100" alt="img" />
                            </div>
                        </Col>
                        <Col lg='6' className="mb-5">
                            <div>
                                <h3>About Webingate Solutions</h3>
                                <p className="para">
                                Webingate solutions is a fast growing technology solution provider to the businesses through its innovative and latest technology solutions. It helps to build the latest technology enabled intelligent gateways, to the web, for your businesses.
                                </p>
                                <h3>Who We Are</h3>
                                <p className="para">Webingate solutions team is a group of budding technology professionals passionate to learn, innovate, and keep up-to-date with the latest technology trends. A team of full stack developers with a combined industry experience of 30+ years and experience in developing solutions ranging from web portals, mobile apps, integration solutions, APIs and many more. <br />

                                A flexible, agile and innovative team to help you get the best of the solutions with latest technology trends.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <OurTeam />
        </div>
    )
};

export default About;