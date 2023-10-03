import Link from "next/link";
import JohnEnthony from "@/components/JohnEnthony";
import ArtistCarousel from "@/components/ArtistCarousel";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="">
        {/* Home Page Hero Bg--------------------------------------------------- */}
        <section className="bg-[#00000048] bg-HomePageHero bg-cover bg-repeat-y bg-blend-multiply  md:h-[100dvh] lg:h-fit ">
          <section className="pt-28 md:pt-52 lg:mx-auto  lg:w-[70rem] lg:pt-36">
            <h3 className="mb-1  text-center text-[.79rem] -tracking-tighter  text-white lg:mb-2 lg:text-start lg:text-xs lg:font-semibold ">
              A JOHN ANTHONY&apos;S PRODUCTION
            </h3>
            <hr className="mx-auto w-24 lg:mx-0 lg:w-8 lg:border-b-2" />
            <h1
              className={`mt-4 ${poppinsBold.className} px-1 text-center text-[2.5rem]  font-black leading-[2.8rem] -tracking-tight text-white lg:mt-3 lg:text-start  lg:text-[5rem] lg:leading-[5.2rem] `}
            >
              {" "}
              India <br className="lg:hidden" /> International{" "}
              <br className="sm:hidden lg:block" /> Dance{" "}
              <br className="lg:hidden" /> Congress (IIDC) <br />{" "}
              <div className="mt-2 inline-block text-[#DF9627]"> IS BACK!</div>
            </h1>
            <Link
              href={"/"}
              className="group mx-auto mt-4 flex w-40 items-center justify-center rounded-full bg-black py-3 font-semibold -tracking-tight   text-white duration-700  hover:bg-[#DF9627] lg:mx-0 lg:mt-6   lg:w-44 lg:py-[.80rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-0 translate-x-[40%] rotate-45  fill-white transition-all duration-500  group-hover:mr-1 group-hover:w-fit group-hover:-translate-x-0 "
                width="24"
                height="24"
              >
                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>{" "}
              <h6> LEARN MORE</h6>
            </Link>
          </section>
          {/* dates location and ticktes in hero section------------------------ */}
          <section className="mt-10 grid gap-10 fill-white pb-14 text-[#DF9627] lg:mx-auto lg:mt-20 lg:w-[70rem] lg:grid-flow-col lg:gap-0">
            {/* 1 */}
            <section className="">
              <h3 className=" flex items-center justify-center gap-2 text-2xl font-semibold lg:justify-normal lg:-tracking-tighter">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                </svg>
                EVENT DATES
              </h3>
              <h5 className="mt-1 text-center text-lg text-white  lg:ml-1 lg:mt-2 lg:text-start lg:-tracking-tighter">
                17-19 May, 2024
              </h5>
            </section>
            {/* 2 */}
            <section className="">
              <h3 className=" flex items-center justify-center gap-2 text-2xl  font-semibold lg:justify-start lg:-tracking-tighter">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-[1.32rem] fill-white lg:w-[1.6rem]"
                  viewBox="0 0 395.71 395.71"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                    />
                  </g>
                </svg>
                LOCATION
              </h3>
              <p className="mt-1 px-6 text-center text-lg text-white lg:ml-1 lg:mt-2 lg:px-0 lg:text-start lg:-tracking-tighter">
                Hotel Royal Orchid, <br /> Indiranagar Old Airport Road,
                <br className="hidden lg:block" />
                Bengaluru
              </p>
            </section>
            {/* 3 */}
            <section className="">
              <h3 className=" flex items-center justify-center gap-2 text-2xl font-semibold lg:justify-start lg:-tracking-tighter">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7  "
                  viewBox="0 0 24 24"
                  id="ticket"
                >
                  <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
                </svg>{" "}
                TICKETS
              </h3>
              <h5 className="mt-1 text-center text-lg text-white lg:ml-1 lg:mt-2 lg:text-start lg:-tracking-tighter ">
                1200 Available
              </h5>
            </section>
          </section>
        </section>
        {/* Home page main content-------------------------------------------------------*/}
        {/* Book Your Ticket tooday section ---------- */}
        <section className="bg-black px-6 py-16 sm:px-8 md:px-12 ">
          <section className="lg:mx-auto lg:w-[70rem]">
            <h3
              className={`text-3xl font-semibold -tracking-tighter text-[#DF9627] md:text-4xl ${poppinsBold.className}`}
            >
              Book your tickets today!
            </h3>
            <hr className="mb-3 mt-2 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem]  lg:mb-4  lg:mt-3 lg:w-[40rem]  " />
            <p className="text-white lg:pr-40 lg:text-[1.06rem]">
              IIDC brings in some of the best international artists in the world
              of Latin dance. These artists are renowned for their skills and
              expertise in various Latin dance styles, providing participants
              with the opportunity to learn from the very best. Buy tickets
              today to enjoy early bird discount!
            </p>

            <Link
              href={"/buy-tickets-iidc"}
              className="group mt-5 flex w-40 items-center justify-center gap-1 rounded-md border-2 border-[#DF9627] py-3 transition-all duration-700 hover:bg-[#DF9627]  lg:mt-7 "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 fill-[#DF9627] transition-all duration-700  group-hover:fill-white"
                viewBox="0 0 24 24"
                id="ticket"
              >
                <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
              </svg>{" "}
              <h5 className="text-base text-[#DF9627] transition-all  duration-700 group-hover:text-white">
                BUY TICKETS
              </h5>{" "}
            </Link>
          </section>
        </section>
        {/* Video Section ------------------------------------------------------- */}
        <section className="bg-[#00000048] bg-HomePageVideoSectionBg  bg-cover bg-fixed bg-center bg-repeat-y py-16 bg-blend-multiply  ">
          <section className="lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-10 lg:px-0 lg:py-20 lg:w-[70rem] lg:mx-auto">
            <iframe
              title="vimeo-player"
              className="mx-auto lg:mx-0 h-[30rem] w-[17rem] sm:h-[40rem] sm:w-[24rem] lg:ml-0"
              src="https://player.vimeo.com/video/865870988?h=d262b75099"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <section className="mt-10 px-6 sm:px-8 md:px-12 lg:col-span-2 lg:ml-10 lg:mt-0 lg:px-0 lg:pr-0">
              <h3
                className={`text-3xl font-semibold -tracking-tighter text-[#DF9627] lg:text-4xl lg:font-bold ${poppinsBold.className}`}
              >
                India International Dance <br className="hidden lg:block" />{" "}
                Congress -
                <br className="hidden md:block lg:hidden" /> 09th Edition
              </h3>
              <hr className="mb-3 mt-2 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem]  lg:mb-5  lg:mt-3  lg:w-[24rem]  " />
              <p className="text-white  lg:text-[1.06rem]">
                The India International Dance Congress (IIDC) is a celebrated
                annual gathering that pulsates with the vibrant rhythms of Latin
                dance. This electrifying event has firmly established itself as
                a cornerstone of the Indian dance community, drawing dancers and
                enthusiasts from across the nation and around the world. With
                each passing year, IIDC continues to raise the bar in the realm
                of Latin dance, offering an unparalleled platform for learning,
                networking, and celebrating the passion for dance.
              </p>
              <p className="mt-3 text-white lg:mt-4  lg:text-[1.06rem]">
                Whether you&apos;re an aspiring dancer looking to refine your
                skills, a seasoned professional seeking inspiration, or simply
                someone who loves to move to the beat, IIDC promises an
                unforgettable experience at the intersection of artistry and
                culture. Explore a world of sultry salsa, passionate bachata,
                and exhilarating merengue as IIDC transports you into the heart
                of the global Latin dance scene.
              </p>
              <Link
                href={"/buy-tickets-iidc"}
                className="group mt-5 flex w-40 items-center justify-center gap-1 rounded-md border-2 border-[#DF9627] py-3 transition-all duration-700 hover:bg-[#DF9627]  lg:mt-10 "
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 fill-[#DF9627] transition-all duration-700  group-hover:fill-white"
                  viewBox="0 0 24 24"
                  id="ticket"
                >
                  <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
                </svg>{" "}
                <h5 className="text-base text-[#DF9627] transition-all  duration-700 group-hover:text-white">
                  BUY TICKETS
                </h5>{" "}
              </Link>
            </section>
          </section>
        </section>
        {/* John Enthony section */}
        <JohnEnthony />
        {/* Carousel section*/}
        <section className="bg-[#00000048] bg-EthosBg bg-cover bg-fixed bg-center bg-repeat-y px-6 py-10 bg-blend-multiply sm:px-10 lg:px-32   lg:py-16 ">
          <h3
            className={`${poppinsBold.className} text-center text-4xl font-semibold -tracking-tight text-[#DF9627] md:text-start`}
          >
            Artists Line-up
          </h3>
          <hr className="mb-10 mt-2   border-b-[1px] border-[#DF9627]   lg:mb-4 lg:mt-3  " />
          <ArtistCarousel />
          <Link
            href={"/buy-tickets-iidc"}
            className="group mx-auto  mt-10 flex w-40 items-center justify-center gap-1 rounded-md border-2 border-[#DF9627] py-3 transition-all duration-700  hover:bg-[#DF9627] "
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 fill-[#DF9627] transition-all duration-700  group-hover:fill-white"
              viewBox="0 0 24 24"
              id="ticket"
            >
              <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
            </svg>{" "}
            <h5 className="text-base text-[#DF9627] transition-all  duration-700 group-hover:text-white">
              BUY TICKETS
            </h5>{" "}
          </Link>
        </section>
      </main>
    </>
  );
}
