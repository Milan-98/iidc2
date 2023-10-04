import Link from "next/link";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

const HomeHeroText = () => {
  return (
    <section className="pt-28  md:pt-52 lg:mx-auto  lg:w-[70rem] lg:pt-36 ">
      <h3 className="mb-1  overflow-hidden text-center text-[.79rem]  -tracking-tighter text-white lg:mb-2 lg:text-start lg:text-xs lg:font-semibold">
        <span className="animation"> A JOHN ANTHONY&apos;S PRODUCTION</span>
      </h3>
      <section className="overflow-hidden">
        <hr className="animation mx-auto w-24 lg:mx-0 lg:w-8 lg:border-b-2" />
      </section>
      <section className="overflow-hidden ">
        <h1
          className={`animation mt-4 ${poppinsBold.className} px-1 text-center text-[2.5rem]  font-black leading-[2.8rem] -tracking-tight text-white lg:mt-3 lg:text-start  lg:text-[5rem] lg:leading-[5.2rem] `}
        >
          {" "}
          India <br className="lg:hidden" /> International{" "}
          <br className="sm:hidden lg:block" /> Dance{" "}
          <br className="lg:hidden" /> Congress (IIDC) <br />{" "}
          <div className="mt-2 inline-block text-[#DF9627]"> IS BACK!</div>
        </h1>
      </section>

      <Link
        href={"/"}
        className="group mx-auto   mt-4 flex w-40 items-center justify-center rounded-full bg-black py-3 font-semibold -tracking-tight   text-white duration-700  hover:bg-[#DF9627] lg:mx-0 lg:mt-6   lg:w-44 lg:py-[.80rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-0 translate-x-[40%] rotate-45  fill-white transition-all duration-500  group-hover:mr-1 group-hover:w-fit group-hover:-translate-x-0 "
          width="24"
          height="24"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>{" "}
        <h2 className=""> LEARN MORE</h2>
      </Link>
    </section>
  );
};

export default HomeHeroText;
