"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-slate-50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <img src="/logo.png" alt="Robotonic Logo" className="h-12 w-auto object-contain bg-white p-1.5 rounded-[1rem] shadow-lg border-2 border-white/10" />
              <h3 className="text-xl font-bold text-white tracking-tight">Robotonic Innovations</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Innovating the Future with Robotics & Automation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/programs" className="text-slate-400 hover:text-white transition-colors text-sm">Programs</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  #253, 8th Cross, near Sri Doddamma Devi Temple, Ramamurthy Nagar, Bangalore – 560016
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />
                <a href="mailto:Robotonicinnovationsddp@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm break-all">
                  Robotonicinnovationsddp@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />
                <a href="tel:9731554348" className="text-slate-400 hover:text-white transition-colors text-sm">
                  9731554348
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 text-white placeholder-gray-400 px-4 py-2.5 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-[#FF7A00] w-full text-sm"
                required
              />
              <button type="submit" className="bg-[#FF7A00] text-white px-5 py-2.5 rounded-r-xl text-sm font-medium hover:bg-[#FFB547] transition-colors flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="flex space-x-4 mt-8">
              <a href="https://www.instagram.com/robo.tonic_innovations?igsh=NHpnNndza2xoenR2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF7A00] hover:text-white transition-colors">
                <FiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 mt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2026 Robotonic Innovations SDDP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
