import HeroOfAllPages from "@/components/HeroOfAllPages";

const page = () => {
  return (
    <main>
      {/* Page-itinerary Hero section ----------------------------------------*/}
      <HeroOfAllPages
        heading="EVENT ITINERARY"
        content="Our carefully crafted schedule is designed to immerse you in the world
          of Latin dance, providing an unforgettable experience that blends
          education, entertainment, and social interaction. From world-class
          workshops with renowned instructors to spectacular performances and
          electrifying dance parties, IIDC's itinerary promises to ignite
          your passion for dance and create lasting memories."
      />
      {/* We will update you shortly ---------------------------------------------- */}
      <section className="">
        <h3 className="py-14 text-center text-3xl font-black text-[#1F1F1F] lg:text-4xl">
          We will update this itinerary shortly!
        </h3>
      </section>
    </main>
  );
};

export default page;
