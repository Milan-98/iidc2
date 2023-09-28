import { Fira_Mono } from "next/font/google";
const fira = Fira_Mono({ weight: "400", subsets: ["cyrillic"] });
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IIDC 404 Error - Page Not Found - India International Dance Congress",
  description:
    "Oops! The page you're looking for at IIDC - India International Dance Congress seems to be missing. Explore our exciting workshops and events or get in touch with us.",
  keywords: [
    "IDC 404 Error",
    " Page Not Found",
    "Dance Workshops",
    "Dance Events",
    "India International Dance Congress",
  ],
};
const notFound = () => {
  return (
    <article
      className={`error grid h-[100dvh] w-[100dvw] place-items-center  bg-[#252525] text-8xl text-[#fff] ${fira.className} `}
    >
      404
    </article>
  );
};

export default notFound;
