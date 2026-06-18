"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin, Phone, Mail, Send, ArrowUpRight, Camera } from "lucide-react";

/* =========================================
   ADVANCED UI COMPONENTS
========================================= */

// Magnetic Button
const MagneticButton = ({ children, className = "", type = "button" }: { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset" }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative z-50 ${className}`}
    >
      {children}
    </motion.button>
  );
};

/* =========================================
   PAGE COMPONENT
========================================= */

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", role: "", message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", role: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#FFF8F1] min-h-screen text-[#1E293B]">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF7A00] origin-left z-[100]" style={{ scaleX }} />

      <section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-[#FFB547]/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/60 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl p-8 md:p-16 overflow-hidden relative"
          >
            {/* Inner ambient light */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFB547]/20 via-transparent to-transparent -z-10 pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              
              {/* Left Side: Contact Info */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1E293B] mb-6 leading-tight tracking-tight">Let's Innovate<br/><span className="text-[#FF7A00]">Together.</span></h1>
                  <p className="text-xl text-gray-600 font-medium">Ready to bring next-generation STEM learning to your students? Get in touch with us today.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Headquarters</h4>
                      <p className="text-gray-600 font-medium leading-relaxed max-w-xs">#253, 8th Cross, near Sri Doddamma Devi Temple, Ramamurthy Nagar, Bangalore – 560016</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Mail className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Email Us</h4>
                      <a href="mailto:Robotonicinnovationsddp@gmail.com" className="text-gray-600 font-medium hover:text-[#FF7A00] transition-colors break-all">Robotonicinnovationsddp@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Call Us</h4>
                      <a href="tel:9731554348" className="text-gray-600 font-medium hover:text-[#FF7A00] transition-colors">9731554348</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Camera className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1E293B] mb-1">Instagram</h4>
                      <a href="https://www.instagram.com/robo.tonic_innovations?igsh=NHpnNndza2xoenR2" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-medium hover:text-[#FF7A00] transition-colors">@robo.tonic_innovations</a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="h-64 rounded-3xl bg-[#1E293B] relative overflow-hidden shadow-inner border border-[#1E293B]/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3355.8709249106346!2d77.6793148!3d13.01377166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11213fd6e8cf%3A0xb4fffa96b927484b!2sShree%20Doddamma%20Devi%20Temple(SDDP)!5e1!3m2!1sen!2sin!4v1780087660735!5m2!1sen!2sin" 
                    className="w-full h-full border-0" 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Side: Inquiry Form */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-[#1E293B]">Request a Free Demo</h3>
                  <p className="text-gray-500 mt-2 font-medium">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                    <label htmlFor="name" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Full Name</label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                      <label htmlFor="email" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Email Address</label>
                    </div>
                    <div className="relative">
                      <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all" placeholder=" " required />
                      <label htmlFor="phone" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">Phone Number</label>
                    </div>
                  </div>

                  <div className="relative">
                    <select id="role" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-7 pb-3 outline-none transition-all font-medium appearance-none" required>
                      <option value="" disabled>Select your role</option>
                      <option value="parent">Parent</option>
                      <option value="school">School Representative</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                    <label htmlFor="role" className="absolute left-5 top-3 text-[#FF7A00] font-medium text-xs uppercase tracking-wider">I am a</label>
                  </div>

                  <div className="relative">
                    <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="peer w-full bg-[#FFF8F1] border-2 border-transparent focus:border-[#FF7A00] focus:bg-white text-[#1E293B] rounded-xl px-5 pt-8 pb-3 outline-none transition-all resize-none" placeholder=" " required></textarea>
                    <label htmlFor="message" className="absolute left-5 top-4 text-gray-400 font-medium text-xs uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-focus:top-3 peer-focus:text-xs peer-focus:text-[#FF7A00]">How can we help you?</label>
                  </div>

                  {status === "success" && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl font-medium border border-green-200">
                      Message sent successfully! We will get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl font-medium border border-red-200">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <MagneticButton type="submit" className="w-full bg-[#FF7A00] text-white py-5 rounded-full font-bold text-lg shadow-xl shadow-[#FF7A00]/30 hover:bg-[#FFB547] transition-colors flex items-center justify-center gap-2 group mt-2 disabled:opacity-70">
                    <Send className={`w-5 h-5 transition-transform ${status !== "loading" ? "group-hover:translate-x-1 group-hover:-translate-y-1" : ""}`} />
                    {status === "loading" ? "Sending..." : "Request a Free Demo"}
                  </MagneticButton>
                </form>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
