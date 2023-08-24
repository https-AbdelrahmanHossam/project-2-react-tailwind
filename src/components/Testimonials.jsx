import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Person1 from "../assets/person_1.jpg.webp";
import Person2 from "../assets/person_2.jpg.webp";
import Person3 from "../assets/person_3.jpg.webp";
import Cards from "./Cards";

const Testimonials = () => {
  return (
    <div className="p-0 mt-32 ">
      <div className="pt-24 mb-16 text-center">
        <span className="inline-block px-5 py-1 text-[#FBB244] bg-[#fbb24433] rounded-full text-[10px] font-bold">
          TESTIMONIALS
        </span>
        <h1 className="mb-3 text-[30px] md:text-[40px] font-mont font-bold text-[#081158]">
          Testimonials
        </h1>
        <p className="mb-9 text-sm text-gray-400 font-thin lg:w-[65%] mx-auto">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        freeMode={true}
        navigation
        pagination
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <Cards imgSrc={Person1} />
        </SwiperSlide>
        <SwiperSlide>
          <Cards imgSrc={Person2} />
        </SwiperSlide>
        <SwiperSlide>
          <Cards imgSrc={Person3} />
        </SwiperSlide>
        <SwiperSlide>
          <Cards imgSrc={Person1} />
        </SwiperSlide>
        <SwiperSlide>
          <Cards imgSrc={Person2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
  // bg color #f8f9fa
};

export default Testimonials;
