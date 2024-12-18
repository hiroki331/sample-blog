"use client";

import styles from "@/../styles/components/worksSlider.module.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WorksSlider({ contents }) {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };
  return (
    <div className={styles.worksSliderOuter}>
      <div className={styles.worksSliderFlex}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={slideSettings} // slidesPerViewを指定
          slidesPerView={"auto"} // ハイドレーションエラー対策
          centeredSlides={true} // スライドを中央に配置
          navigation
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={styles.worksSlider}
        >
          {contents.map((work, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={work.img.url} alt={work.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
