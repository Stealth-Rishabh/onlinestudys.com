import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-green-100 shadow relative z-10 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 sm:p-1 sm:px-1">
        {/* <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        > */}
        <Image
          src="/logo.png"
          alt="NoCollege Logo"
          width={150}
          height={64}
          className="h-16 w-auto"
          priority
        />
        <div className="sm:flex hidden flex-wrap items-center gap-2">
          <Image
            src="/c-naac.jpg"
            width={128}
            height={64}
            className="h-16 mix-blend-multiply brightness-110"
            alt="NAAC Accreditation"
          />
          <Image
            src="/c-nirf.jpg"
            width={128}
            height={64}
            className="h-16 mix-blend-multiply brightness-110"
            alt="NIRF Ranking"
          />
          <Image
            src="/c-times.jpg"
            width={128}
            height={64}
            className="h-16 mix-blend-multiply brightness-110"
            alt="Times Higher Education Ranking"
          />
        </div>
        {/* <span class="self-center text-green-500 font-mono text-3xl font-bold whitespace-nowrap uppercase">
          NoCollege
        </span> */}
        {/* </a> */}
      </div>
    </nav>
  );
};

export default Header;

