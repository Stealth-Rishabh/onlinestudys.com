import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-white shadow relative z-10 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-5 sm:p-1 sm:px-1">
        {/* <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        > */}
        <Image
          src="/logo.png"
          className="h-16 w-auto"
          alt="NoCollege Logo"
          width={200}
          height={64}
        />
        {/* <span className="self-center text-green-500 font-mono text-3xl font-bold whitespace-nowrap uppercase">
          NoCollege
        </span> */}
        {/* </a> */}
      </div>
    </nav>
  );
};

export default Header;
