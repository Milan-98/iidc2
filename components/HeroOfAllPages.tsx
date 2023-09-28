import { Poppins } from "next/font/google";
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
interface HeroOfAllPagesProps {
  heading: string;
  content: string;
}
const HeroOfAllPages: React.FC<HeroOfAllPagesProps> = ({
  heading,
  content,
}) => {
  return (
    <section className="bg-[#00000048] bg-HeroOfItinerary bg-cover bg-fixed bg-left bg-repeat-y  px-6 pb-14 pt-28 text-white bg-blend-multiply md:bg-left md:px-16 md:pb-16 lg:bg-left-top lg:px-24 lg:py-40">
      <h3
        className={` text-center text-4xl font-black -tracking-tighter ${poppinsBold.className}`}
      >
        {heading}
      </h3>
      <p className="mt-2 text-center md:mt-3 lg:text-lg ">
        {content.split("\n").map((line, index) => (
          <span key={index}>
            {line.trim()} {/* Add .trim() to remove leading/trailing spaces */}
            {index < content.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    </section>
  );
};

export default HeroOfAllPages;
