import React from 'react';
import { SwiperSlide } from 'swiper/react';

export default function LookBookSlide({ index }: { index: number }) {
  return <SwiperSlide>{index}</SwiperSlide>;
}
