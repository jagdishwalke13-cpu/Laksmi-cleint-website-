"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: { name: string; email: string; text: string; role: string }) => void;
}

export default function FeedbackModal({ isOpen, onClose, onSubmit }: FeedbackModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [role, setRole] = useState("Student / Parent");
  const [error, setError] = useState("");

  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !text) {
      setError("Please fill in all fields.");
      return;
    }
    if (wordCount > 200) {
      setError("Feedback must be 200 words or less.");
      return;
    }
    onSubmit({ name, email, text, role });
    // Reset form
    setName("");
    setEmail("");
    setText("");
    setRole("Student / Parent");
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#FFF8F1] p-6 sm:p-8 pb-4 border-b border-[#FDBA74]/20 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1E293B]">Write Feedback</h3>
                <p className="text-[#FF7A00] font-medium text-sm mt-1">We'd love to hear from you!</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {error && (
                <div className="bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none text-[#1E293B] placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none text-[#1E293B] placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none text-[#1E293B] appearance-none font-medium"
                  >
                    <option value="Student">Student</option>
                    <option value="Parent">Parent</option>
                    <option value="Principal">Principal</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Enthusiast">Tech Enthusiast</option>
                  </select>
                </div>

                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Share your experience (max 200 words)..."
                    rows={4}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none text-[#1E293B] placeholder-gray-400 resize-none"
                  />
                  <div className={`text-right text-xs mt-1.5 font-medium ${wordCount > 200 ? 'text-red-500' : 'text-gray-400'}`}>
                    {wordCount} / 200 words
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E293B] hover:bg-[#FF7A00] text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#FF7A00]/30"
              >
                Submit Feedback <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
