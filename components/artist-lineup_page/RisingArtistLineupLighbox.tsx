"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const RisingArtistLineupLightbox = () => {
  const [ElementId, setElementId] = useState("0");

  return (
    <>
      {/* DJ Section */}
      <section className=" px-4 pb-0 pt-5  md:px-6  lg:mx-auto  lg:w-[70rem] lg:px-0">
        <h3
          className={`mt-10  text-[2.1rem] font-black leading-10  -tracking-tighter text-[#DF9627] lg:px-0 lg:text-4xl ${poppinsBold.className} `}
        >
          Rising Artists
        </h3>
        <hr className="mb-4 mt-2  border-b-[1px] border-[#DF9627] lg:mx-0 lg:mb-7 lg:mt-3 " />

        {/* Image container of DJ's */}
        <section
          onClick={(e) =>
            (e.target as HTMLElement).id !== "0"
              ? setElementId((e.target as HTMLElement).id)
              : setElementId("0")
          }
          className=" grid grid-cols-3 gap-3  text-[#4b4b4b] lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14  "
          id="0"
        >
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/RisingArtist1.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="1"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-bold lg:text-xl"
            >
              Brij & Auroshikha
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2  lg:w-fit">
            <Image
              src="/RisingArtist2.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="2"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-bold lg:text-xl"
            >
              Darryl & Shamaz
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2  lg:w-fit">
            <Image
              src="/RisingArtist3.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="3"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-bold lg:text-xl"
            >
            Irine
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2  lg:w-fit">
            <Image
              src="/RisingArtist4.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="4"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-bold lg:text-xl"
            >
              Nischay Narula
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2  lg:w-fit">
            <Image
              src="/RisingArtist5.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="5"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-bold lg:text-xl"
            >
              Roy
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
              : setElementId("5")
          }
          className="fixed left-1 top-[50%] duration-700  hover:text-[#DF9627] md:left-3 lg:left-20"
        >
          &lt;
        </button>
        <Image
          src={`/RisingArtist${ElementId}.png`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[30rem]"
          width={800}
          height={800}
          alt={`venue Image ${ElementId}`}
        />
        <button
          onClick={() =>
            parseInt(ElementId) < 5
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

export default RisingArtistLineupLightbox;
