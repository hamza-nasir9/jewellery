import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../slider/Annoushka.png'
import slide2 from '../slider/Boucheron.png'
import slide3 from '../slider/Cartier.png'
import slide4 from '../slider/Chanel.png'
import slide5 from '../slider//Dior.png'
import slide6 from '../slider/Harry-Winston.png'
import slide7 from '../slider/Kering.png'
import slide8 from '../slider/Pomellato.png'
import slide9 from '../slider/Van-Cleef-&-Arpels.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

import { Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
       
        className="mySwiper my-10"
       
        modules={[Autoplay, ]}
      >
        <SwiperSlide><img src={slide1} alt="" /> </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
