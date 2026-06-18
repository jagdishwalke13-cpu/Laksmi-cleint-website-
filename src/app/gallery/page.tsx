"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = ["All", "Robotics Labs", "Tech Fests", "3D Printing", "Student Projects"];

// Helper to determine if a URL is a video
const isVideoUrl = (url: string) => url.endsWith(".mp4");

const galleryItems = [
  // --- HIGHLIGHTS (ALWAYS AT TOP OF ALL) ---
  { id: 101, category: "Robotics Labs", label: "Robotics Action", url: "/gallery/highlight_1.mp4" },
  { id: 102, category: "Tech Fests", label: "National Tech Fest", url: "/gallery/highlight_2.jpg" },
  { id: 103, category: "Student Projects", label: "Innovative Model", url: "/gallery/highlight_3.jpg" },
  { id: 104, category: "Robotics Labs", label: "Lab Activity", url: "/gallery/highlight_4.mp4" },
  { id: 105, category: "Tech Fests", label: "Exhibition Event", url: "/gallery/highlight_5.jpg" },
  { id: 106, category: "Student Projects", label: "Working Project", url: "/gallery/highlight_6.mp4" },
  { id: 107, category: "Student Projects", label: "Project Demonstration", url: "/gallery/highlight_7.mp4" },
  { id: 108, category: "Tech Fests", label: "Fest Highlights", url: "/gallery/highlight_8.mp4" },

  // --- ROBOTICS LABS ---
  { id: 201, category: "Robotics Labs", label: "Hands-on Learning", url: "/gallery/robotics_1.jpg" },
  { id: 202, category: "Robotics Labs", label: "Circuit Building", url: "/gallery/robotics_2.jpg" },
  { id: 203, category: "Robotics Labs", label: "Team Collaboration", url: "/gallery/robotics_3.jpg" },
  { id: 204, category: "Robotics Labs", label: "Arduino Setup", url: "/gallery/robotics_4.jpg" },
  { id: 205, category: "Robotics Labs", label: "Sensor Integration", url: "/gallery/robotics_5.jpg" },
  { id: 206, category: "Robotics Labs", label: "Coding Practice", url: "/gallery/robotics_6.jpg" },
  { id: 207, category: "Robotics Labs", label: "Robot Assembly", url: "/gallery/robotics_7.jpg" },
  { id: 208, category: "Robotics Labs", label: "Testing Models", url: "/gallery/robotics_8.jpg" },
  { id: 209, category: "Robotics Labs", label: "Robotics Workshop", url: "/gallery/robotics_9.jpg" },
  { id: 210, category: "Robotics Labs", label: "Classroom Training", url: "/gallery/robotics_10.jpg" },
  { id: 211, category: "Robotics Labs", label: "Final Robot", url: "/gallery/robotics_11.jpg" },
  { id: 212, category: "Robotics Labs", label: "Robot Testing", url: "/gallery/robotics_vid1.mp4" },
  { id: 213, category: "Robotics Labs", label: "Live Setup", url: "/gallery/robotics_vid2.mp4" },

  // --- TECH FESTS ---
  { id: 301, category: "Tech Fests", label: "Fest Setup", url: "/gallery/techfest_1.jpg" },
  { id: 302, category: "Tech Fests", label: "Project Display", url: "/gallery/techfest_2.jpg" },
  { id: 303, category: "Tech Fests", label: "Student Presentation", url: "/gallery/techfest_3.jpg" },
  { id: 304, category: "Tech Fests", label: "Crowd Interaction", url: "/gallery/techfest_4.jpg" },
  { id: 305, category: "Tech Fests", label: "Award Ceremony", url: "/gallery/techfest_5.jpg" },
  { id: 306, category: "Tech Fests", label: "Innovation Showcase", url: "/gallery/techfest_6.jpg" },
  { id: 307, category: "Tech Fests", label: "Tech Fest Success", url: "/gallery/techfest_7.jpg" },
  { id: 308, category: "Tech Fests", label: "Event Highlight", url: "/gallery/techfest_vid1.mp4" },

  // --- 3D PRINTING ---
  { id: 401, category: "3D Printing", label: "Printer Action", url: "/gallery/3dprint_1.jpg" },
  { id: 402, category: "3D Printing", label: "Finished Models", url: "/gallery/3dprint_2.jpg" },
  { id: 403, category: "3D Printing", label: "Calibration", url: "/gallery/3dprint_3.jpg" },
  { id: 404, category: "3D Printing", label: "Design Processing", url: "/gallery/3dprint_4.jpg" },
  { id: 405, category: "3D Printing", label: "Filament Check", url: "/gallery/3dprint_5.jpg" },
  { id: 406, category: "3D Printing", label: "Student Learning 3D", url: "/gallery/3dprint_6.jpg" },
  { id: 407, category: "3D Printing", label: "Complex Print", url: "/gallery/3dprint_7.jpg" },
  { id: 408, category: "3D Printing", label: "3D Printing Process", url: "/gallery/3dprint_vid1.mp4" },

  // --- STUDENT PROJECTS ---
  { id: 501, category: "Student Projects", label: "Smart IoT System", url: "/gallery/project_1.jpg" },
  { id: 502, category: "Student Projects", label: "Automated Device", url: "/gallery/project_2.jpg" },
  { id: 503, category: "Student Projects", label: "Sensory Setup", url: "/gallery/project_3.jpg" },
  { id: 504, category: "Student Projects", label: "Solar Vehicle", url: "/gallery/project_4.jpg" },
  { id: 505, category: "Student Projects", label: "Obstacle Avoider", url: "/gallery/project_5.jpg" },
  { id: 506, category: "Student Projects", label: "Home Automation", url: "/gallery/project_6.jpg" },
  { id: 507, category: "Student Projects", label: "Line Follower", url: "/gallery/project_7.jpg" },
  { id: 508, category: "Student Projects", label: "Smart Agriculture", url: "/gallery/project_8.jpg" },
  { id: 509, category: "Student Projects", label: "Security System", url: "/gallery/project_9.jpg" },
  { id: 510, category: "Student Projects", label: "Weather Station", url: "/gallery/project_10.jpg" },
  { id: 511, category: "Student Projects", label: "Robotic Arm", url: "/gallery/project_11.jpg" },
  { id: 512, category: "Student Projects", label: "Drone Prototype", url: "/gallery/project_12.jpg" },
  { id: 513, category: "Student Projects", label: "Student Creation", url: "/gallery/project_13.jpg" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{url: string, label: string} | null>(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FFF8F1]">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-4 md:px-10 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFB547]/30 via-[#FFF8F1] to-[#FFF8F1]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-sm font-bold text-[#FF7A00] tracking-widest uppercase mb-4 block">Our Impact</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1E293B] mb-6 tracking-tight">Innovation in Action.</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Explore our journey of transforming curiosity into real-world creations across schools and tech fests. See our young innovators at work.
          </p>
        </motion.div>
      </section>

      {/* DYNAMIC FILTER BAR */}
      <section className="sticky top-24 z-40 px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/50 backdrop-blur-md rounded-full px-2 py-2 mx-auto w-max border border-white/40 shadow-lg shadow-[#1E293B]/5 flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto no-scrollbar"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#1E293B] text-white shadow-md"
                  : "bg-transparent text-[#1E293B] hover:text-[#FF7A00]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      {/* MASSIVE MASONRY GRID */}
      <section className="pb-24 px-4 md:px-10 max-w-[1400px] mx-auto">
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isVideo = isVideoUrl(item.url);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer group bg-black/5"
                  onClick={() => setSelectedItem({ url: item.url, label: item.label })}
                >
                  {isVideo ? (
                    <>
                      <video 
                        src={item.url} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full p-2 text-white">
                        <Play className="w-4 h-4 fill-white" />
                      </div>
                    </>
                  ) : (
                    <img 
                      src={item.url} 
                      alt={item.label} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{item.label}</h3>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-[#FF7A00]/50 rounded-3xl transition-all duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl flex flex-col items-center shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideoUrl(selectedItem.url) ? (
                <video 
                  src={selectedItem.url} 
                  controls 
                  autoPlay 
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-3xl bg-black"
                />
              ) : (
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.label} 
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-3xl bg-black" 
                />
              )}
              
              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                <p className="text-white text-3xl font-bold text-center tracking-tight">{selectedItem.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM CALL-TO-ACTION */}
      <section className="pb-24 px-4 md:px-10">
        <div className="max-w-5xl mx-auto bg-[#1E293B] rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF7A00]/20 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Inspired by our young innovators?<br className="hidden md:block"/> Bring the Robotonic SDDP to your school today.
            </h2>
            <Link href="/contact">
              <motion.button 
                animate={{ boxShadow: ["0px 0px 0px rgba(255,122,0,0)", "0px 0px 30px rgba(255,122,0,0.6)", "0px 0px 0px rgba(255,122,0,0)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#FF7A00] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#FFB547] transition-colors"
              >
                Request a Free Demo
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
