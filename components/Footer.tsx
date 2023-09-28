import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#F8F9FA] lg:grid lg:grid-flow-col lg:grid-cols-5 lg:py-16 lg:px-14">
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        {/* IIDC*/}
        <section className="px-6 md:px-12 lg:order-1 lg:col-span-2">
          <h3 className="text-[.94rem] font-semibold -tracking-tighter text-[#484848] md:text-base">
            INDIA INTERNATIONAL DANCE CONGRESS (IIDC)
          </h3>

          <p className="mt-3 text-[#777777] md:text-[1.1rem] ">
            IIDC stands as a testament to the power of dance to unite, inspire,
            and transform. Join us for an unforgettable journey into the world
            of Latin dance, where rhythm and passion come alive. Whether
            you&apos;re a seasoned dancer or a curious beginner, IIDC welcomes
            all to be part of this extraordinary celebration of movement and
            music. Come, dance with us, and be part of the IIDC family.
          </p>
          <Link
            href={"/buy-tickets-iidc"}
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
            <h5 className="text-base font-semibold  text-white  transition-all duration-700">
              PURCHASE NOW
            </h5>
          </Link>
        </section>
        <br className="lg:hidden" />
        <section className="sm:my-1 sm:grid sm:grid-flow-col lg:order-2 lg:col-span-2 lg:my-0">
          {/* DISCOVER */}
          <section className="mt-2 px-6 text-[#484848] md:mt-3 md:px-12 lg:mt-0">
            <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
              DISCOVER
            </h3>
            <ul className="mt-1 grid gap-1 md:mt-[.27rem]">
              <Link
                href={"/about-iidc"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                <li>About IIDC</li>
              </Link>
              <Link
                href={"/about-iidc#johnAnthony"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                <li>About John Anthony</li>
              </Link>
              <Link
                href={"/iidc-itinerary"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                <li>Event Itinerary</li>
              </Link>
              <Link
                href={"/artist-lineup-iidc"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                <li>Artist Line-up</li>
              </Link>

              <Link
                href={"/workshops"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                <li> Workshops</li>
              </Link>
            </ul>
          </section>
          <br className="lg:hidden" />
          {/* LEGAL */}
          <section className="mt-1 px-6 text-[#484848] md:mt-2 md:px-12 lg:mt-0">
            <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
              LEGAL
            </h3>
            <ul className="mt-1 grid gap-1 md:mt-[.27rem]">
              <Link
                href={"/terms-of-use-iidc"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                {" "}
                <li>Terms of Use</li>
              </Link>
              <Link
                href={"/privacy-policy-iidc"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                {" "}
                <li>Privacy Policy</li>
              </Link>
              <Link
                href={"/disclaimer-iidc"}
                className="w-fit duration-500 hover:text-[#DF9627]"
              >
                {" "}
                <li>Disclaimer</li>
              </Link>
            </ul>
          </section>
        </section>

        <br className="lg:hidden" />
        {/* Powered By */}
        <section className="mt-1 px-6 text-[#484848] md:mt-2 md:px-12 lg:order-3 lg:col-span-1 lg:mt-0">
          <h3 className=" text-[.94rem] font-semibold -tracking-tighter md:text-base ">
            WEBSITE POWERED BY
          </h3>
          <a href="https://www.obiikriationz.com/">
            <Image
              src="/Obiikriationz-web-llp-logo.png"
              alt="Obii Kriationz Logo"
              width={200}
              height={200}
              className="mt-2 md:w-64"
            />
          </a>
        </section>
        <br className="lg:hidden" />
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