import Product from "../Product/Product";
import ProductImg from '../../../../assets/product.png';
import './slider.css'

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Autoplay } from 'swiper';

import 'swiper/css/bundle';

// Import Swiper styles
import 'swiper/css';

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation,Autoplay]}
      slidesPerView={4}
      navigation={{clickable:true}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        360: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1150: {
          slidesPerView: 4
        }
      }}
    >
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>
      <SwiperSlide><Product img={ProductImg} /></SwiperSlide>

    </Swiper>
  );
}

export default Slider;

