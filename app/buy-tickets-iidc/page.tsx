import HeroOfAllPages from "@/components/HeroOfAllPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IIDC Tickets - Buy Passes for India International Dance Congress",
  description:
    "Secure your spot at IIDC, the ultimate celebration of Latin dance! Explore ticket options tailored to your experience, whether you're a dancer or enthusiast.",
  keywords: [
    "IIDC Tickets",
    "Buy IIDC Passes",
    "Dance Congress Tickets",
    "Latin Dance Enthusiast Passes",
    "Dance Event Tickets",
  ],
};

const page = () => {
  return (
    <main>
      {/* Tickets Hero section ------------------------------------------*/}
      <HeroOfAllPages
        heading="BUY TICKETS"
        content=" Welcome to the gateway of excitement! The Buy Tickets page is your
          access point to an unforgettable experience at the India International
          Dance Congress (IIDC). Explore our ticket options and packages
          tailored to suit your preferences, whether you're a dance
          enthusiast, performer, or simply seeking to revel in the joy of dance.
          Secure your place at this extraordinary event - the journey begins
          here!"
      />
      {/* Tickets scanner and payment gateway section----------------------- --*/}
      {/* container of scanner and text */}
      <section className="px-6 py-10 md:py-14 lg:py-20">
        {/* container of scanner */}
        <section className="lg:mx-auto lg:grid lg:w-[70rem] lg:grid-flow-col lg:grid-cols-2 ">
          <section className="lg:grid lg:place-items-center">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto w-60 lg:w-72"
                viewBox="0 0 39 39"
              >
                <path d="M1 1h7v7h-7zM9 1h1v1h-1zM12 1h2v1h1v1h-2v-1h-1zM16 1h2v1h-2zM20 1h2v1h-1v1h-2v-1h1zM26 1h1v1h-1zM28 1h2v1h-2zM31 1h7v7h-7zM2 2v5h5v-5zM10 2h2v2h4v1h-5v2h-1v1h1v1h-1v2h-2v-1h-1v-1h2v-5h2v-1h-1zM27 2h1v1h-1zM32 2v5h5v-5zM3 3h3v3h-3zM17 3h2v1h-2zM22 3h3v1h-3zM33 3h3v3h-3zM19 4h1v1h1v2h-1v-1h-1v1h-1v-2h1zM25 4h2v1h-2zM22 5h1v1h-1zM24 5h1v1h-1zM27 5h1v4h1v1h1v-1h5v1h1v2h1v1h-2v-2h-1v1h-1v-1h-1v-1h-1v1h1v1h-2v-1h-1v1h-3v-2h1v-3h-1v3h-3v-1h2v-3h2zM29 5h1v1h-1zM12 6h1v1h-1zM14 6h3v1h-1v2h-2v-1h1v-1h-1zM11 7h1v1h-1zM13 7h1v1h-1zM17 7h1v1h-1zM19 7h1v1h-1zM21 7h1v1h-1zM23 7h1v1h-1zM29 7h1v1h-1zM12 8h1v1h-1zM22 8h1v1h-1zM1 9h1v1h2v1h-1v1h1v-1h1v4h1v-3h1v1h1v1h-1v1h1v-1h1v2h-3v2h-1v1h-1v1h1v1h-4v-4h4v-1h-2v-1h1v-1h-2v-3h-1zM5 9h1v1h1v1h-2zM13 9h1v1h-1zM16 9h2v1h-2zM20 9h2v1h-1v2h2v1h1v1h1v4h2v1h-2v1h-1v2h-2v2h-1v-2h-1v-1h2v-1h1v-1h1v-1h-1v-1h-2v-3h1v1h1v1h1v-1h-1v-1h-1v-1h-3v1h-1v-1h-3v-1h1v-1h1v1h2v-1h-1v-1h2zM37 9h1v1h-1zM11 10h1v1h-1zM14 10h1v1h-1zM22 10h1v1h-1zM7 11h1v1h-1zM10 11h1v1h-1zM24 11h1v2h-1zM9 12h1v1h-1zM11 12h1v1h2v1h3v2h1v-1h1v1h1v2h-1v-1h-2v1h-1v-1h-2v-2h-2v1h1v1h-2v-2h-1v-2h1zM25 13h1v1h-1zM28 13h1v1h-1zM31 13h1v1h-1zM37 13h1v1h-1zM19 14h1v1h-1zM26 14h1v1h-1zM29 14h2v3h1v1h2v1h-1v3h-3v-1h1v-3h-1v-1h-1v1h1v3h-1v1h-1v-4h-1v-3h2v1h1v-1h-1zM33 14h1v1h-1zM35 14h2v2h1v1h-1v2h-2v-1h-1v-2h1zM1 15h1v1h-1zM32 15h1v1h-1zM9 16h1v2h-1zM7 17h1v1h-1zM13 17h1v1h1v1h-2zM6 18h1v1h-1zM8 18h1v1h-1zM10 18h2v1h-1v1h1v-1h1v2h-2v1h-2v-1h-1v-1h1v-1h1zM17 18h2v1h-1v1h-1zM20 18h2v2h-1v-1h-1zM2 19v1h1v-1zM5 19h1v1h-1zM7 19h1v1h-1zM15 19h1v1h-1zM34 19h1v1h-1zM6 20h1v1h1v1h-2v1h2v1h-1v1h-1v-1h-1v-3h1zM14 20h1v1h-1zM18 20h2v1h-1v1h1v2h-1v-1h-2v1h-1v-1h-1v-2h2v1h1zM35 20h1v1h2v1h-2v1h-1zM13 21h1v1h-1zM25 21h1v1h-1zM1 22h2v1h-1v2h-1zM12 22h1v1h-1zM24 22h1v1h1v-1h2v1h-1v1h-1v1h-1v-1h-2v-1h1zM29 22h1v1h-1zM33 22h1v1h-1zM11 23h1v1h2v2h-2v1h-1v-2h-1v-1h1zM14 23h1v1h-1zM28 23h1v3h1v1h1v1h-2v1h-1v1h-1v-2h1v-2h-1v-1h1zM30 23h1v1h-1zM34 23h1v1h2v1h-1v1h1v1h-3v3h1v-2h3v2h-1v1h-3v1h4v3h-1v-1h-1v2h1v1h1v1h-3v-2h-1v-1h1v-2h-1v1h-2v1h1v1h1v1h-3v-2h-1v-1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h2v-1h2v-1h-1v-1h-2v-1h3v1h2v-1h-1zM3 24h1v1h-1zM17 24h1v2h-1zM20 24h1v1h1v1h-1v2h2v1h1v1h-1v1h-1v-2h-3v1h-1v-1h-2v-2h1v1h1v-2h2zM22 24h1v1h-1zM2 25h1v1h-1zM4 25h1v1h-1zM7 25h2v1h-2zM15 25h1v2h-2v-1h1zM24 25h1v1h2v1h-1v3h-1v-1h-1v-1h-1v-1h1zM37 25h1v1h-1zM1 26h1v1h-1zM6 26h1v1h-1zM22 26h1v1h-1zM3 27h1v1h-1zM5 27h1v2h-1zM7 27h4v3h2v-1h1v1h1v1h1v-1h2v1h-1v1h1v-1h1v1h1v2h-1v-1h-2v1h-2v2h-1v-1h-1v2h-1v-1h-1v-1h1v-1h2v-3h-1v1h-1v2h-1v-1h-1v-1h-1v-2h1v-2h-1v2h-2v-1h1v-1h-1zM13 27h1v1h-1zM19 27v1h1v-1zM12 28h1v1h-1zM14 28h1v1h-1zM1 29h2v1h-2zM4 29h1v1h-1zM19 30h1v1h-1zM24 30h1v2h-1zM26 30h1v1h-1zM30 30v3h3v-3zM1 31h7v7h-7zM21 31h1v1h-1zM31 31h1v1h-1zM2 32v5h5v-5zM15 32v1h1v-1zM23 32h1v1h2v5h-4v-2h-1v-1h-1v-1h2v1h1v2h1v-3h-1zM3 33h3v3h-3zM9 33h1v1h-1zM27 33h1v1h1v1h-1v2h-1zM17 34h1v2h-1zM29 35h1v1h-1zM18 36h2v1h-1v1h-1zM9 37h3v1h-3zM13 37h1v1h-1zM15 37h2v1h-2zM20 37h1v1h-1zM28 37h1v1h-1z" />
              </svg>
            </figure>
            <h3 className="mt-3 text-center text-xl font-semibold text-[#1f1f1f] md:mt-4 md:text-2xl">
              Scan the code to pay through UPI
            </h3>
          </section>

          <section className=" mt-14 md:mt-16 lg:mt-0">
            <h2 className="text-4xl font-semibold -tracking-tight text-[#1f1f1f] ">
              IIDC Tickets
            </h2>
            <hr className="mb-3 mt-2 w-56 border-b-[1px] border-[#DF9627] sm:w-[14rem] md:mb-3  md:mt-3 lg:w-[16rem]  lg:text-[1.06rem]" />
            <p className="mt-2">
              Welcome to the IIDC Buy Tickets page, your gateway to an
              extraordinary celebration of Latin dance! Explore a variety of
              ticket options tailored to your experience, whether you&apos;re a
              dance enthusiast, performer, or simply looking to immerse yourself
              in Latin rhythms. Choose from our range of options, secure your
              spot today, and get ready to move to the rhythm of IIDC!
            </p>
            <p className="mt-3 md:mt-4">
              Buy IIDC tickets to access an unforgettable experience filled with
              learning, inspiration, and joy. Learn from international masters,
              forge friendships on the dance floor, and create memories at our
              lively parties. Join the celebration of movement, music, and
              community - get your IIDC tickets today and be part of the global
              Latin dance family!
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default page;
