import HeroOfAllPages from "@/components/HeroOfAllPages";

const page = () => {
  return (
    <main>
      {/* Terms & Use Hero section ------------------------------------------*/}
      <HeroOfAllPages
        heading="TERMS OF USE"
        content=" Welcome to the Terms of Use page for IIDC - the India International
          Dance Congress. By accessing and using our website, you agree to
          comply with and be bound by the following terms and conditions. If you
          do not agree to these terms, please refrain from using our website."
      />
      {/* terms & use Main content------------------------------------------ */}
      <section className="px-6 pt-10 md:px-10 md:pt-14 lg:px-20 lg:pt-20">
        <h3 className="text-2xl font-semibold -tracking-tighter  text-[#1f1f1f] md:text-3xl lg:pr-40 lg:text-5xl">
          Terms of Use for India International Dance Congress
        </h3>
        <hr className="mb-3 mt-2 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem]  lg:mb-4  lg:mt-3 lg:w-[40rem]  " />
        <h5 className="text-sm text-[#484848] ">Effective Date: 19-09-2023</h5>
      </section>
      {/* Terms and condition condition li and uls section --------------------------- */}
      <section className="px-6 pb-10 pt-7 md:px-10 md:pb-14 lg:grid lg:gap-10 lg:pb-20 lg:pl-20 lg:pr-52  lg:pt-10 ">
        {/* 1 */}
        <section>
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            1. Acceptance of Terms
          </h3>
          <p className="text-[#484848]">
            By accessing and using the India International Dance Congress (IIDC)
            website or participating in IIDC events, you agree to comply with
            and be bound by the following Terms of Use. If you do not agree to
            these terms, please do not use our website or attend our events.
          </p>
        </section>
        {/* 2 */}
        <section className="mt-7 ">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            2. Intellectual Property Rights
          </h3>
          <p className="text-[#484848]">
            All content, materials, and intellectual property, including but not
            limited to logos, trademarks, text, images, videos, and software,
            displayed on the IIDC website and during IIDC events are the
            property of IIDC or its content suppliers and are protected by
            copyright and trademark laws. You may not use, modify, reproduce,
            distribute, or display any of this content without explicit written
            consent from IIDC.
          </p>
        </section>
        {/* 3 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            3. Website and Event Content
          </h3>
          <p className="text-[#484848]">
            IIDC makes every effort to provide accurate and up-to-date
            information on its website and at its events. However, we do not
            guarantee the accuracy, completeness, or reliability of any content.
            The content provided is for informational purposes only and is
            subject to change without notice.
          </p>
        </section>
        {/* 4*/}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            4. Registration and Ticketing
          </h3>
          <p className="text-[#484848]">
            When registering for IIDC events and purchasing tickets, you agree
            to provide accurate and complete information. Tickets may be subject
            to terms and conditions, including refund and cancellation policies,
            which will be communicated at the time of purchase.
          </p>
        </section>
        {/* 5 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            5. User Conduct
          </h3>
          <p className="text-[#484848]">
            You agree to use the IIDC website and attend IIDC events in a manner
            consistent with all applicable laws and regulations. You may not
            engage in any behavior that is harmful, offensive, or disruptive to
            other users or participants.
          </p>
        </section>
        {/* 6 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            6. Privacy
          </h3>
          <p className="text-[#484848]">
            IIDC values your privacy and is committed to protecting your
            personal information. Our Privacy Policy outlines how we collect,
            use, and disclose your information. By using our website and
            attending our events, you consent to our Privacy Policy.
          </p>
        </section>
        {/* 7*/}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            7. Limitation of Liability
          </h3>
          <p className="text-[#484848]">
            IIDC and its affiliates shall not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising
            from your use of the website or participation in IIDC events.
          </p>
        </section>
        {/* 8 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            8. Modifications to Terms
          </h3>
          <p className="text-[#484848]">
            IIDC reserves the right to modify these Terms of Use at any time.
            Any changes will be posted on the website with an updated effective
            date.
          </p>
        </section>
        {/* 9 */}
        <section className="mt-7 ">
          <h3 className="mb-1 text-lg  font-semibold -tracking-tight text-[#777777]">
            9. Contact Information
          </h3>
          <p className="text-[#484848]">
            If you have any questions or concerns regarding these Terms of Use,
            please contact us at iidc2024@gmail.com. By accessing and using the
            IIDC website or participating in IIDC events, you acknowledge that
            you have read, understood, and agreed to these Terms of Use.
          </p>
        </section>
      </section>
    </main>
  );
};

export default page;
