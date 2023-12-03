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
        <div className="bg-[#FBE2E4] absolute -top-24 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] max-sm:z-0 -z-10 dark:bg-[#855F61]" />
        <div className="bg-[#DBD7FB] absolute -top-4 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] max-sm:z-0 -z-10 dark:bg-[#5F5C82]" />

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
