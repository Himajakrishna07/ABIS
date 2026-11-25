import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshayaitsolutions.com"),
  title: {
    default: "Akshaya Business IT Solutions (ABIS) | Enterprise IT Consulting & Staffing",
    template: "%s | Akshaya Business IT Solutions (ABIS)",
  },
  description:
    "Akshaya Business IT Solutions (ABIS) is an established IT consulting and staffing partner with 20+ years of industry experience across India (Hyderabad, Bengaluru) and the USA. Specialized in Permanent Recruitment, Contract Staffing, Executive Search & RPO, Corporate Training, HR Consulting, and Application Development.",
  keywords: [
    "Akshaya Business IT Solutions",
    "ABIS",
    "IT Consulting",
    "Permanent Recruitment",
    "Contract Staffing India USA",
    "Executive Search",
    "Recruitment Process Outsourcing",
    "RPO",
    "Corporate Training",
    "HR Consulting",
    "Semiconductor Staffing",
    "VLSI Recruitment",
    "Hyderabad IT Staffing",
    "Bengaluru Tech Recruitment",
  ],
  authors: [{ name: "Akshaya Business IT Solutions" }],
  creator: "Akshaya Business IT Solutions",
  publisher: "Akshaya Business IT Solutions",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshayaitsolutions.com",
    siteName: "Akshaya Business IT Solutions (ABIS)",
    title: "Akshaya Business IT Solutions | Building Businesses Through People & Technology",
    description:
      "Enterprise IT Consulting, Permanent Recruitment, Contract Staffing, RPO, and Corporate Training. 20+ years of proven delivery across India and the USA.",
    images: [
      {
        url: "/brand/Life_AT_ABIS.webp",
        width: 1200,
        height: 630,
        alt: "Akshaya Business IT Solutions - Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya Business IT Solutions (ABIS)",
    description: "Building Businesses Through People, Technology & Innovation.",
    images: ["/brand/Life_AT_ABIS.webp"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("abis-theme");var r=document.documentElement;if(t==="light"){r.classList.remove("dark");r.classList.add("light");r.style.colorScheme="light";}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-[#050914] text-[#F1F5F9] antialiased min-h-screen flex flex-col justify-between selection:bg-abis-blue selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <ThemeToggle />
      </body>
    </html>
  );
}
