import Link from "next/link";
import { MessageCircle } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EnquireNowButton({
  text = "Enquire Now",
  icon = <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />,
  link = "#enquire",
  backgroundColor = "bg-red-600",
  className = "",
  ...props
}) {
  const content = (
    <span className="flex items-center justify-center">
      {icon}
      <span className="font-semibold">{text}</span>
    </span>
  );

  const baseClasses = classNames(
    "fixed bottom-0 left-0 w-full z-50 flex justify-center md:hidden",
    className
  );
  const buttonClasses = classNames(
    "w-full max-w-md mx-auto m-2 px-6 py-3 rounded-lg shadow-lg text-white text-base flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transition-all duration-200",
    backgroundColor
  );

  // If link is external, use <a>, else Next.js Link
  const isExternal = link && (link.startsWith("http://") || link.startsWith("https://") || link.startsWith("mailto:") || link.startsWith("tel:"));

  if (link) {
    if (isExternal) {
      return (
        <div className={baseClasses} {...props}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            aria-label={text}
          >
            {content}
          </a>
        </div>
      );
    } else {
      return (
        <div className={baseClasses} {...props}>
          <Link href={link} legacyBehavior passHref>
            <a className={buttonClasses} aria-label={text}>
              {content}
            </a>
          </Link>
        </div>
      );
    }
  }

  // If no link, render as button
  return (
    <div className={baseClasses} {...props}>
      <button type="button" className={buttonClasses} aria-label={text}>
        {content}
      </button>
    </div>
  );
} 