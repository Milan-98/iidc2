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
        HeroOfAllPages: "url('../public/allPagesHero.jpg')",
        LatinDanceBg: "url('../public/latinDanceBg.jpg')",
        HomePageHero: "url('../public/homebg.jpg')",
        HomePageVideoSectionBg: "url('../public/homeVideoBg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
