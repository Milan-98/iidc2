import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        HeroOfAllPages: "url('../public/Multi_pages/allPagesHero.jpg')",
        LatinDanceBg: "url('../public/Multi_pages/latinDanceBg.jpg')",
        HomePageHero: "url('../public/Home_page/homebg.jpg')",
        HomePageVideoSectionBg: "url('../public/Home_page/homeVideoBg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
