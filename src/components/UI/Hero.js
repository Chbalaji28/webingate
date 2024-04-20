import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../../styles/hero.css';

// Images
import slide01 from '../../assets/images/slide01.jpg';
import slide02 from '../../assets/images/slide02.jpg';
import slide03 from '../../assets/images/slide03.jpg';
import slide04 from '../../assets/images/slide04.jpg';
import slide05 from '../../assets/images/slide05.jpg';
import slide06 from '../../assets/images/slide06.jpg';

const Hero = () => {
    return (
       <div className='hero_carousel'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        speed={1200}
        
        
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        
        navigation={true}
        modules={[ EffectFade, Autoplay, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide01} alt='slider01' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide02} alt='slider02' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide03} alt='slider03' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide04} alt='slider04' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide05} alt='slider05' />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='sliders'>
                <img src={slide06} alt='slider06' />
            </div>
        </SwiperSlide>
      </Swiper>
       </div>
    )
};

export default Hero;