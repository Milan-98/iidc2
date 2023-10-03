"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ArtistCarousel = () => {
  return (
    <>
      <div className="mx-2 select-none sm:mx-40  md:hidden ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          zoom={true}
          navigation
        >
          <SwiperSlide>
            <Image
              src={"/Slider-4.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-2.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-3.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-6.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-5.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-1.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Tablet Section --------------------------------------------- */}
      <div className="hidden select-none md:block lg:hidden">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{ delay: 1000 }}
          zoom={true}
          navigation
        >
          <SwiperSlide>
            <Image
              src={"/Slider-4.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-2.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-3.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-6.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-5.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-1.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Lg section -------------------------------------------------------------------------*/}
      <div className="hidden select-none  lg:block lg:mx-auto lg:w-[70rem]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 1000 }}
          zoom={true}
          navigation
        >
          <SwiperSlide>
            <Image
              src={"/Slider-4.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-2.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-3.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-6.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-5.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/Slider-1.jpg"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ArtistCarousel;
