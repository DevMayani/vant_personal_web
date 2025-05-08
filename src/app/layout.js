import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Vant Personal",
  description: "Finance And Business Management Platform",
  keywords: ["vant", "finance", "fintech"],
  openGraph: {
    title: "Home | Vant Personal",
    description: "Finance And Business Management Platform",
    url: "https://yourdomain.com",
    siteName: "Vant Personal",
    images: [
      {
        url: "/public/assets/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Vant Personal",
    description: "Finance And Business Management Platform",
    images: ["/public/assets/favicon.ico"],
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
