import React from "react";
import '../../styles/ourteam.css';

import team01 from '../../assets/images/ava-1.jpg';
import team02 from '../../assets/images/ava-2.jpg';
import team03 from '../../assets/images/ava-3.jpg';
import team04 from '../../assets/images/ava-4.jpg';
import { Container } from "reactstrap";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const OurTeam = () => {
    return (
        <section className="ourteam pb-5">
            <Container>
              <h2 className="heading">Meet Our Team</h2>

                <div className="swiper__scn">
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="team__body">
                <div className="team__social-icons">
                <ul>
                    <li><a href="" className=""><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-facebook-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className=""><i className="ri-instagram-line"></i></a></li>
                    </ul>
                </div>

                <div className="block__wraping">
                    <img src={team01} className="w-100" alt="team img"/>
                    
                    <div className="team__details">
                        <h4 className="py-2 text-center">Jack</h4>
                        <h6 className="pb-3 text-center mb-0">Designation</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__body">
                <div className="team__social-icons">
                <ul>
                    <li><a href="" className=""><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-facebook-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className=""><i className="ri-instagram-line"></i></a></li>
                    </ul>
                </div>

                <div className="block__wraping">
                    <img src={team02} className="w-100" alt="team img"/>
                    
                    <div className="team__details">
                        <h4 className="py-2 text-center">Sophia</h4>
                        <h6 className="pb-3 text-center mb-0">Designation</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__body">
                <div className="team__social-icons">
                <ul>
                    <li><a href="" className=""><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-facebook-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className=""><i className="ri-instagram-line"></i></a></li>
                    </ul>
                </div>

                <div className="block__wraping">
                    <img src={team03} className="w-100" alt="team img"/>
                    
                    <div className="team__details">
                        <h4 className="py-2 text-center">Thomas</h4>
                        <h6 className="pb-3 text-center mb-0">Designation</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__body">
                <div className="team__social-icons">
                <ul>
                    <li><a href="" className=""><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-facebook-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className=""><i className="ri-instagram-line"></i></a></li>
                    </ul>
                </div>

                <div className="block__wraping">
                    <img src={team04} className="w-100" alt="team img"/>
                    
                    <div className="team__details">
                        <h4 className="py-2 text-center">Emma</h4>
                        <h6 className="pb-3 text-center mb-0">Designation</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team__body">
                <div className="team__social-icons">
                <ul>
                    <li><a href="" className=""><i className="ri-linkedin-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-facebook-line"></i></a></li>
                    <li><a href="" className=""><i className="ri-twitter-fill"></i></a></li>
                    <li><a href="" className=""><i className="ri-instagram-line"></i></a></li>
                    </ul>
                </div>

                <div className="block__wraping">
                    <img src={team02} className="w-100" alt="team img"/>
                    
                    <div className="team__details">
                        <h4 className="py-2 text-center">Sophia</h4>
                        <h6 className="pb-3 text-center mb-0">Designation</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
                </div>
            </Container>
        </section>
    )
};

export default OurTeam;