import Image from "next/image";
import JohnEnthony from "@/components/JohnEnthony";
import HeroOfAllPages from "@/components/HeroOfAllPages";
import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - India International Dance Congress",
  description:
    "Explore Latin dance, IIDC's passion, mission, and legacy of excellence. Join us on a captivating journey of rhythm, culture, and community.",
  keywords: [
    "IIDC Latin Dance",
    "Dance Congress",
    "Dance Workshops",
    "Dance Community",
  ],
};

const page = () => {
  return (
    <>
      <main>
        {/* IIDC Hero section ------------------------------------------*/}
        <HeroOfAllPages
          heading="ABOUT IIDC"
          content=" Welcome to IIDC - the India International Dance Congress, where the
          magic of movement and the allure of rhythm converge to create an
          unforgettable experience. IIDC is not just an event; it's a
          vibrant celebration of dance, culture, and community."
        />
        {/* IIDC MAin COntent -------------------------------------------------- */}
        <section className="px-6 py-10 md:px-10 lg:py-20 ">
          <section className="lg:mx-auto lg:grid lg:w-[70rem] lg:grid-flow-col lg:grid-cols-3 lg:gap-10 lg:px-0 lg:py-0">
            <section className=" col-span-2">
              <h1
                className={` text-3xl font-semibold  -tracking-tight text-[#1f1f1f] lg:text-5xl `}
              >
                India International Dance{" "}
                <hr className="my-1 hidden opacity-0 lg:block" /> Congress
                (IIDC)
              </h1>
              <hr className="mb-4 mt-3 w-[12.7rem] border-b-[1px] border-[#DF9627] sm:w-[34.6rem] lg:mb-4  lg:mt-3 lg:w-[24rem]  " />
              <p className="mt-5  lg:text-[1.07rem]">
                The India International Dance Congress (IIDC) is a dazzling
                celebration of Latin dance and culture that has captured the
                hearts of dancers and enthusiasts across India and around the
                globe. As an annual extravaganza, IIDC transcends the boundaries
                of ordinary dance events, offering a multifaceted experience
                that combines the joy of movement with the magic of Latin
                rhythms. IIDC&apos;s mission is simple yet profound: to unite
                people through dance, to inspire creativity, and to create a
                sense of belonging within the global dance community.
              </p>
              <p className="mt-3 lg:mt-4 lg:text-[1.07rem]">
                At the helm of IIDC is the visionary founder, John Anthony, a
                luminary in the world of Latin dance with over 15 years of
                experience in various Latin dance forms. His passion for dance,
                coupled with a relentless dedication to elevating Latin dance in
                India, has made IIDC a beacon of excellence in the dance world.
                Under his guidance, IIDC has flourished into a platform that not
                only educates and entertains but also forges deep connections
                and lasting friendships.
              </p>
              <p className="mt-3 lg:mt-4 lg:text-[1.07rem]">
                IIDC&apos;s allure lies in its diverse offerings, from
                world-class workshops conducted by international dance masters
                to electrifying performances that captivate and inspire.
                It&apos;s a place where attendees can unleash their creativity,
                refine their dance skills, and immerse themselves in the vibrant
                culture of Latin dance. Moreover, IIDC is a testament to the
                unifying power of dance, where people from all walks of life
                come together, breaking down barriers, and dancing to the same
                irresistible beat. IIDC is not just an event; it&apos;s an
                unforgettable journey into the heart of Latin dance, where every
                step is a celebration of life, rhythm, and community.
              </p>
            </section>
            <Image
              src="/IIDC_Black_Logo.png"
              alt="IIDC Logo"
              width={400}
              height={400}
              className="mx-auto mt-6 w-48 sm:w-56   lg:mx-0 lg:mt-0 lg:w-96"
            />
          </section>
        </section>
        {/* Ethos Section ---------------------------------------------------- */}
        <section
          className={`bg-[#00000048] bg-LatinDanceBg bg-cover bg-fixed bg-center px-6 py-10 text-[#d2d2d2] bg-blend-multiply sm:px-10 sm:py-14 md:px-14 lg:px-24 lg:text-[1.06rem] `}
        >
          <h3
            className={`text-center ${poppinsBold.className} text-4xl  font-semibold  -tracking-tight text-[#DF9627]`}
          >
            Our Ethos
          </h3>
          <hr className="mx-auto mb-3 mt-2 w-32 border-b-[1px] border-[#DF9627] sm:w-[21.7rem]  lg:mb-4 lg:mt-3  " />
          <p className=" text-center lg:mx-auto lg:w-[70rem]">
            IIDC&apos;s legacy is founded upon its commitment to excellence.
            Year after year, it has consistently brought together some of the
            world&apos;s most talented and respected Latin dance artists and
            instructors. This commitment ensures that IIDC participants have
            access to the highest caliber of dance education and performances.
          </p>

          <h3 className="my-5 text-center text-2xl text-[#DF9627]">
            &bull; &bull; &bull; &bull; &bull;
          </h3>

          {/* Ethos Sub Sections -------------------------------------------------- */}
          <section className="lg:grid lg:grid-cols-2 lg:gap-16  lg:px-20 lg:py-10">
            <section className="">
              <h3 className="text-center  text-xl font-semibold -tracking-tighter text-[#d2d2d295]">
                Promoting Diversity
              </h3>
              <p className="mt-2 text-center">
                Embracing the rich tapestry of dance forms from across the
                globe, IIDC strives to showcase the beauty and diversity of
                dance styles, from classical to contemporary, traditional to
                fusion.
              </p>
            </section>
            <h3 className="my-4 text-center text-2xl text-[#DF9627] lg:hidden">
              {" "}
              &bull; &bull; &bull;
            </h3>
            <section>
              <h3 className="text-center  text-xl font-semibold -tracking-tighter text-[#d2d2d295]">
                Mentoring
              </h3>
              <p className="mt-2 text-center">
                We believe in the power of mentoring to nurture talent and
                passion. IIDC offers workshops, masterclasses, and training
                programs led by renowned dance experts, providing invaluable
                learning opportunities for dancers of all levels.
              </p>
            </section>
            <h3 className="my-4 text-center text-2xl text-[#DF9627] lg:hidden">
              {" "}
              &bull; &bull; &bull;
            </h3>

            <section>
              <h3 className="text-center  text-xl font-semibold -tracking-tighter text-[#d2d2d295]">
                Cultural Exchange
              </h3>
              <p className="mt-2 text-center">
                IIDC serves as a bridge connecting cultures through dance. We
                facilitate cultural exchange programs, collaborations, and
                festivals that promote cross-cultural understanding and
                appreciation.
              </p>
            </section>
            <h3 className="my-4 text-center text-2xl text-[#DF9627] lg:hidden">
              {" "}
              &bull; &bull; &bull;
            </h3>

            <section>
              <h3 className="text-center  text-xl font-semibold -tracking-tighter text-[#d2d2d295]">
                Community Building
              </h3>
              <p className="mt-2 text-center">
                We are more than just an event; we are a community. IIDC brings
                together dancers, choreographers, instructors, and enthusiasts
                to share their love for dance, forge lifelong connections, and
                inspire one another.
              </p>
            </section>
          </section>
        </section>
        {/* John Anthony Section ------------------------------------------------ */}
        <JohnEnthony />
      </main>
    </>
  );
};

export default page;
