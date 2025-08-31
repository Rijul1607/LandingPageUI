"use client"
import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { X } from "lucide-react"; // cross icon
import { Button } from "@/components/Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>

            {/* Menu toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden "
            >
              {isOpen ? (
                <X className="h-8 w-8 rotate-90 transition-transform duration-300" />
              ) : (
                <MenuIcon className="rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-60 mt-4 " : "max-h-0"
          }`}
        >
          <div className="border border-white/15 rounded-lg p-4 bg-black/50 backdrop-blur">
            <nav className="flex flex-col gap-4 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
