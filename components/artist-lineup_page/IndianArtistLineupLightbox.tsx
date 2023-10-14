"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const IndianArtistLineupLightbox = () => {
  const [ElementId, setElementId] = useState("0");

  return (
    <>
      {/* India artist section ------------------------------------------------ */}
      <section className=" px-4  pt-5  md:px-6  lg:mx-auto  lg:w-[70rem] lg:px-0 ">
        <h3
          className={`mt-10 text-[2.1rem] leading-10 lg:text-4xl font-black -tracking-tighter text-[#DF9627] lg:px-0  ${poppinsBold.className}  `}
        >
          National Artists
        </h3>
        <hr className="mb-4 mt-2  border-b-[1px] border-[#DF9627] lg:mx-0 lg:mb-7 lg:mt-3 " />
        {/*Indian artists image conatiner-------------------------------- */}
        <section
          onClick={(e) =>
            (e.target as HTMLElement).id !== "0"
              ? setElementId((e.target as HTMLElement).id)
              : setElementId("0")
          }
          className=" grid grid-cols-3 lg:grid-cols-4 gap-3 text-[#4b4b4b]  lg:gap-x-10 lg:gap-y-14"
          id="0"
        >
          <section className="grid gap-1 md:gap-2 lg:w-fit " id="0">
            <Image
              src="/IndArtist1.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="1"
            />
            <h5
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
              id="0"
            >
              Aditya Upadhya
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist2.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="2"
            />
            <h5
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl "
              id="0"
            >
              Aishwarya & Bhushan
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist3.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="3"
            />
            <h5
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
              id="0"
            >
              Awadhesh & Prajakta
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist4.png"
              className=" mx-auto duration-500 hover:opacity-60"
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="4"
            />
            <h5
              id="0"
              className="text-center  text-sm md:text-base md:font-semibold lg:text-xl"
            >
              Gautam Sharma
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist5.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="5"
            />
            <h5
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
              id="0"
            >
              Jegatha Muralidharan
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist6.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="6"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Nakul Ghanekar
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist7.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="7"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Peddro
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist8.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="8"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Priyankka Kirad
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist9.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="9"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Ravi Rastogi
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist10.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="10"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Sameer & Shenny
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist11.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="11"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Sangita Kushwaha 
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist12.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="12"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
             Suumit Arora
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/IndArtist13.png"
              className=" mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="13"
            />
            <h5
              className="  text-center text-sm md:text-base  md:font-semibold lg:text-xl"
              id="0"
            >
              Vinu John
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
              : setElementId("13")
          }
          className="fixed left-1 top-[50%] duration-700  hover:text-[#DF9627] md:left-3 lg:left-20"
        >
          &lt;
        </button>
        <Image
          src={`/IndArtist${ElementId}.png`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[30rem]"
          width={800}
          height={800}
          alt={`venue Image ${ElementId}`}
        />
        <button
          onClick={() =>
            parseInt(ElementId) < 13
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
