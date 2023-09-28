import Image from "next/image";
import VenueLightBox from "@/components/VenueLightBox";
import HeroOfAllPages from "@/components/HeroOfAllPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Royal Orchids - The Premier Venue for IIDC - India International Dance Congress",
  description:
    "Discover Royal Orchids - IIDC's premier venue, where dance meets luxury.",
  keywords: [
    "Royal Orchids Venue",
    "IIDC Venue",
    "Dance Congress Venue",
    "Dance Event Venue",
    "Luxury Event Space",
  ],
};

const page = () => {
  return (
    <main>
      {/* About-Venue Hero section --------------------------------------------*/}

      <HeroOfAllPages
        heading="ABOUT VENUE"
        content="India International Dance Congress (IIDC) is hosted at the Royal
          Orchid Hotel in Bangalore offers attendees a luxurious and convenient
          setting for the event. The Royal Orchid Hotel's prestigious
          location and top-notch facilities are sure to enhance the overall
          experience of IIDC participants"
      />
      {/* About Royal Orchid section ----------------------------------------------*/}
      <section className="px-6 pt-10 text-[#484848] lg:grid lg:grid-cols-2  lg:px-24 lg:pb-10 lg:pt-20  ">
        <section>
          <h1 className="text-4xl font-semibold  -tracking-tight text-[#1f1f1f] lg:text-5xl">
            Hotel Royal Orchid
          </h1>
          <hr className="mb-3 mt-2 w-36 border-b-[1px] border-[#DF9627] sm:w-[21.7rem] lg:mb-4 lg:mt-3 lg:w-[24rem]  " />
          <p className="mt-2 lg:text-[1.06rem]">
            Royal Orchid & Regenta Hotels is one of India&apos;s fastest-growing
            hospitality brands, managing a portfolio of over 90+ properties
            across the country. Founded in 2001 by industry veteran Mr. Chander
            K Baljee, Royal Orchid & Regenta Hotels is a renowned and trusted
            brand with a growth plan to reach 100 hotels by 2023.
          </p>

          <p className="mt-4 lg:text-[1.06rem]">
            We cater to business and leisure travellers who value comfort, great
            cuisine, distinctly warm Indian hospitality, and value for money.
            Our modern and fully equipped hotels, resorts, long-stay suites, and
            inns are what make our guests return time and time again to our
            properties in metro cities, holiday destinations, pilgrimage sites
            and wildlife parks. With a Head Office based in the heart of
            Bengaluru, the team at Royal Orchid & Regenta Hotels is truly
            passionate about hospitality and driven to deliver immaculate guest
            experiences. Our success flows from our core values; creating
            exceptional outcomes for our owners, guests, staff, and
            shareholders.
          </p>
          <p className="mt-4 lg:text-[1.06rem]">
            Nestled in the heart of Bangalore, the Royal Orchid Hotel sets the
            stage for an enchanting and unforgettable experience. This
            prestigious venue embodies luxury, sophistication, and warm
            hospitality, making it the ideal setting for hosting exceptional
            events. With its elegant architecture, state-of-the-art facilities,
            and a commitment to excellence, the Royal Orchid Hotel promises to
            elevate any occasion to a level of grandeur and refinement that
            leaves a lasting impression. Whether you&apos;re attending a
            world-class dance congress, a lavish banquet, or a corporate
            conference, the Royal Orchid Hotel in Bangalore provides the perfect
            backdrop for creating cherished memories.
          </p>
        </section>
        <section className="mb-8 mt-7 grid lg:mb-0 lg:gap-0">
          <Image
            src="/iidc-venue-rates.jfif"
            width={450}
            height={450}
            alt="IIDC Venue Rates Image"
            className="mx-auto rounded-t-sm "
          />
          <section className="rounded-b-sm  bg-[#5E2B5E] sm:mx-auto sm:w-[28.13rem]  ">
            <Image
              src="/Venue_logo.png"
              className="mx-auto w-60 py-1 lg:w-96 "
              width={400}
              height={300}
              alt="Hotel Sponsers"
            />
          </section>
          <div className="bg-white lg:h-32"></div>
        </section>
      </section>
      <VenueLightBox />
    </main>
  );
};

export default page;
