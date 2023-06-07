import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../../../assets/english-books-stacks-table-working-space.jpg"
import img2 from "../../../../assets/medium-shot-smiley-teacher-explaining.jpg"
import img3 from "../../../../assets/young-english-teacher-doing-her-class-online.jpg"
import img4 from "../../../../assets/learning-foreign-languages.jpg"
import { Pagination } from "swiper";
const Banner = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="w-full h-[625px]" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-[625px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-[625px]" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full h-[625px]" src={img4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
