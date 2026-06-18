import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: {
    default: "SDDP ROBOTONIC INNOVATIONS LLP | Next-Gen STEM & Robotics Education",
    template: "%s | SDDP ROBOTONIC INNOVATIONS LLP"
  },
  description: "SDDP ROBOTONIC INNOVATIONS LLP is India's leading EdTech company transforming education. We provide hands-on STEM, Robotics, IoT, 3D Printing, and AI training for students and partner schools.",
  keywords: [
    "SDDP ROBOTONIC INNOVATIONS LLP", 
    "SDDP ROBOTONIC INNOVATIONS", 
    "STEM education India", 
    "Robotics for kids", 
    "IoT training for students", 
    "Atal Tinkering Lab Setup", 
    "ATL Lab Setup India", 
    "Arduino workshops", 
    "3D Printing in schools", 
    "EdTech India", 
    "Practical Learning", 
    "Next-Gen Education", 
    "STEM Models"
  ],
  openGraph: {
    title: "SDDP ROBOTONIC INNOVATIONS LLP | Premium STEM Education",
    description: "Transform your school with state-of-the-art Robotics and STEM labs.",
    url: "https://sddprobotonicinnovations.com/",
    siteName: "SDDP ROBOTONIC INNOVATIONS LLP",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SDDP ROBOTONIC INNOVATIONS LLP Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/icon.png?v=2', type: 'image/png' },
      { url: '/favicon.ico?v=2' }
    ],
    shortcut: '/icon.png?v=2',
    apple: '/apple-icon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-inter bg-brand-bg text-brand-text overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
