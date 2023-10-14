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
          spaceBetween={1}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          zoom={true}
          navigation
        >
           <SwiperSlide>
            <Image
              src={"/InterArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist11.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist12.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist13.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/EmergingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist5.png"}
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
          spaceBetween={1}
          slidesPerView={3}
          autoplay={{ delay: 1000 }}
          zoom={true}
          navigation
        >
           <SwiperSlide>
            <Image
              src={"/InterArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist11.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist12.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist13.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/EmergingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist5.png"}
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
              src={"/InterArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/InterArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist5.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist6.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist7.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist8.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist9.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist10.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist11.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist12.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/IndArtist13.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/GuestArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/EmergingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist1.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist2.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist3.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist4.png"}
              alt="First Artist"
              height={400}
              width={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={"/RisingArtist5.png"}
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
