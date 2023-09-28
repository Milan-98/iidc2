interface HeroOfAllPagesProps {
  heading: string;
  content: string;
}
const HeroOfAllPages: React.FC<HeroOfAllPagesProps> = ({
  heading,
  content,
}) => {
  return (
    <section className="bg-[#00000048] bg-fixed bg-repeat-y bg-HeroOfItinerary bg-cover bg-left  px-6 pb-14 pt-28 text-white bg-blend-multiply md:bg-left md:px-16 md:pb-16 lg:bg-left-top lg:px-24 lg:py-40">
      <h3 className="text-center text-4xl font-black -tracking-tighter ">
        {heading}
      </h3>
      <p className="mt-2 text-center md:mt-3 lg:text-lg ">{content}</p>
    </section>
  );
};

export default HeroOfAllPages;
