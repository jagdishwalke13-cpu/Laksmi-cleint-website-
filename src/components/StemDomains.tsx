"use client";

import { motion, Variants } from "framer-motion";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function StemDomains() {
  const domains = [
    {
      num: "1",
      title: "Engineering",
      whyTitle: "Why it comes first:",
      whyDesc: "Builds the mindset of how things are made",
      whatTitle: "What they learn:",
      whatDesc: "Structures, forces, mechanisms, and basic design principles through hands-on construction and problem-solving.",
      bullets: "Build • Design • Think",
      img: "/images/indian_robotics_fest.png",
      align: "left", // Text on left, image on right
      shapes: "engineering"
    },
    {
      num: "2",
      title: "Electronics",
      whyTitle: "Why it matters:",
      whyDesc: "Powers modern technology",
      whatTitle: "What they learn:",
      whatDesc: "Circuits, components, current flow, and signal logic by building and testing real electronic systems.",
      bullets: "Power • Connect • Control",
      img: "/images/indian_arduino_project.png",
      align: "right", // Text on right, image on left
      shapes: "electronics"
    },
    {
      num: "3",
      title: "Aerodynamics",
      whyTitle: "Why it expands thinking:",
      whyDesc: "Applies science in motion",
      whatTitle: "What they learn:",
      whatDesc: "Aerodynamics, balance, propulsion, and control systems through aircraft design and flight testing.",
      bullets: "Flight • Balance • Motion",
      img: "/images/indian_aeromodels.png",
      align: "left", // Text on left, image on right
      shapes: "aerodynamics"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="px-4 sm:px-0 mb-12 sm:mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-gray-300"></div>
              <p className="text-[10px] sm:text-sm font-bold text-gray-700 uppercase tracking-wider max-w-[200px] sm:max-w-none">
                8 - Interconnected STEM Domains to solve real world problems
              </p>
            </div>
          </motion.div>
        </div>

        {/* Domains List */}
        <div className="space-y-20 sm:space-y-32">
          {domains.map((domain, index) => {
            const isLeftText = domain.align === "left";

            return (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="relative w-full min-h-[380px] sm:min-h-[450px] flex items-center"
              >
                {/* 
                  Mobile Layout Structure:
                  We use absolute positioning to achieve the exact overlapping look from the screenshot.
                  The Text Box takes about 60% of width, and the Image takes the remaining 50% (overlapping slightly).
                */}

                {/* TEXT BOX */}
                <motion.div 
                  variants={fadeInUp} 
                  className={`absolute top-4 bottom-4 w-[65%] sm:w-[50%] bg-[#F6F7F9] z-20 flex flex-col justify-center p-5 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                    ${isLeftText 
                      ? "left-0 rounded-r-[2rem] sm:rounded-3xl" 
                      : "right-0 rounded-l-[2rem] sm:rounded-3xl"
                    }
                  `}
                >
                  <h3 className="text-2xl sm:text-4xl font-bold text-[#111] mb-4 sm:mb-8 tracking-tight">
                    {domain.num}. {domain.title}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-6 mb-6 sm:mb-8">
                    <div>
                      <h4 className="font-bold text-[#111] text-[11px] sm:text-lg block sm:inline">{domain.whyTitle}</h4>
                      <span className="text-gray-600 text-[11px] sm:text-lg sm:ml-2 block sm:inline leading-snug">{domain.whyDesc}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111] text-[11px] sm:text-lg block sm:inline">{domain.whatTitle}</h4>
                      <span className="text-gray-600 text-[11px] sm:text-lg sm:ml-2 block sm:inline leading-snug">{domain.whatDesc}</span>
                    </div>
                  </div>
                  
                  <p className="text-[13px] sm:text-2xl font-bold text-[#111] mt-auto">
                    {domain.bullets}
                  </p>
                </motion.div>

                {/* IMAGE BOX */}
                <motion.div 
                  variants={fadeInUp} 
                  className={`absolute top-0 bottom-0 w-[55%] sm:w-[50%] z-10 flex items-center justify-center
                    ${isLeftText ? "right-0" : "left-0"}
                  `}
                >
                  {/* Dark Blue Background Accent behind image */}
                  <div className={`absolute top-10 bottom-0 bg-[#0A192F] z-0
                    ${isLeftText ? "left-4 right-0 rounded-tl-[4rem] rounded-bl-[2rem]" : "right-4 left-0 rounded-tr-[4rem] rounded-br-[2rem]"}
                  `}></div>

                  {/* Image itself */}
                  <div className={`relative w-full h-[85%] z-10 overflow-hidden shadow-lg
                    ${isLeftText ? "rounded-l-[2rem] sm:rounded-3xl" : "rounded-r-[2rem] sm:rounded-3xl"}
                  `}>
                    <img 
                      src={domain.img} 
                      alt={domain.title} 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  
                  {/* Decorative Shapes specific to each domain based on screenshot */}
                  {domain.shapes === 'engineering' && (
                    <>
                      {/* Top Left Blue Star */}
                      <div className="absolute top-0 left-[-10%] w-12 h-12 sm:w-16 sm:h-16 bg-[#00A3FF] z-30" 
                           style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: 'rotate(-15deg)' }}></div>
                      {/* Bottom Right Red Blob */}
                      <div className="absolute -bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#FF4B4B] z-30 rounded-[35%] rotate-12" 
                           style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%' }}></div>
                    </>
                  )}
                  {domain.shapes === 'electronics' && (
                    <>
                      {/* Top Left Red Half-circles */}
                      <div className="absolute top-4 left-[-15%] flex gap-1 z-30 rotate-[-15deg]">
                        <div className="w-4 h-10 sm:w-6 sm:h-14 bg-[#FF4B4B] rounded-l-full"></div>
                        <div className="w-4 h-10 sm:w-6 sm:h-14 bg-[#FF4B4B] rounded-l-full mt-2"></div>
                      </div>
                      {/* Bottom Right Blue Wave */}
                      <div className="absolute bottom-8 right-[-10%] w-16 h-4 sm:w-24 sm:h-6 z-30"
                           style={{ background: 'radial-gradient(circle at 10px 0, transparent 10px, #00A3FF 11px)', backgroundSize: '20px 20px' }}></div>
                    </>
                  )}
                  {domain.shapes === 'aerodynamics' && (
                    <>
                      {/* Top Left Red Star */}
                      <div className="absolute top-1/4 left-[-10%] w-12 h-12 sm:w-16 sm:h-16 bg-[#FF4B4B] z-30" 
                           style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', transform: 'rotate(15deg)' }}></div>
                      {/* Bottom Right Blue 3-slice */}
                      <div className="absolute -bottom-2 right-4 flex z-30">
                        <div className="w-4 h-8 sm:w-6 sm:h-12 bg-[#00A3FF] rounded-l-full shadow-[-2px_0_0_#fff]"></div>
                        <div className="w-4 h-8 sm:w-6 sm:h-12 bg-[#00A3FF] rounded-l-full shadow-[-2px_0_0_#fff] -ml-1"></div>
                        <div className="w-4 h-8 sm:w-6 sm:h-12 bg-[#00A3FF] rounded-l-full shadow-[-2px_0_0_#fff] -ml-1"></div>
                      </div>
                    </>
                  )}

                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
