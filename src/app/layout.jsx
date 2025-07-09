import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AdmissionFormProvider } from "@/context/AdmissionFormContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online MBA & MCA Programs | GLA Online",
  description:
    "Explore the best online MBA & MCA programs with GLA Online. Get detailed information on admission, courses, and universities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdmissionFormProvider>
          <Header />
          {children}
        </AdmissionFormProvider>
      </body>
    </html>
  );
}
