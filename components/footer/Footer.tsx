import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#F8F9FA] lg:py-20">
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        <section className="lg:mx-auto lg:grid lg:w-[70rem] lg:grid-flow-col lg:gap-14 lg:px-0">
          {/* IIDC*/}
          <section className="px-6 md:px-12 lg:order-1 lg:col-span-1 lg:px-0">
            <h3 className="text-[.94rem] font-semibold -tracking-tighter text-[#484848] md:text-base">
              INDIA INTERNATIONAL DANCE CONGRESS (IIDC)
            </h3>

            <p className="mt-3 text-[#545353] md:text-[1.1rem] ">
              IIDC stands as a testament to the power of dance to unite,
              inspire, and transform. Join us for an unforgettable journey into
              the world of Latin dance, where rhythm and passion come alive.
              Whether you&apos;re a seasoned dancer or a curious beginner, IIDC
              welcomes all to be part of this extraordinary celebration of
              movement and music. Come, dance with us, and be part of the IIDC
              family.
            </p>
            <Link
              href={"https://iidc.co.in/buy-tickets-iidc"}
              className="group mt-4 flex w-fit items-center justify-center gap-2 rounded-md border-2 border-[#040404] bg-[#040404] px-5 py-3 transition-all duration-700 hover:border-[#DF9627] hover:bg-[#DF9627]  md:mt-6 "
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6  fill-white transition-all  duration-700"
                viewBox="0 0 24 24"
                id="ticket"
              >
                <path d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"></path>
              </svg>{" "}
              <h4 className="text-base font-semibold  text-white  transition-all duration-700">
                PURCHASE NOW
              </h4>
            </Link>
          </section>
          <br className="lg:hidden" />
          {/* container of discover and legal */}
          <section className="sm:my-1 sm:grid sm:grid-flow-col lg:order-2 lg:col-span-2 lg:my-0 lg:gap-14">
            {/* DISCOVER */}
            <section className="mt-2 px-6 text-[#484848] md:mt-3 md:px-12 lg:mt-0 lg:px-0">
              <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
                DISCOVER
              </h3>
              <ul className="mt-1 grid gap-1 md:mt-[.27rem]">
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/about-iidc"}>About IIDC</Link>
                </li>
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/about-iidc#johnAnthony"}>
                    About John Anthony
                  </Link>
                </li>
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/iidc-itinerary"}>
                    Event Itinerary
                  </Link>
                </li>
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/artist-lineup-iidc"}>
                    {" "}
                    Artist Line-up
                  </Link>
                </li>

                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/workshops"}> Workshops</Link>
                </li>
              </ul>
            </section>
            <br className="lg:hidden" />
            {/* LEGAL */}
            <section className="mt-1 px-6 text-[#484848] md:mt-2 md:px-12 lg:mt-0 lg:px-0">
              <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
                LEGAL
              </h3>
              <ul className="mt-1 grid gap-1 md:mt-[.27rem]">
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  <Link href={"https://iidc.co.in/terms-of-use-iidc"}>
                    Terms of Use
                  </Link>
                </li>
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  {" "}
                  <Link href={"https://iidc.co.in/privacy-policy-iidc"}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="w-fit duration-500 hover:text-[#DF9627]">
                  {" "}
                  <Link href={"https://iidc.co.in/disclaimer-iidc"}>
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </section>
          </section>

          <br className="lg:hidden" />
          {/* Powered By */}
          <section className="mt-1 px-6 text-[#484848] md:mt-2 md:px-12 lg:order-3 lg:col-span-1 lg:mt-0 lg:px-0">
            <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
              WEBSITE POWERED BY
            </h3>
            <a href="https://www.obiikriationz.com/">
              <Image
                src="/Obiikriationz-web-llp-logo.png"
                alt="Obii Kriationz Logo"
                width={200}
                height={200}
                className="mt-2 w-44"
              />
            </a>
          </section>
          <br className="lg:hidden" />
        </section>
      </footer>
      <section className="bg-[#EFF1F4] px-4  py-6  text-center text-[.89rem]  md:px-10 md:py-8 lg:order-last lg:col-span-3">
        <p>
          © 2023 India International Dance Congress All Rights Reserved.
          Powered By{" "}
          <a
            href="https://www.obiikriationz.com/"
            className="transition-all duration-700 hover:text-[#DF9627]"
          >
            Obii Kriationz Web LLP
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer;
