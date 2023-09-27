import HeroOfAllPages from "@/components/HeroOfAllPages";

const page = () => {
  return (
    <main>
      {/* Workshops Hero section ------------------------------------------*/}

      <HeroOfAllPages
        heading="WORKSHOPS"
        content=" Welcome to the Workshops page for IIDC - the India International Dance
          Congress. Explore our exciting lineup of workshops that offer a unique
          opportunity to learn from talented instructors and enhance your dance
          skills."
      />
      {/* Workshops Main Conntent section */}
      {/* We will update you shortly ---------------------------------------------- */}
      <section className="">
        <h3 className="py-14 text-center text-3xl font-black text-[#1F1F1F] lg:text-4xl">
          We will update this Workshops Schedule shortly!
        </h3>
      </section>
    </main>
  );
};

export default page;
