"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets:["latin"] });

const InternationalArtistLineupLightbox = () => {
  const [ElementId, setElementId] = useState("0");
  return (
    <>
      <section className=" px-4   pt-14 md:px-6 lg:px-14  lg:pt-16">
        <h3 className={`text-4xl ${poppinsBold.className} font-black -tracking-tighter text-[#DF9627] lg:px-10  lg:text-[2.5rem] `}>
          International Artist
        </h3>
        <hr className="mb-4 mt-2 border-b-[1px]  border-[#DF9627] lg:mx-10 lg:mb-7 lg:mt-3 " />
        {/* ---------------international artist section------------------------ */}
        <section
          onClick={(e) =>
            (e.target as HTMLElement).id !== "0"
              ? setElementId((e.target as HTMLElement).id)
              : setElementId("0")
          }
          className=" grid grid-cols-3 gap-3 text-[#4b4b4b] lg:gap-y-5  "
          id="0"
        >
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/InterArtist1.jpg"
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
              Antoni & Belen
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2" id="0">
            <Image
              src="/InterArtist2.jpg"
              className="mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 2"
              id="2"
            />
            <h5
              id="0"
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
            >
              David E Ines
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2">
            <Image
              src="/InterArtist3.jpg"
              className="mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 2"
              id="3"
            />
            <h5
              id="0"
              className="text-center lg:text-xl text-sm md:text-base md:font-semibold"
            >
              Irine Likokeli
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2">
            <Image
              src="/InterArtist4.jpg"
              className="mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 2"
              id="4"
            />
            <h5
              id="0"
              className="text-center lg:text-xl text-sm md:text-base md:font-semibold"
            >
              Julio Rojas & Wualexa Gonzalez
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2">
            <Image
              src="/InterArtist5.jpg"
              className="mx-auto duration-500 hover:opacity-60 lg:w-80"
              width={500}
              height={500}
              alt="Royal Orchid Photo 2"
              id="5"
            />
            <h5
              id="0"
              className="text-center lg:text-xl  text-sm md:text-base md:font-semibold"
            >
              Nuno and Nagyla
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
          src={`/InterArtist${ElementId}.jpg`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[50rem]"
          width={800}
          height={800}
          alt={`Artist Image ${ElementId}`}
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

export default InternationalArtistLineupLightbox;
