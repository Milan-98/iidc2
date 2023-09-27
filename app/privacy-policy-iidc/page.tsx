import HeroOfAllPages from "@/components/HeroOfAllPages";
const page = () => {
  return (
    <main>
      {/* Privacy-Policy Hero section ------------------------------------------*/}
      <HeroOfAllPages
        heading="PRIVACY POLICY"
        content=" Welcome to the Privacy Policy page for IIDC - the India International
          Dance Congress. This Privacy Policy outlines how we collect, use, and
          protect your personal information when you use our website. By
          accessing and using our website, you consent to the practices
          described in this Privacy Policy."
      />
      {/* Priavcy Policy Head content------------------------------------------ */}
      <section className="px-6 pt-10 md:px-10 md:pt-14 lg:px-20 lg:pt-20">
        <h3 className="text-2xl font-semibold -tracking-tighter  text-[#1f1f1f] md:text-3xl lg:pr-40 lg:text-5xl">
          Privacy Policy for India International Dance Congress
        </h3>
        <hr className="mb-3 mt-2 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem]  lg:mb-4  lg:mt-3 lg:w-[40rem]  " />
        <h5 className="text-sm text-[#484848] ">Effective Date: 19-09-2023</h5>
      </section>
      {/* privacy policy ul' li's content------------------------------ */}
      <section className="px-6  pb-10 pt-7 md:px-10 md:pb-14 lg:grid lg:gap-5 lg:pb-20 lg:pl-20 lg:pr-52  lg:pt-10 ">
        {/* 1 */}
        <section>
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            1. Introduction
          </h3>
          <p className="text-[#484848]">
            This Privacy Policy outlines how the India International Dance
            Congress (IIDC) collects, uses, discloses, and protects your
            personal information when you visit our website, participate in our
            events, or engage with our services. We are committed to
            safeguarding your privacy and ensuring the security of your
            information. By using our website or participating in IIDC events,
            you consent to the practices described in this Privacy Policy.
          </p>
        </section>
        {/* 2 */}
        <section className="mt-7 ">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            2. Information We Collect
          </h3>
          <p className="text-[#484848]">
            We may collect various types of personal information, including but
            not limited to:
          </p>
          <p className="mt-2 text-[#484848]">
            Contact information (e.g., name, email address, phone number)
            Demographic information (e.g., age, gender) Payment and billing
            information (when purchasing tickets) Information provided in
            feedback or survey responses Information about your interactions
            with our website (e.g., IP address, browser type, pages visited)
          </p>
        </section>
        {/* 3 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            3. How We Use Your Information
          </h3>
          <p className="text-[#484848]">
            We may use your personal information for the following purposes:
          </p>
          <p className="mt-2 text-[#484848]">
            To process and confirm your registration and ticket purchases <br />
            To provide event updates and notifications <br />
            To improve our website and services <br />
            To analyze user behavior and preferences <br />
            To respond to inquiries and provide customer support <br />
            To send promotional materials and event information (with your
            consent)
          </p>
        </section>
        {/* 4*/}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            4. Disclosure of Your Information
          </h3>
          <p className="text-[#484848]">
            We may share your personal information with: <br />
            Authorized event partners and affiliates <br />
            Service providers assisting with event logistics <br />
            Legal authorities when required by law
          </p>
        </section>
        {/* 5 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            5. Security
          </h3>
          <p className="text-[#484848]">
            We employ security measures to protect your personal information
            from unauthorized access and misuse. However, please note that no
            data transmission over the internet is entirely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>
        {/* 6 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            6. Your Choices
          </h3>
          <p className="text-[#484848]">
            You may choose to: <br />
            Update or correct your personal information <br />
            Opt out of receiving promotional emails <br />
            Request the deletion of your personal information (subject to legal
            requirements)
          </p>
        </section>
        {/* 7*/}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            7. Children&apos;s Privacy
          </h3>
          <p className="text-[#484848]">
            IIDC does not knowingly collect personal information from children
            under the age of 13. If you believe that we have inadvertently
            collected information from a child, please contact us to request its
            removal.
          </p>
        </section>
        {/* 8 */}
        <section className="mt-7">
          <h3 className="mb-1 text-lg font-semibold -tracking-tight text-[#777777]">
            8. Changes to this Privacy Policy
          </h3>
          <p className="text-[#484848]">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with an updated effective date.
          </p>
        </section>
        {/* 9 */}
        <section className="mt-7 ">
          <h3 className="mb-1 text-lg  font-semibold -tracking-tight text-[#777777]">
            9. Contact Information
          </h3>
          <p className="text-[#484848]">
            If you have any questions or concerns regarding these Privacy
            Policy, please contact us at iidc2024@gmail.com. By accessing and
            using the IIDC website or participating in IIDC events, you
            acknowledge that you have read, understood, and agreed to these
            Privacy Policy.
          </p>
        </section>
      </section>
    </main>
  );
};

export default page;
