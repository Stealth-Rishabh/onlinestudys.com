import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AdmissionFormProvider } from "@/context/AdmissionFormContext";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online MBA from Top Universities - Online Studys",
  description:
    "2025's best online MBA programs in India ranked from leading online MBA offering universities in India. Explore now.",
  keywords:
    "online MBA, distance learning MBA, MBA programs India, online MBA courses, MBA degree online, top MBA universities",
  openGraph: {
    title: "Online MBA from Top Universities - Online Studys",
    description:
      "2025's best online MBA programs in India ranked from leading online MBA offering universities in India. Explore now.",
    type: "website",
    url: "https://onlinestudys.com",
    siteName: "Online Studys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online MBA from Top Universities - Online Studys",
    description:
      "2025's best online MBA programs in India ranked from leading online MBA offering universities in India. Explore now.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="QNe5bEKwiwWRpzNKSe5xB8UZb_eK1LfLDiwODLE3aEk"
        />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FM76F125F8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FM76F125F8');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WKXVNGZM');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKXVNGZM"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <AdmissionFormProvider>
          <Header />
          {children}
        </AdmissionFormProvider>
      </body>
    </html>
  );
}
