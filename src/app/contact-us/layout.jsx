export const metadata = {
  title: "Contact Us- Online Studys",
  description:
    "Get in touch with Onlinestudys for queries, support, or course details. Our team is here to guide you with quick responses and solutions to make your learning journey smooth and effective.",
  openGraph: {
    title: "Contact Us- Online Studys",
    description:
      "Get in touch with Onlinestudys for queries, support, or course details. Our team is here to guide you with quick responses and solutions to make your learning journey smooth and effective.",
    type: "website",
    url: "https://www.onlinestudys.com/contact-us",
    siteName: "Online Studys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us- Online Studys",
    description:
      "Get in touch with Onlinestudys for queries, support, or course details. Our team is here to guide you with quick responses and solutions to make your learning journey smooth and effective.",
  },
  alternates: {
    canonical: "https://www.onlinestudys.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsLayout({ children }) {
  return <div>{children}</div>;
}
