"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF8F1] min-h-screen text-[#1E293B]">
      
      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-orange-500/10">
        <div className="max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-4"
          >
            Legal & Compliance
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#1E293B] mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 font-medium"
          >
            Effective Date: May 2026. Learn how SDDP ROBOTONIC INNOVATIONS LLP protects and manages your data.
          </motion.p>
        </div>
      </section>

      {/* CONTENT BODY */}
      <section className="max-w-3xl mx-auto px-6 pb-32 pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-12 text-lg text-gray-700 leading-relaxed font-normal"
        >
          
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1E293B] mb-4 border-l-4 border-[#FF7A00] pl-4">1. Information We Collect</h2>
            <p className="mb-4">
              At SDDP ROBOTONIC INNOVATIONS LLP, we prioritize your privacy. We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our STEM programs, when you participate in activities on the Services (such as requesting a demo or lab setup), or otherwise when you contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and may include:
            </p>
            <ul className="list-disc pl-10 mt-4 space-y-2 marker:text-[#FF7A00]">
              <li>Names and Contact Data (including email addresses and phone numbers)</li>
              <li>Educational Institutional affiliations (e.g., School name, role as Parent or Principal)</li>
              <li>Inquiry messages regarding Atal Tinkering Lab setups or DIY kits.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1E293B] mb-4 border-l-4 border-[#FF7A00] pl-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the data we collect or receive:
            </p>
            <ul className="list-disc pl-10 mt-4 space-y-2 marker:text-[#FF7A00]">
              <li>To provide, operate, and maintain our STEM education services.</li>
              <li>To process and manage Atal Lab setup requests efficiently.</li>
              <li>To communicate with you regarding national tech fests, science workshops, and schedule free demos.</li>
              <li>To respond to your inquiries and offer dedicated support.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1E293B] mb-4 border-l-4 border-[#FF7A00] pl-4">3. Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. We are committed to ensuring that student and school data remains highly confidential and is protected using industry-standard protocols.
            </p>
            <p>
              <strong>SDDP ROBOTONIC INNOVATIONS LLP will never sell, rent, or lease your personal information to third parties.</strong> However, please remember that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#FFB547]/20 mt-16">
            <h2 className="text-2xl font-semibold text-[#1E293B] mb-4">4. Contact Us for Privacy Concerns</h2>
            <p className="mb-6">
              If you have any questions, comments, or concerns about this Privacy Policy, please do not hesitate to contact us at:
            </p>
            
            <address className="not-italic space-y-3 text-[#1E293B] font-medium">
              <p><strong>Company:</strong> SDDP ROBOTONIC INNOVATIONS LLP</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:Robotonicinnovationsddp@gmail.com" className="text-[#FF7A00] hover:underline transition-all break-all">
                  Robotonicinnovationsddp@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:9731554348" className="text-[#FF7A00] hover:underline transition-all">
                  9731554348
                </a>
              </p>
              <p>
                <strong>Address:</strong><br/>
                <span className="text-gray-600 block mt-1">
                  #253 8th Cross near sri doddamma devi temple,<br/>
                  ramamurthy nagar, bangalore 560016
                </span>
              </p>
            </address>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
