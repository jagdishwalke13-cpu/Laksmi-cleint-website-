"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Bot, Cpu, Radio, ShieldCheck, PenTool, Database, Code, Globe, Terminal, Layers,
  ChevronRight, ArrowRight, Plane, Printer, Zap, Building, Brain
} from "lucide-react";
import Image from "next/image";

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
      className={`relative overflow-hidden rounded-3xl border border-[#FFB547]/30 bg-white/40 backdrop-blur-xl shadow-lg transition-transform duration-500 hover:scale-[1.02] ${className}`}
    >
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Bento Background" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
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

// Magnetic Hover Button
const MagneticButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
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
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative z-50 ${className}`}
    >
      {children}
    </motion.button>
  );
};

/* =========================================
   PAGE COMPONENT
========================================= */

export default function ProgramsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-[#FFF8F1] min-h-screen text-[#1E293B]">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF7A00] origin-left z-[100]" style={{ scaleX }} />

      {/* 1. IMMERSIVE HERO REVEAL */}
      <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-40 md:pt-20 pb-20 md:pb-0">
        {/* Animated Glowing Orb */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7A00]/20 blur-[120px] rounded-full pointer-events-none"
        />
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8"
          >
            {"Engineering the Innovators of Tomorrow.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -90 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                className="text-6xl md:text-8xl font-extrabold tracking-tight text-[#1E293B]"
                style={{ display: "inline-block" }}
              >
                {word === "Innovators" || word === "Tomorrow." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFB547]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Explore our cutting-edge STEM programs designed to transform fundamental science into tangible, real-world mastery for grades 1-10.
          </motion.p>
        </div>
      </section>

      {/* 2. ROBOTICS & AUTOMATION (Sticky Scroll) */}
      <section className="py-24 relative z-20 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Sticky Image */}
            <div className="lg:sticky top-32 h-[50vh] lg:h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img src="/images/programs/robotics_automation.png" alt="Robotics class" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 to-transparent flex items-end p-10">
                <h2 className="text-4xl font-bold text-white">Robotics & Automation</h2>
              </div>
            </div>

            {/* Right: Scrolling Content */}
            <div className="space-y-12 lg:space-y-32 py-12 lg:py-24">
              {[
                { title: "Defining Robotics", desc: "We challenge the misconception that robots must look human. A robot is any system designed to efficiently perform its intended functions—like an automated arm.", icon: <Cpu className="w-8 h-8 text-[#FF7A00]"/> },
                { title: "Hardware & Software", desc: "Students learn about electronics, mechanics, and how robots are built, understanding how hardware and software work together.", icon: <Radio className="w-8 h-8 text-[#FF7A00]"/> },
                { title: "Creative Competitions", desc: "Competitions push students to create improved, innovative designs, thinking creatively and problem-solving under pressure.", icon: <Bot className="w-8 h-8 text-[#FF7A00]"/> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#FFF8F1]/80 backdrop-blur-md p-10 rounded-3xl border border-white shadow-xl shadow-orange-500/5 hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#1E293B] mb-4">{item.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. ELECTRONICS MASTERY (Advanced Bento Grid) */}
      <section className="py-24 bg-[#FFF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1E293B] mb-4">Electronics Mastery</h2>
            <p className="text-xl text-gray-600">Powering the circuits of the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Bento Item 1: Large */}
            <GlowingBento className="md:col-span-2 md:row-span-2 p-10 flex flex-col justify-end" bgImage="/images/programs/electronics_mastery.png">
              <h3 className="text-3xl font-bold text-[#1E293B] mb-2">From Foundation to Creation</h3>
              <p className="text-lg text-gray-700 font-medium max-w-md">Introduce students to electronics from the ground up. Interactive models clarify key concepts and motivate children by relating studies to daily life.</p>
            </GlowingBento>

            {/* Bento Item 2: Small */}
            <GlowingBento className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-center items-center text-center">
              <Cpu className="w-12 h-12 text-[#FF7A00] mb-4" />
              <h3 className="text-xl font-bold text-[#1E293B]">Make PCBs & Solder</h3>
            </GlowingBento>

            {/* Bento Item 3: Small */}
            <GlowingBento className="md:col-span-1 md:row-span-1 p-8 flex flex-col justify-center items-center text-center">
              <Zap className="w-12 h-12 text-[#FF7A00] mb-4" />
              <h3 className="text-xl font-bold text-[#1E293B]">Fix Household Gadgets</h3>
            </GlowingBento>
          </div>
        </div>
      </section>

      {/* 4. AERO STAR PROGRAM (Cinematic Parallax) */}
      <ParallaxAeroSection />

      {/* 5. 3D PRINTING & CAD (Expanding Accordion) */}
      <ExpandingAccordionSection />

      {/* 6. ADVANCED TECH & AI (Dark Mode / Cyberpunk UI) */}
      <section className="py-32 bg-[#1E293B] text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFB547] drop-shadow-[0_0_15px_rgba(255,122,0,0.5)]">
              Advanced Tech: Coding the Future
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Artificial Intelligence & ML" },
              { icon: Radio, title: "Internet of Things (IoT)" },
              { icon: Terminal, title: "App & Web Development" },
              { icon: Bot, title: "Webcam & Radar Robots" },
              { icon: Globe, title: "Voice & Gesture Control" }
            ].map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[#FF7A00]/50 hover:shadow-[0_0_30px_rgba(255,122,0,0.2)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <tech.icon className="w-12 h-12 text-[#FFB547] mb-6 group-hover:animate-pulse transition-all" />
                <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400">Master the code that powers the modern digital world.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ATAL LAB SETUP (Floating Magnetic CTA) */}
      <section className="py-32 bg-[#FFF8F1] relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(255,122,0,0.08)] border border-[#FFB547]/30 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFB547]/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <Building className="w-20 h-20 text-[#FF7A00] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mb-6">Innovative Lab Setup for Schools</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Aligned with Atal Innovation Mission (AIM) to build state-of-the-art STEM & Math Labs globally.
              </p>
              
              <div className="flex justify-center">
                <MagneticButton className="bg-[#FF7A00] text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-[#FF7A00]/30 hover:bg-[#FFB547] flex items-center gap-3">
                  Request a Lab Setup Proposal <ArrowRight className="w-6 h-6" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* =========================================
   SUB-COMPONENTS
========================================= */

function ParallaxAeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="/images/programs/aerostar.png" 
          alt="Science Projects" 
          className="w-full h-[140%] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#1E293B]/40 z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-20 bg-white/20 backdrop-blur-xl border border-white/30 p-10 md:p-16 rounded-3xl text-center max-w-3xl mx-4 shadow-2xl"
      >
        <Bot className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-5xl font-extrabold text-white mb-4">Science Projects</h2>
        <p className="text-xl text-white/90 font-medium">Solar-powered fan cap, Arduino-based cars, sensor-driven systems — yeh sab student-built projects hain jo science fairs aur tech fests mein showcase hote hain.</p>
      </motion.div>
    </section>
  );
}

function ExpandingAccordionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  
  const cards = [
    { title: "Core STL Concepts", img: "/images/programs/accordion/img1.png" },
    { title: "Slicing & Settings", img: "/images/programs/accordion/img2.png" },
    { title: "SLA, SLS, FDM, PolyJet", img: "/images/programs/accordion/img3.png" },
    { title: "Live Hands-on Demo", img: "/images/programs/accordion/img4.png" }
  ];

  return (
    <section className="py-24 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#1E293B] mb-4">3D Printing & CAD</h2>
          <p className="text-xl text-gray-600">Bringing digital designs into the physical world.</p>
        </div>

        <div className="flex flex-col md:flex-row h-[600px] w-full gap-4">
          {cards.map((card, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredIndex(i)}
              onClick={() => setHoveredIndex(i)}
              className={`relative overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer ${hoveredIndex === i ? 'flex-[3]' : 'flex-[1]'}`}
            >
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredIndex === i ? 'bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/40 to-transparent' : 'bg-[#1E293B]/60'}`}></div>
              
              <div className="absolute bottom-0 left-0 p-4 sm:p-8 w-full">
                <div className={`flex items-center gap-3 sm:gap-4 transition-transform duration-700 ${hoveredIndex === i ? 'translate-y-0' : 'translate-y-2 sm:translate-y-4'}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF7A00] flex items-center justify-center flex-shrink-0">
                    <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className={`font-bold text-white transition-all duration-700 ${hoveredIndex === i ? 'text-lg sm:text-3xl opacity-100' : 'text-base sm:text-xl opacity-100 md:-rotate-90 md:translate-y-[-100px] md:-translate-x-12 md:whitespace-nowrap origin-bottom-left'}`}>
                    {card.title}
                  </h3>
                </div>
                {hoveredIndex === i && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-200 mt-2 sm:mt-4 text-xs sm:text-base max-w-sm"
                  >
                    Explore the intricate depths of 3D printing technologies and turn your virtual CAD models into physical reality.
                  </motion.p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
