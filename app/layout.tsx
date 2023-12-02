import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

//components
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ThemeSwitch from "@/components/ui/ThemeSwitch";

//context
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";

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
        className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-gradient1" />
        <div className="bg-gradient2" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
