'use client';
import React from 'react';
import LookBookSlide from './LookBookSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function LookBookSlider() {
  const item = [1, 2, 3, 4];
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        {item.map(index => {
          return <LookBookSlide index={index} />;
        })}
      </Swiper>
    </div>
  );
}
