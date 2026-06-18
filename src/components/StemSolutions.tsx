"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react"; // Chevron points left in the screenshot

const fadeInUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function StemSolutions() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const solutions = [
    { 
      num: "01", 
      title: "Academic-Integrated STEM Curriculum", 
      desc: "A comprehensive syllabus mapped to school curriculum, offering hands-on learning through interactive models and physical kits.",
      features: ["Designed for Grades 1-10", "Aligns with National Education Policy (NEP)", "Continuous Assessment & Grading"]
    },
    { 
      num: "02", 
      title: "STEM Workshops", 
      desc: "Intensive, hands-on sessions focusing on robotics, coding, and electronics, guided by expert mentors to foster logical thinking and problem-solving.",
      features: ["2 to 5 Day Intensives", "Expert Industry Mentors", "Focus on Logical & Analytical Thinking"]
    },
    { 
      num: "03", 
      title: "DIY STEM Kits (via WhatsApp Store)", 
      desc: "Accessible, fully-equipped resource kits with comprehensive manuals delivered directly to students, ensuring learning continues at home.",
      features: ["Easy WhatsApp Ordering", "Step-by-step Video Tutorials", "Age-appropriate safe components"]
    },
    { 
      num: "04", 
      title: "Summer & Winter STEM Camps", 
      desc: "Immersive holiday programs where students build advanced tech projects like drones, 3D printed models, and smart automated systems.",
      features: ["Project-based Learning", "Drones & 3D Printing Modules", "End-of-Camp Competitions"]
    },
    { 
      num: "05", 
      title: "STEM Lab Setup and Support", 
      desc: "Complete school integration and establishment of AIM labs, SDDP Innovators Labs, and customized Technology Labs to modernize campuses.",
      features: ["End-to-End Infrastructure Setup", "Teacher Training & Support", "Annual Maintenance Contracts"]
    }
  ];

  const toggle = (i: number) => {
    setExpanded(expanded === i ? null : i);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
          <div className="inline-block bg-[#0A192F] text-white px-6 py-2 rounded-2xl mb-4 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">Our STEM Solutions</h2>
          </div>
          <p className="text-gray-600 italic text-sm sm:text-base font-medium ml-2">
            Flexible programs designed for schools, students, and communities
          </p>
        </motion.div>

        {/* List */}
        <div className="space-y-4 mb-16">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => toggle(i)}
              className={`p-4 sm:p-6 border-2 transition-all cursor-pointer overflow-hidden ${expanded === i ? 'rounded-[2rem] border-[#0A192F] shadow-lg' : 'rounded-full border-gray-200 hover:border-gray-300'} ${hovered === i && expanded !== i ? '-translate-x-2' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl sm:text-3xl font-light text-gray-400">{item.num}</span>
                  <h3 className="text-base sm:text-xl font-bold text-[#111]">{item.title}</h3>
                </div>
                <motion.div 
                  animate={{ rotate: expanded === i ? -90 : 0 }} 
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center flex-shrink-0"
                >
                  <ChevronLeft className="text-white w-5 h-5" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-4 pb-4 pl-[4.5rem] pr-4">
                      <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {item.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#1E293B] font-semibold bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] flex-shrink-0"></div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#111]">
            One ecosystem. Multiple solutions. Complete STEM learning.
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
