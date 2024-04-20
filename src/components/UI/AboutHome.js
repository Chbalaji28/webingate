import React from "react";
import { Col, Container, Row } from "reactstrap";
import abouthome from '../../assets/images/abouthome.jpg';
import '../../styles/abouthome.css';



const AboutHome = () => {
    return (
        <section className="py-5 home_about-scn">
           <Container>
                <div className="pb-4">
                   <h2 className="heading">About Webingate</h2>
                </div>
               <Row>
                   <Col lg='6' >
                      <div className="about_home">
                          {/* <h2 className="heading"></h2> */}

                          <h4>Our top services for IT solutions give you a competitive advantage:</h4>
                          <p className="para">
                          Webingate solutions team is a group of budding technology professionals passionate to learn, innovate, and keep up-to-date with the latest technology trends. A team of full stack developers with a combined industry experience of 30+ years and experience in developing solutions ranging from web portals, mobile apps, integration solutions, APIs and many more.

                          A flexible, agile and innovative team to help you get the best of the solutions with latest technology trends.
                          </p>
                      </div>
                   </Col>
                   <Col lg='6' >
                      <div className="home_about-img">
                         <img src={abouthome} width='100' alt="about" />
                      </div>
                   </Col>
               </Row>
           </Container>
        </section>
    )
};

export default AboutHome;