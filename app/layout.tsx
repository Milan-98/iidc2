import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SocialHeader from "@/components/header/SocialHeader";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  title: "India International Dance Congress (IIDC) - Home",
  keywords: [
    "Latin dance",
    "IIDC (India International Dance Congress)",
    "Dance workshops",
    "Dance performances",
    "Dance community",
  ],
  alternates: {
    canonical: 'iidc.co.in/'
  },
  description:
    "Explore Latin dance at IIDC - India's Dance Congress. Join for workshops, performances, and a vibrant community. Perfect for all dancers!",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ],
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    site: "@IIDC8",
    creator: "@MilanParmarforObiiKriationzWebLlp",
    images: "/android-chrome-512x512.png",
    description: "Join us at the India International Dance Congress!",
    title: "India International Dance Congress",
  },

  openGraph: {
    type: "website",
    url: "https://www.iidc.co.in",
    title: "India International Dance Congress",
    description: "Join us at the India International Dance Congress!",
    siteName: "iidc.co.in",

    countryName: "india",
    images: [
      {
        url: "/android-chrome-512x512.png",
        alt: "IIDC Logo",
      },
    ],
  },
  authors: [
    { name: "MilanParmarforObiiKriationzWebLlp" },
    { name: "MilanParmarforObiiKriationzWebLlp ", url: "https://milanparmar.site" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="relative">
          <SocialHeader />
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
