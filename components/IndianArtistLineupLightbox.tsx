"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets:["latin"] });
const IndianArtistLineupLightbox = () => {
  const [ElementId, setElementId] = useState("0");

  return (
    <>
      {/* India artist section ------------------------------------------------ */}
      <section className=" px-4  pt-5  md:px-6  lg:px-14">
        <h3 className={`mt-10 text-4xl lg:px-10 font-black lg:text-[2.5rem] -tracking-tighter  text-[#DF9627] ${poppinsBold.className}  `}>
          Indian Artist
        </h3>
        <hr className="mb-4 mt-2  border-b-[1px] lg:mx-10 border-[#DF9627] lg:mb-7 lg:mt-3 " />
        {/*Indian artists image conatiner-------------------------------- */}
        <section
          onClick={(e) =>
            (e.target as HTMLElement).id !== "0"
              ? setElementId((e.target as HTMLElement).id)
              : setElementId("0")
          }
          className=" grid grid-cols-3 gap-3 text-[#4b4b4b] lg:gap-y-5 "
          id="0"
        >
          <section className="grid gap-1" id="0">
            <Image
              src="/IndArtist1.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="1"
            />
            <h5
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
              id="0"
            >
              Brij & Auroshikha
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist2.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="2"
            />
            <h5
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold "
              id="0"
            >
              Gautam
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist3.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="3"
            />
            <h5
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
              id="0"
            >
              Jegatha
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist4.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="4"
            />
            <h5
              id="0"
              className="text-center  lg:text-xl text-sm md:text-base md:font-semibold"
            >
              Raquel & Pratik
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist5.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="5"
            />
            <h5
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
              id="0"
            >
              Nakul Ghanekar
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist6.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="6"
            />
            <h5
              id="0"
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
            >
              Priyanka Kirad
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/IndArtist7.jpg"
              className=" mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 1"
              id="7"
            />
            <h5
              className="  text-center lg:text-xl text-sm  md:text-base md:font-semibold"
              id="0"
            >
              Ravi Rastogi
            </h5>
          </section>
        </section>
      </section>
      {/* Light box section------------------------------------------------ */}
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
              : setElementId("7")
          }
          className="fixed left-1 top-[50%] duration-700  hover:text-[#DF9627] md:left-3 lg:left-20"
        >
          &lt;
        </button>
        <Image
          src={`/IndArtist${ElementId}.jpg`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[50rem]"
          width={800}
          height={800}
          alt={`venue Image ${ElementId}`}
        />
        <button
          onClick={() =>
            parseInt(ElementId) < 7
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

export default IndianArtistLineupLightbox;
