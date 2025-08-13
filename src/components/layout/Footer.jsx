import Link from "next/link";
import Image from "next/image";
// import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const universities = [
    { name: "Amity University", href: "/amity" },
    { name: "Galgotia University", href: "/galgotias" },
    { name: "Chandigarh University", href: "/chandigarh" },
    { name: "Parul University", href: "/parul" },
  ];

  const programs = [
    { name: "MCA", href: "/mca" },
    { name: "MBA", href: "/" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer
      className="bg-black/90 text-white border-t border-gray-200"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo Column */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-12 w-auto sm:h-14 md:h-16 drop-shadow-lg"
              />
            </div>
            <p className="text-white text-sm leading-relaxed max-w-md">
              Ready to upskill? Choose from our extensive range of online and
              distance degrees. Find the perfect course to fit your schedule and
              career goals.
            </p>
            <p className="text-white text-sm leading-relaxed max-w-md">
              OnlineStudys is your one-stop platform to search for best Online
              MBA colleges in India. We bring together the best online
              institutions, offering Online MBA program designed to help you
              overcome academic challenges and advance your career. Embrace the
              convenience of learning from anywhere, at any time.
            </p>
          </div>

          {/* Top Universities Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Top Universities
            </h3>
            <nav aria-label="Top Universities">
              <ul className="space-y-3">
                {universities.map((university) => (
                  <li key={university.name}>
                    <Link
                      href={university.href}
                      className="text-white hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {university.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Online Programs Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Online Programs
            </h3>
            <nav aria-label="Online Programs">
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      href={program.href}
                      className="text-white hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav aria-label="Quick Links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* <Separator className="my-8" /> */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white text-sm">
            © 2025 OnlineStudys. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-8">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-white hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
          {/* <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-white hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
