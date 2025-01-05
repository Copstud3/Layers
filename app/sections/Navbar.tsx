"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <section className="py-4 xl:py-8 fixed w-full top-0 z-50 max-sm:w-[343px]">
      <div className="container xl:max-w-5xl md:max-w-3xl">
        <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
          <div className="grid grid-cols-2 xl:grid-cols-3 p-2 px-4 md:pr-2 items-center ">
            <div>
              <a href="/">
              <Image
                src={logoImage}
                alt="Layers logo"
                className="h-9 md:h-auto w-auto"
              /></a>
            </div>
            <div className="lg:flex justify-center items-center hidden">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-6 h-6 md:hidden"
              >
                {/* Hamburger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "absolute top-0 left-0 transition-all duration-300",
                    isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                  )}
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>

                {/* X Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "absolute top-0 left-0 transition-all duration-300",
                    isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                  )}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              
              <Button
                variant="secondary" 
                className="hidden md:inline-flex items-center"
              ><a href="/login">
                Log In</a>
              </Button>
              
              <Button
                variant="primary" 
                className="hidden md:inline-flex items-center"
              ><a href="/signup">
                Sign Up</a>
              </Button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col items-center justify-evenly py-4 h-lvh -mt-10">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label} className="text-center hover:text-white/30">
                      {link.label}
                      <hr className="border-white/30 mt-4 w-[250px]"/>
                    </a>
                  ))}
                  <div className="flex gap-4 -mt-6">
                  <Button variant="secondary"><a href="/login">Log in</a></Button>
                  <Button variant="primary"><a href="/signup">Sign Up</a></Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    <div className="pb-[86px] md:pb-[98px] xl:pb-[130px]">
    </div>
    </>
  );
}
