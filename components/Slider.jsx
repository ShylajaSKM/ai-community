"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 4
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 5
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full aspect-square bg-black text-white flex justify-center items-center">
          Slide 6
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
