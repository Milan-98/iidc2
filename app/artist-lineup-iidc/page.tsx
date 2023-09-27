import DjArtistLineupLightbox from "@/components/DjArtistLineupLightbox";
import HeroOfAllPages from "@/components/HeroOfAllPages";
import IndianArtistLineupLightbox from "@/components/IndianArtistLineupLightbox";
import InternationalArtistLineupLightbox from "@/components/InternationalArtistLineupLightbox";

const page = () => {
  return (
    <main>
      {/* Artist Line Us Hero section */}
      <HeroOfAllPages
        heading="ARTISTS LINEUP"
        content="Prepare to be captivated by a stellar constellation of talent! The artist line-up at the India International Dance Congress (IIDC) is a testament to the global allure of Latin dance. We've handpicked the brightest stars in the Latin dance world to illuminate our stage and inspire your dancing spirit"
      />
      {/* Artist Lineup Main Section */}
      <section className="px-6 py-10 md:px-10 lg:py-20 lg:pl-20 lg:pr-52">
        <h3 className="text-4xl font-semibold  -tracking-tight text-[#1f1f1f] lg:text-5xl">
          Artist Lineup
        </h3>
        <hr className="mb-4 mt-3 w-[12rem] border-b-[1px] border-[#DF9627] sm:w-[13.5rem] lg:mb-4  lg:mt-3 lg:w-[16rem]  " />
        <p className="mt-5">
          Welcome to the electrifying Artist Line-Up page of the India
          International Dance Congress (IIDC). Here, we proudly introduce the
          brilliant performers and instructors who will grace our stage and make
          IIDC an unforgettable experience. From world-renowned choreographers
          who will ignite your creativity to mesmerizing performers who will
          inspire your passion for dance, our artist line-up is a fusion of
          talent, energy, and artistry. Each artist brings their unique flavor
          and expertise to IIDC, promising a diverse and thrilling dance
          journey. Get ready to be enchanted by their performances and
          enlightened by their workshops. Explore our artist profiles, and join
          us in celebrating the vibrant tapestry of Latin dance through the
          incredible talents we&apos;ve gathered for your enjoyment at IIDC.
        </p>
      </section>
      <section className="bg-black">
        <InternationalArtistLineupLightbox />
        <IndianArtistLineupLightbox />
        <DjArtistLineupLightbox />
      </section>
    </main>
  );
};

export default page;
