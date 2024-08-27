// src/components/Slider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; // Correct import for Swiper 8.x
import "swiper/modules/navigation/navigation.min.css"; // Import navigation module styles if using navigation

import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]} // Import modules you need
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enable navigation
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
