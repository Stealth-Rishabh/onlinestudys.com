export const metadata = {
  title: "Terms and Conditions- Online Studys",
  description: "Online Studys is committed to providing a safe and secure online learning environment. These Terms and Conditions outline the rules and regulations for using our website and services.",
  openGraph: {
    title: "Terms and Conditions- Online Studys",
    description: "Online Studys is committed to providing a safe and secure online learning environment. These Terms and Conditions outline the rules and regulations for using our website and services.",
    type: "website",
    url: "https://www.onlinestudys.com/terms-conditions",
    siteName: "Online Studys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions- Online Studys",
    description: "Online Studys is committed to providing a safe and secure online learning environment. These Terms and Conditions outline the rules and regulations for using our website and services.",
  },
  alternates: {
    canonical: "https://www.onlinestudys.com/terms-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsLayout({ children }) {
  return <div>{children}</div>;
}