"use client";
import Image from "next/image";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

const InternationalArtistLineupLightbox = () => {
  const [ElementId, setElementId] = useState("0");
  return (
    <>
      <section className=" px-4   pt-5 md:px-6 lg:mx-auto  lg:w-[70rem] lg:px-0 ">
        <h3
          className={`lg:text-4xl ${poppinsBold.className} text-[2.1rem] font-black leading-10 -tracking-tighter  text-[#DF9627] lg:px-0`}
        >
          International Artists
        </h3>
        <hr className="mb-4 mt-2 border-b-[1px]  border-[#DF9627] lg:mx-0 lg:mb-7 lg:mt-3 " />
        {/* ---------------international artist section------------------------ */}
        <section
          onClick={(e) =>
            (e.target as HTMLElement).id !== "0"
              ? setElementId((e.target as HTMLElement).id)
              : setElementId("0")
          }
          className="grid grid-cols-3 gap-3 text-[#4b4b4b] lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14"
          id="0"
        >
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/InterMArtist1.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 1"
              id="1"
            />
            <h5
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
              id="0"
            >
              Antonio Y Belen
            </h5>
          </section>
          <section className="grid gap-1 md:gap-2 lg:w-fit" id="0">
            <Image
              src="/InterMArtist2.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="2"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Carlos & Fernanda
            </h5>
          </section>

          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist3.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="3"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-semibold lg:text-xl"
            >
              Nuno and Nagyla
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist4.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="4"
            />
            <h5
              id="0"
              className="text-center text-sm md:text-base md:font-semibold lg:text-xl"
            >
              Ronie Saleh & Frida
            </h5>
          </section>

          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist5.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="5"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              David & Ines
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist6.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="6"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Fadi Fusion & Team
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist7.png"
              className="mx-auto  duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="7"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Julio Rojas & Wualexa Gonzalez
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist8.png"
              className="mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="8"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              NGCO Nam & Bich NGCO
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist9.png"
              className="mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="9"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Adrian
            </h5>
          </section>
          <section id="0" className="grid gap-1 md:gap-2 lg:w-fit">
            <Image
              src="/InterMArtist10.png"
              className="mx-auto duration-500 hover:opacity-60 "
              width={300}
              height={300}
              alt="Royal Orchid Photo 2"
              id="10"
            />
            <h5
              id="0"
              className="text-center text-sm  md:text-base md:font-semibold lg:text-xl"
            >
              Carol Wang
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
              : setElementId("10")
          }
          className="fixed left-1 top-[50%] duration-700  hover:text-[#DF9627] md:left-3 lg:left-20"
        >
          &lt;
        </button>
        <Image
          src={`/InterMArtist${ElementId}.png`}
          className="w-72 rounded-lg sm:w-96 md:w-[36rem] lg:w-[30rem]"
          width={800}
          height={800}
          alt={`Artist Image ${ElementId}`}
        />
        <button
          onClick={() =>
            parseInt(ElementId) < 10
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
