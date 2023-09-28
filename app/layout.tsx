import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SocialHeader from "@/components/SocialHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const poppins = Poppins({ weight: "400", subsets:["latin"] });

export const metadata: Metadata = {
  title: "India International Dance Congress (IIDC) - Home",
  description:
    "The India International Dance Congress (IIDC) is a celebrated annual gathering that pulsates with the vibrant rhythms of Latin dance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        {/* View Port  */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Primary favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Additional favicon sizes */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Android chrome Links */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        {/* Manifest file link */}
        <link rel="manifest" href="/manifest.json" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IIDC8" />
        <meta
          name="twitter:title"
          content="India International Dance Congress"
        />
        <meta
          name="twitter:description"
          content="Join us at the India International Dance Congress!"
        />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        {/* OpenGraph Tags */}
        {/* Type can be 'website', 'article', etc. */}
        <meta property="og:type" content="website" />{" "}
        {/* URL of your website */}
        <meta property="og:url" content="https://www.iidc.co.in" />{" "}
        {/* Your website's title */}
        <meta
          property="og:title"
          content="India International Dance Congress"
        />{" "}
        {/* Description of your website */}
        <meta
          property="og:description"
          content="Join us at the India International Dance Congress!"
        />{" "}
        {/* URL to your OpenGraph image */}
        <meta property="og:image" content="/android-chrome-512x512.png" />{" "}
        {/* Alt text for your image */}
        <meta property="og:image:alt" content="IIDC Logo" />{" "}
        {/* Your site's name */}
        <meta property="og:site_name" content="IIDC Co In" />{" "}
      </Head>
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
