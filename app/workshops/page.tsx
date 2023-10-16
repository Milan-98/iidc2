import HeroOfAllPages from "@/components/HeroOfAllPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IIDC Workshops - India International Dance Congress Workshop Schedule",
  description:
    "Explore the exciting lineup of workshops at IIDC. Join us for unique learning opportunities with talented instructors to enhance your dance Skills.",
  keywords: [
    "IIDC Workshops",
    "Dance Workshops",
    "Workshop Schedule",
    "Dance Education",
    "Dance Learning",
  ],
};

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
        <h1 className="py-14 text-center text-3xl font-black text-[#1F1F1F] lg:text-4xl">
          We will update this Workshops Schedule shortly!
        </h1>
      </section>
    </main>
  );
};

export default page;
