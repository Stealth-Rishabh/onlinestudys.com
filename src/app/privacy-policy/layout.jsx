export const metadata = {
  title: "Privacy Policy- Online Studys",
  description: "Online Studys is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.",
  openGraph: {
    title: "Privacy Policy- Online Studys",
    description: "Online Studys is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.",
    type: "website",
    url: "https://www.onlinestudys.com/privacy-policy",
    siteName: "Online Studys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy- Online Studys",
    description: "Online Studys is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.",
  },
  alternates: {
    canonical: "https://www.onlinestudys.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return <div>{children}</div>;
}