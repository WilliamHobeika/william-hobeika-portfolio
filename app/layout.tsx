import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

//components
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

//context
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

//toaster
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William | Personal Portfolio",
  description:
    "Freshly graduated web developer and designer. Explore my work and let's collaborate!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="bg-gradient1" />
        <div className="bg-gradient2" />

        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
