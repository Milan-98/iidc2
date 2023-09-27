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
        HeroOfItinerary: "url('../public/itineraryHero.jpg')",
        EthosBg: "url('../public/Ethos-bg.jpg')",
        HomePageHero: "url('../public/homebg.jpg')",
        HomePageVideoSectionBg: "url('../public/homeVideoBg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
