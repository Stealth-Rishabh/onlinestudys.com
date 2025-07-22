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
      <div className="hidden md:flex items-center gap-4">
        <DropdownMenu>
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
        </DropdownMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative" ref={mobileMenuRef}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-green-600"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 min-w-[280px]">
            <div className="px-4 py-6 space-y-4">
              {programs.map((program) => (
                <div key={program.name} className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    {program.icon}
                    {program.name}
                  </div>
                  <div className="ml-6 space-y-1">
                    {program.universities.map((university) => (
                      <Link
                        key={university.name}
                        href={university.href}
                        className="block py-2 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {university.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavigationDropdown;
