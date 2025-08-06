"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, GraduationCap, BookOpen, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
const NavigationDropdown = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const programs = [
    {
      name: "Online MBA",
      icon: <GraduationCap className="w-4 h-4" />,
      universities: [
        { name: "Amity University", href: "/amity" },
        { name: "Galgotia University", href: "/galgotias" },
        { name: "Chandigarh University", href: "/chandigarh" },
        { name: "Parul University", href: "/parul" },
      ],
    },
    // {
    //   name: "Online MCA",
    //   icon: <BookOpen className="w-4 h-4" />,
    //   universities: [
    //     { name: "Amity University", href: "/amity" },
    //     { name: "Galgotia University", href: "/galgotias" },
    //     { name: "Chandigarh University", href: "/chandigarh" },
    //     { name: "Parul University", href: "/parul" },
    //   ],
    // },
  ];

  const universities = [
    { name: "Amity University", href: "/amity" },
    { name: "Galgotia University", href: "/galgotias" },
    { name: "Chandigarh University", href: "/chandigarh" },
    { name: "Parul University", href: "/parul" },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="flex items-center gap-4 ">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2"
              >
              <GraduationCap className="w-4 h-4" />
              Explore Universities
              <ChevronDown className="w-4 h-4" />
            </Button>
                
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-54 rounded-lg mt-1 bg-white">
            {programs.map((program) => (
              <DropdownMenuSub key={program.name}>
                <DropdownMenuSubTrigger className="flex items-center gap-2">
                  {program.icon}
                  {program.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-56 bg-white mr-2 -mt-1 rounded-lg">
                  {program.universities.map((university) => (
                    <DropdownMenuItem key={university.name} asChild>
                      <Link
                        href={university.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {university.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="link"
              // className="flex w-full items-center justify-start cursor-pointer gap-2 text-green-700 hover:text-green-600 hover:bg-green-50 bg-white ring-2 ring-green-200 ring-offset-2"
              className="cursor-pointer text-black md:text-white"
            >
              <BookOpen className="w-4 h-4" />
              Explore Universities
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-54 rounded-lg mt-1 bg-white z-[99]">
            {universities.map((university) => (
              <DropdownMenuItem key={university.name} asChild>
                <Link
                  href={university.href}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {university.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Navigation */}
      {/* <div className="md:hidden relative" ref={mobileMenuRef}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-green-600 bg-green-50 shadow rounded"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-10 h-10" />
          )}
        </Button> */}

      {/* Mobile Menu Overlay with Framer Motion */}
      {/* <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 32,
                duration: 0.32,
              }}
              className="absolute top-12 w-screen rounded-b-3xl -right-5 drop-shadow-2xl bg-white border-t border-gray-200 shadow-lg min-w-[280px] z-[9999]"
              style={{ originY: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.08, duration: 0.22 }}
                className="px-4 py-6 space-y-4"
              >
                {programs.map((program, i) => (
                  <motion.div
                    key={program.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: 0.12 + i * 0.04,
                      duration: 0.22,
                      type: "tween",
                    }}
                  >
                    <div className="flex items-center gap-2 text-green-700 font-medium text-xl">
                      {program.icon}
                      {program.name}
                    </div>
                    <div className="sm:ml-6 space-y-1">
                      {program.universities.map((university, j) => (
                        <motion.div
                          key={university.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{
                            delay: 0.18 + j * 0.03 + i * 0.04,
                            duration: 0.18,
                            type: "tween",
                          }}
                        >
                          <Link
                            href={university.href}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors bg-green-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              {university.name}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
      {/* </div> */}
    </>
  );
};

export default NavigationDropdown;
