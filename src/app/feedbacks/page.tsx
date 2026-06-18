"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Quote } from "lucide-react";
import Link from "next/link";
import { AnimeAnimatedCard, StaggeredHeading } from "@/components/AnimeComponents";

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/feedback.php?t=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFeedbacks(data);
        }
        setLoading(false);
      })
      .catch(e => {
        console.error("Error fetching feedbacks:", e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F1] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF7A00] transition-colors mb-8 font-medium">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <StaggeredHeading text="What People Say About Us" className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl">
            Hear directly from students, parents, and educators who have experienced the magic of hands-on learning with SDDP ROBOTONIC INNOVATIONS LLP.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FF7A00]"></div>
          </div>
        ) : feedbacks.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-lg">No feedbacks available yet.</p>
          </div>
        ) : (
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {feedbacks.map((fb, index) => (
              <motion.div key={fb.id || index} variants={fadeInUp} className="h-full">
                <AnimeAnimatedCard className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                    <Quote className="w-24 h-24 text-[#FF7A00]" />
                  </div>
                  
                  <div className="flex-1 relative z-10 mb-8">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{fb.feedback || fb.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {(fb.name || fb.author || "U").charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{fb.name || fb.author || "Anonymous"}</h4>
                      <p className="text-sm text-[#FF7A00] font-medium">{fb.role || "Enthusiast"}</p>
                    </div>
                  </div>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        )}
        
      </div>
    </div>
  );
}
