import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets:["latin"] });

const JohnEnthony = () => {
  return (
    <section
      id="johnAnthony"
      className="bg-black px-6 py-14 sm:px-10 lg:grid lg:grid-cols-3 lg:gap-14 lg:px-20 lg:py-20"
    >
      <Image
        src="/john-anthony.jpg"
        alt="john Anthony picture"
        width={450}
        height={450}
        className="mx-auto w-72 sm:mx-0 sm:w-96  md:w-[29rem]"
      />
      <section className="col-span-2 mt-7 text-[#e6e6e6] lg:mt-0">
        <h3 className={`text-3xl ${poppinsBold.className} font-semibold  -tracking-tight text-[#DF9627] lg:text-4xl`}>
          John Anthony
        </h3>
        <h5 className="text-xs text-[#868585] lg:text-sm">
          Founder - India International Dance Congress
        </h5>
        <hr className="mb-5 mt-4 w-[14rem] border-b-[1px] border-[#DF9627] sm:w-[21.7rem]  lg:mb-4 lg:mt-3  " />
        <p className="">
          John Anthony is a luminary in the world of Latin dance in India,
          renowned for his unwavering dedication and contributions spanning over
          15 years. As the founder of the India International Dance Congress
          (IIDC), he has played a pivotal role in cultivating a vibrant Latin
          dance community within the country. His passion for dance, coupled
          with his vision to promote and elevate Latin dance forms, has been
          instrumental in shaping IIDC into one of the most anticipated events
          in the Latin dance calendar. Through his leadership, John Anthony has
          successfully bridged the gap between India and the global Latin dance
          scene, consistently bringing in some of the best international artists
          to share their expertise with enthusiasts in India.
        </p>
        <p className="mt-4">
          Beyond his role as the founder of IIDC, John Anthony&apos;s influence
          extends far and wide. He is a dynamic force, not only as an event
          organizer but also as a dancer and instructor, inspiring countless
          individuals to immerse themselves in the rhythms and movements of
          Latin dance. His commitment to fostering a sense of community, along
          with his extensive experience in various Latin dance styles, has made
          him a respected figure and a true catalyst for the growth of Latin
          dance in India. John Anthony&apos;s legacy is not only defined by the
          success of IIDC but also by the lasting impact he has had on the
          passion and talent of dancers across the nation.
        </p>
      </section>
    </section>
  );
};

export default JohnEnthony;
