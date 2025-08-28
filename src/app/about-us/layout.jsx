export const metadata = {
  title: "About Us- Online Studys",
  description: "Online Studys is a comprehensive online resource designed to simplify the process of choosing a college and course. It's a one-stop-shop for students in India with a mobile-friendly website for easy access.", 
  openGraph: {
    title: "About Us- Online Studys",
    description: "Online Studys is a comprehensive online resource designed to simplify the process of choosing a college and course. It's a one-stop-shop for students in India with a mobile-friendly website for easy access.",
    type: "website",
    url: "https://www.onlinestudys.com/about-us",
    siteName: "Online Studys",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us- Online Studys",
    description: "Online Studys is a comprehensive online resource designed to simplify the process of choosing a college and course. It's a one-stop-shop for students in India with a mobile-friendly website for easy access.",
  },
  alternates: {
    canonical: "https://www.onlinestudys.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsLayout({ children }) {
  return <div>{children}</div>;

}