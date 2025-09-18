import BlogClient from "./blog-client";

// SEO Metadata for Blog Page
export const metadata = {
  title: "Blog - Online Studys | Latest News & Insights",
  description:
    "Stay updated with the latest news, insights, and articles from Online Studys. Read about academic excellence, student achievements, industry trends, and campus life.",
  keywords: [
    "Online Studys blog",
    "university news",
    "academic insights", 
    "student achievements",
    "campus life",
    "industry trends",
    "educational articles",
    "Online Studys updates",
    "university blog",
    "academic excellence",
    "student life",
    "campus news",
    "educational insights",
    "university articles",
  ],
  alternates: {
    canonical: "https://onlinestudys.com/blog",
  },
  openGraph: {
    title: "Blog - Online Studys | Latest News & Insights",
    description:
      "Stay updated with the latest news, insights, and articles from Online Studys. Read about academic excellence, student achievements, industry trends, and campus life.",
    url: "https://onlinestudys.com/blog",
    siteName: "Online Studys",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Online Studys Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Online Studys | Latest News & Insights",
    description:
      "Stay updated with the latest news, insights, and articles from Online Studys.",
    images: ["/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogPage() {
  return <BlogClient />;
}