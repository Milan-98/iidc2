import HeroOfAllPages from "@/components/HeroOfAllPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IIDC Disclaimer - Terms & Conditions for India International Dance Congress",
  description:
    "Read the IIDC Disclaimer for terms and conditions governing your use of our website and participation in events. Stay informed and dance responsibly.",
  keywords: [
    "IIDC Disclaimer",
    "Dance Congress Terms",
    "Website Terms & Conditions",
    "Event Participation Rules",
    "Dance Responsibility",
  ],
  
};

const page = () => {
  return (
    <main>
      {/*  Disclaimer Hero section ------------------------------------------*/}
      <HeroOfAllPages
        heading={"DISCLAIMER"}
        content={` Welcome to the Disclaimer page for IIDC - the India International
          Dance Congress. This Disclaimer outlines the terms and conditions
          governing your use of our website. By accessing and using our website,
          you agree to the terms described in this Disclaimer.`}
      />

      {/* Priavcy Policy Head content------------------------------------------ */}
      <section className="px-6 pt-10 md:px-10 md:pt-14 lg:mx-auto lg:w-[70rem] lg:px-0 lg:pt-20 ">
        <h1 className="text-2xl font-semibold -tracking-tighter  text-[#1f1f1f] md:text-3xl lg:pr-40 lg:text-5xl">
          Disclaimer for India International Dance Congress
        </h1>
        <hr className="mb-3 mt-2 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem]  lg:mb-4  lg:mt-3 lg:w-[40rem]  " />
        <h5 className="text-sm text-[#484848] ">Effective Date: 19-09-2023</h5>
      </section>
      {/* privacy policy ul' li's content------------------------------ */}
      <section className="px-6  pb-10 pt-7 md:px-10 md:pb-14 lg:mx-auto lg:grid  lg:w-[70rem]   lg:gap-10 lg:pb-24 lg:pl-0 lg:pr-0 lg:pt-12 ">
        {/* 1 */}
        <section>
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            1. No Professional Advice
          </h3>
          <p className="text-[#484848]">
            The India International Dance Congress (IIDC) website and events are
            provided for informational and entertainment purposes only. The
            content on our website, including articles, videos, and other
            materials, is not intended to constitute professional advice,
            whether related to dance, health, legal matters, or any other
            subject. Users of our website and attendees of IIDC events should
            not rely solely on the information provided and should seek
            appropriate professional advice when necessary.
          </p>
        </section>
        {/* 2 */}
        <section className="mt-7  ">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            2. Accuracy of Information
          </h3>
          <p className="mt-2 text-[#484848]">
            While we strive to provide accurate and up-to-date information, IIDC
            makes no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability,
            or availability of the information, products, services, or related
            graphics contained on our website or provided during our events. Any
            reliance you place on such information is strictly at your own risk.
          </p>
        </section>
        {/* 3 */}
        <section className="mt-7 ">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            3. Third-Party Links
          </h3>
          <p className="mt-2 text-[#484848]">
            Our website and event materials may contain links to third-party
            websites, which are provided for convenience and information
            purposes only. IIDC has no control over the content, nature, or
            availability of these websites. The inclusion of any links does not
            necessarily imply a recommendation or endorsement of the views
            expressed within them.
          </p>
        </section>
        {/* 4*/}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            4. Limitation of Liability
          </h3>
          <p className="text-[#484848]">
            In no event will IIDC, its organizers, affiliates, or
            representatives be liable for any loss or damage, including without
            limitation indirect or consequential loss or damage, or any loss or
            damage whatsoever arising from loss of data or profits arising out
            of, or in connection with, the use of our website or participation
            in IIDC events.
          </p>
        </section>
        {/* 5 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            5. Changes to Disclaimer
          </h3>
          <p className="text-[#484848]">
            We reserve the right to amend or update this disclaimer to reflect
            changes in our services, the law, or regulations. Any such changes
            will be posted on our website.
          </p>
        </section>
      </section>
    </main>
  );
};

export default page;
