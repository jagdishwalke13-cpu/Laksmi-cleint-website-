"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#FDBA74]/20 shadow-[#FF7A00]/5 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Robotonic Logo" className="h-12 w-auto object-contain rounded-[1rem] shadow-lg border-2 border-white" />
              <span className="text-2xl font-bold text-[#1E293B] tracking-tight">ROBOTONIC</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[#1E293B] font-medium hover:text-[#FF7A00] transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-[#FF7A00] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="bg-[#FF7A00] text-white px-8 py-2.5 rounded-full font-bold shadow-lg shadow-[#FF7A00]/20 hover:bg-[#FFB547] hover:shadow-[#FF7A00]/40 transition-all transform hover:-translate-y-0.5">
                Request a Demo
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E293B] hover:text-[#FF7A00] transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-64 bg-white/90 backdrop-blur-lg shadow-2xl z-40 flex flex-col h-screen pt-24 px-6 border-l border-[#FDBA74]/20"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#1E293B] hover:text-[#FF7A00] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-[#FDBA74]/20">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                  <button className="w-full bg-[#FF7A00] text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-[#FF7A00]/20 active:scale-95 transition-all text-center">
                    Request a Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
