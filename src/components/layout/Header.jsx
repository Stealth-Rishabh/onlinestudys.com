"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavigationDropdown from "./NavigationDropdown";
import Link from "next/link";
import { Button } from "../ui/button";
import AutoPopup from "../ui/AutoPopup";
import { Menu, X } from "lucide-react";
// import { ArrowRight } from "lucide-react";

const Header = () => {
  const [showCounsellingPopup, setShowCounsellingPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-black/90 text-white shadow-lg relative z-[99] border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Online Studys Logo"
              width={150}
              height={64}
              className="h-12 w-auto sm:h-14 md:h-16 drop-shadow-"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5">
            <div className="relative">
              <NavigationDropdown />
            </div>
            <Link href="/about-us">
              <Button
                variant="link"
                // className="flex items-center cursor-pointer gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm lg:text-base px-3 py-2"
                className="cursor-pointer"
              >
                About Us
              </Button>
            </Link>
            <Button
              variant="link"
              // className="flex items-center cursor-pointer gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm lg:text-base px-3 py-2"
              className="cursor-pointer"
              onClick={() => setShowCounsellingPopup(true)}
            >
              Free Counselling
            </Button>
            {/* <Link href="/blog">
              <Button
                variant="link"
                // className="flex items-center cursor-pointer gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm lg:text-base px-3 py-2"
                className="cursor-pointer"
              >
                Blogs
              </Button>
            </Link> */}
            <Link href="/contact-us">
              <Button
                variant="link"
                // className="flex items-center cursor-pointer gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm lg:text-base px-3 py-2"
                className="cursor-pointer"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-600 bg-green-50 focus:outline-none ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <div className="px-3 py-2">
              <NavigationDropdown />
            </div>
            <div className="px-3 py-2">
              <Link href="/about-us" onClick={closeMobileMenu}>
                <Button
                  variant="link"
                  // className="w-full justify-start text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm"
                  className="cursor-pointer text-black"
                >
                  About Us
                </Button>
              </Link>
            </div>
            <div className="px-3 py-2">
              <Button
                variant="link"
                // className="w-full justify-start text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm"
                className="cursor-pointer text-black"
                onClick={() => {
                  setShowCounsellingPopup(true);
                  closeMobileMenu();
                }}
              >
                Free Counselling
              </Button>
            </div>
            {/* <div className="px-3 py-2">
              <Link href="/blog" onClick={closeMobileMenu}>
                <Button
                  variant="link"
                  // className="w-full justify-start text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm"
                  className="cursor-pointer text-black"
                >
                  Blogs
                </Button>
              </Link>
            </div> */}
            <div className="px-3 py-2">
              <Link href="/contact-us" onClick={closeMobileMenu}>
                <Button
                  variant="link"
                  // className="w-full justify-start text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2 text-sm"
                  className="cursor-pointer text-black"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Counselling Popup */}
      {showCounsellingPopup && (
        <AutoPopup
          onClose={() => setShowCounsellingPopup(false)}
          forceShow={true}
        />
      )}
    </>
  );
};

export default Header;
