import Image from "next/image";
import styles from "../../../styles/components/topSlider.module.css";
// swiper
// オプションをインポートする
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/topSlider/dummy.jpg",
  "/topSlider/dummy.jpg",
  "/topSlider/dummy.jpg",
  "/topSlider/dummy.jpg",
];

export default function TopSlider() {
  // slider
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // 1024: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    // },
  };
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      // breakpoints={slideSettings}
      // slidesPerView={"auto"}
      // centeredSlides={true}
      effect={"fade"}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className={styles.topSlider}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            width={2000}
            height={800}
            alt="Slider Image"
            loading="eager"
            className={styles.topSlider__img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
