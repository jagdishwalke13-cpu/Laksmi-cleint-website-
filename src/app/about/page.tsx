"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Send, GraduationCap, Users, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* =========================================
   ADVANCED UI COMPONENTS
========================================= */

// Mouse-Tracking Glowing Bento Box
const GlowingBento = ({ children, className = "", bgImage = "" }: { children: React.ReactNode, className?: string, bgImage?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-[2rem] border border-[#FFB547]/30 bg-white/40 backdrop-blur-xl shadow-lg transition-all duration-500 hover:scale-[1.01] ${className}`}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Bento Background" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      )}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 122, 0, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

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

// Scroll Fill Text Component
const ScrollFillText = ({ children }: { children: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });

  const words = children.split(" ");

  return (
    <p ref={ref} className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight flex flex-wrap gap-x-4 gap-y-2">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        const color = useTransform(scrollYProgress, [start, end], ["#475569", "#FFF8F1"]);
        
        return (
          <motion.span key={i} style={{ opacity, color }} className="relative">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

/* =========================================
   PAGE COMPONENT
========================================= */

export default function AboutAndContactPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#FFF8F1] min-h-screen text-[#1E293B]">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF7A00] origin-left z-[100]" style={{ scaleX }} />

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen pt-32 pb-10 flex flex-col justify-between overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="overflow-hidden pb-4 mb-2 sm:mb-4">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#1E293B] leading-tight"
              >
                Empowering Today.
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FF7A00] leading-tight"
              >
                Building a Skillful India Tomorrow.
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 font-medium max-w-3xl leading-relaxed"
            >
              SDDP ROBOTONIC INNOVATIONS LLP is an educational technology company based in Bangalore. The company operates under the SDDP Innovation Program and was established with the goal of bringing hands-on, practical, and experience-based learning to school students across India.
            </motion.p>
          </motion.div>
        </div>

        {/* Massive edge-to-edge image reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 w-full px-4 sm:px-8"
        >
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              src="/images/about/hero.png" 
              alt="Robotonic Innovation Lab" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE PHILOSOPHY (Advanced Bento Grid) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1E293B] mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600">The core pillars of our educational approach.</p>
          </div>

          <div className="grid md:grid-cols-4 md:grid-rows-2 gap-6 mt-12 h-auto md:h-[600px]">
            
            {/* Bento 1: Large Image */}
            <GlowingBento className="md:col-span-2 md:row-span-2 p-10 flex flex-col justify-end" bgImage="/images/about/state_of_art_labs.png">
              <h3 className="text-3xl font-bold text-white relative z-10 mb-4">State-of-the-art Labs</h3>
              <p className="text-lg text-white/90 font-medium max-w-md drop-shadow-md">We believe education should be thrilling. Our kits transform complex theories into exciting, hands-on challenges.</p>
            </GlowingBento>

            {/* Bento 2: Text Heavy */}
            <GlowingBento className="md:col-span-2 md:row-span-1 p-10 flex flex-col justify-center bg-white">
              <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-[#FF7A00]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-3">Practical Science</h3>
              <p className="text-gray-600 font-medium">Using fundamental science as our foundation, we develop creative models that make concepts easy to grasp and instantly applicable.</p>
            </GlowingBento>

            {/* Bento 3: Small Stats */}
            <GlowingBento className="md:col-span-1 md:row-span-1 p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#FF7A00] to-[#FFB547]">
              <Users className="h-10 w-10 text-white mb-4" />
              <h3 className="text-3xl font-black text-white mb-1">Grades 1-10</h3>
              <p className="text-white/80 font-bold uppercase tracking-wider text-sm">Focus Range</p>
            </GlowingBento>

            {/* Bento 4: Small Stats */}
            <GlowingBento className="md:col-span-1 md:row-span-1 p-8 flex flex-col items-center justify-center text-center bg-white">
              <Clock className="h-10 w-10 text-[#FF7A00] mb-4" />
              <h3 className="text-3xl font-black text-[#1E293B] mb-1">20-30</h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Interactive Sessions</p>
            </GlowingBento>

          </div>
        </div>
      </section>

      {/* 3. THE EXECUTION (Sticky Scroll Timeline) */}
      <section className="py-32 relative bg-white rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column (Sticky) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky top-40 space-y-6">
                <div className="w-16 h-2 bg-[#FF7A00] rounded-full"></div>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-[#1E293B] leading-tight">
                  How We Build Innovators
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Our structured approach ensures every student masters the curriculum through tangible execution.
                </p>
              </div>
            </div>

            {/* Right Column (Scrolling Cards) */}
            <div className="lg:col-span-7 space-y-8 py-10">
              {[
                { step: "01", title: "Logical Thinking", desc: "We believe a student's curiosity and search for logic naturally drives them toward solving real-world problems, and we channel that curiosity productively." },
                { step: "02", title: "Competition Participation", desc: "We take on projects for schools, science fairs, and national and international tech fests with a team of engineering professionals." },
                { step: "03", title: "Teaching Aids", desc: "We create outstanding teaching tools specifically designed to support school teachers in explaining complex concepts more effectively in classrooms." },
                { step: "04", title: "Think Big", desc: "We work on actual engineering and industrial projects, exposing students to challenges that go well beyond a typical school curriculum." }
              ].map((card, i) => {
                return (
                  <ScrollingCard key={i} card={card} />
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE INNOVATOR'S MANIFESTO (Immersive Dark Mode) */}
      <section className="py-40 bg-[#1E293B] relative overflow-hidden">
        {/* Decorative blur rings */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7A00]/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollFillText>
            Robotics teaches more than just coding and mechanics — it teaches life skills like patience, planning, teamwork, and resilience. Mistakes are learning opportunities, not failures. Innovation is not just about machines — it's about improving lives, helping people, and making the world a better place. – The Robotonic Innovation SDDP Team.
          </ScrollFillText>
        </div>
      </section>

    </div>
  );
}

// Sub-component for Sticky Scroll Cards
function ScrollingCard({ card }: { card: { step: string, title: string, desc: string } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <div 
      ref={ref}
      className={`p-10 rounded-[2rem] border transition-all duration-500 ease-out flex items-start gap-8 ${
        isInView 
          ? "bg-[#FFF8F1] border-[#FF7A00]/30 shadow-2xl scale-100 opacity-100" 
          : "bg-gray-50 border-gray-100 shadow-none scale-95 opacity-40"
      }`}
    >
      <div className={`text-6xl font-black transition-colors duration-500 ${isInView ? "text-[#FF7A00]" : "text-gray-300"}`}>
        {card.step}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-[#1E293B] mb-4">{card.title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">{card.desc}</p>
      </div>
    </div>
  );
}
