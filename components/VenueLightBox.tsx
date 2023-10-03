"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

const VenueLightBox = () => {
  const [ElementId, setElementId] = useState("0");
  return (
    <>
      <section className="bg-black px-4 pb-14  pt-10 md:px-6 lg:px-0 lg:pb-20  lg:pt-16">
        <section className="lg:mx-auto lg:w-[70rem] ">
          <h3
            className={`text-4xl font-black text-[#DF9627] lg:text-4xl ${poppinsBold.className} `}
          >
            Venue Snaps
          </h3>
          <hr className="mb-4  mt-2  border-b-[1px] border-[#DF9627] lg:mb-8 lg:mt-4  " />
          <section
            onClick={(e) =>
              (e.target as HTMLElement).id !== "0"
                ? setElementId((e.target as HTMLElement).id)
                : setElementId("0")
            }
            className="grid-row-4 grid grid-cols-3 gap-3 lg:grid-cols-4   "
            id="0"
          >
            <Image
              src="/venue-1.jpg"
              className=" duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 1"
              id="1"
            />
            <Image
              src="/venue-2.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 2"
              id="2"
            />
            <Image
              src="/venue-3.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 3"
              id="3"
            />
            <Image
              src="/venue-4.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 4"
              id="4"
            />
            <Image
              src="/venue-5.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 5"
              id="5"
            />
            <Image
              src="/venue-6.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 6"
              id="6"
            />
            <Image
              src="/venue-7.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 7"
              id="7"
            />
            <Image
              src="/venue-8.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 8"
              id="8"
            />
            <Image
              src="/venue-9.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 9"
              id="9"
            />
            <Image
              src="/venue-10.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 10"
              id="10"
            />
            <Image
              src="/venue-11.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 11"
              id="11"
            />
            <Image
              src="/venue-12.jpg"
              className="duration-500 hover:opacity-60"
              width={550}
              height={550}
              alt="Royal Orchid Photo 12"
              id="12"
            />
          </section>
        </section>
      </section>
      {/* Lightbox section----------------------------------------------------- */}
      <section
        className={` ${
          ElementId == "0" ? "hidden" : "fixed"
        }  inset-0 z-[999999] grid place-items-center bg-[#000000b4]  text-5xl text-white md:text-6xl`}
      >
        <button
          onClick={() => setElementId("0")}
          className="  fixed right-6 top-5 duration-700 hover:text-[#DF9627] md:right-9 lg:right-24  "
        >
          &times;
        </button>
        <button
          onClick={() =>
            parseInt(ElementId) > 1
              ? setElementId((parseInt(ElementId) - 1).toString())
              : setElementId("12")
          }
          className="fixed left-1 top-[50%] duration-700  hover:text-[#DF9627] md:left-3 lg:left-20"
        >
          &lt;
        </button>
        <Image
          src={`/venue-${ElementId}.jpg`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[50rem]"
          width={800}
          height={800}
          alt={`venue Image ${ElementId}`}
        />
        <button
          onClick={() =>
            parseInt(ElementId) < 12
              ? setElementId((parseInt(ElementId) + 1).toString())
              : setElementId("1")
          }
          className="fixed right-1 top-[50%]  duration-700 hover:text-[#DF9627] md:right-3 lg:right-20"
        >
          {" "}
          &gt;
        </button>
      </section>
    </>
  );
};

export default VenueLightBox;
