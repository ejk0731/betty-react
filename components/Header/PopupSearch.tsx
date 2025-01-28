import React from 'react';
import styles from './PopupSearch.module.scss';
import Icon from '../Icon';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PopupSearch() {
  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.btn_close}>
        <Icon name="close" size={18} />
      </button>
      <div className={styles.input_wrap}>
        <input
          type="text"
          name="search_input"
          id="searchInput"
          className={styles.input_txt}
        />
        <button type="button" className={styles.btn_search}>
          <Icon name="search" size={18} />
        </button>
      </div>
      <div className={styles.keywords_wrap}>
        <Swiper
          spaceBetween={15}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <button type="button">Top</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Skirt</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Jeans</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Blue</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Blazer</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Summer</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Top</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Skirt</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Jeans</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Blue</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Blazer</button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">Summer</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
