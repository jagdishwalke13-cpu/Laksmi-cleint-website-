import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: {
    default: "Robotonic Innovations SDDP Pvt Ltd | STEM & Robotics Education",
    template: "%s | Robotonic Innovations"
  },
  description: "Robotonic Innovations SDDP Pvt Ltd is an elite educational technology company bringing hands-on STEM, IoT, 3D Printing, and Robotics education directly to Indian students and schools.",
  keywords: ["STEM education India", "Robotics for kids", "Atal Tinkering Lab Setup", "Arduino workshops", "3D Printing in schools", "Robotonic Innovations", "Robotonic Innovations SDDP Pvt Ltd", "EdTech India"],
  openGraph: {
    title: "Robotonic Innovations SDDP Pvt Ltd",
    description: "Innovating the future of Indian education with hands-on STEM, Robotics, and IoT training.",
    url: "https://robotonicinnovations.com",
    siteName: "Robotonic Innovations",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Robotonic Innovations Logo",
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
