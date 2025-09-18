"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img1.png"
            alt="Slide 1"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img2.png"
            alt="Slide 2"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img7.jpg"
            alt="Slide 3"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img4.png"
            alt="Slide 4"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img3.png"
            alt="Slide 5"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[80%] mx-auto rounded-2xl overflow-hidden aspect-square md:aspect-video relative flex justify-center items-center">
          <Image
            src="/images/img6.png"
            alt="Slide 6"
            fill
            className="absolute object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
