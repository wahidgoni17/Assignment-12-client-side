import Title from "../../../../Component/Title";
import useClasses from "../../../../Hooks/useClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const PopularClasses = () => {
  const [classes] = useClasses();
  const popularclasses = classes.filter(
    (course) => course.numberOfStudents > 50
  );
  return (
    <>
      <Title
        title={"explore class"}
        subtitle={"Explore Our Exclusive Classes & Learn New Language"}
      ></Title>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-10"
      >
        {popularclasses.map((singleClass) => (
          <SwiperSlide key={singleClass._id}>
            <div className="mx-auto text-center relative">
              <img className="w-[700px] mx-auto" src={singleClass.image} alt="" />
              <h1 className="text-2xl -mt-14 text-white font-bold">{singleClass.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularClasses;
