"use client";

import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Play, Cpu, Brain, Printer, Plane, Zap, Building, 
  CheckCircle2, Users, BookOpen, Layers, Plus, Minus, Mail, Phone, MapPin,
  MessageSquare, Quote
} from "lucide-react";
import { useState } from "react";
import { 
  TextRotator, FloatingImage, StaggeredHeading, AnimeMagneticButton, AnimeAnimatedCard 
} from "@/components/AnimeComponents";
import StemSolutions from "@/components/StemSolutions";

// Fade in up animation variant
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FFF8F1] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 z-10">
        <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFB547]/30 via-transparent to-transparent -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E293B] leading-[1.1]">
                Innovating the Future with{" "}
                <TextRotator phrases={["Robotics & Automation.", "AI & Machine Learning.", "IoT & Smart Gadgets.", "3D Printing & CAD."]} />
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
                Empowering Indian students through hands-on DIY Robotics, AI, and Tech Projects.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <AnimeMagneticButton className="bg-[#FF7A00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FFB547] hover:shadow-xl hover:shadow-[#FF7A00]/30 transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Programs <ArrowRight className="h-5 w-5" />
                </AnimeMagneticButton>
                <Link href="/gallery" className="w-full sm:w-auto">
                <AnimeMagneticButton className="w-full sm:w-auto bg-white text-[#1E293B] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 border border-gray-100">
                  <Play className="h-5 w-5 text-[#FF7A00] fill-[#FF7A00]" /> Watch Demo
                </AnimeMagneticButton>
              </Link>
              </motion.div>
            </motion.div>

            {/* Right: Bento Box Collage (using Anime Floating Images) */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative h-[500px] sm:h-[600px] w-full">
              <div className="absolute inset-0 bg-[#FFB547]/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
              
              <FloatingImage 
                duration={3000} delay={0}
                src="/images/hero_collage/img1.png" 
                alt="Robotonic Innovation students" 
                className="absolute top-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 object-cover" 
              />
              <FloatingImage 
                duration={4000} delay={500}
                src="/images/hero_collage/img2.png" 
                alt="Robotonic Innovation practical project" 
                className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-30 object-cover" 
              />
              <FloatingImage 
                duration={3500} delay={1000}
                src="/images/hero_collage/img3.png" 
                alt="Robotonic Innovation learning" 
                className="absolute top-1/4 left-[10%] w-[35%] h-[35%] rounded-full overflow-hidden shadow-xl border-4 border-white z-10 object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS */}
      <section className="relative z-20 -mt-10 sm:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 sm:p-12 shadow-xl shadow-orange-500/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50">
              {[
                { label: "Partner Schools", value: "50+" },
                { label: "Students Guided", value: "10,000+" },
                { label: "Practical Learning", value: "100%" },
                { label: "STEM Modules", value: "20+" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-[#FF7A00] mb-2">{stat.value}</h3>
                  <p className="text-sm sm:text-base text-[#1E293B] font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT COMPANY */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <StaggeredHeading text="We turn curiosity into real-world creations." className="text-4xl sm:text-5xl font-extrabold text-[#1E293B]" />
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Robotonic Innovations SDDP is an educational technology company introducing a cutting-edge approach. We emphasize hands-on learning, transitioning fundamental science into practical models.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE SERVICES */}
      <section className="py-24 bg-white rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Our Robotics & Automation Solutions" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Comprehensive hands-on programs designed for the innovators of tomorrow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Robotics & Automation", desc: "Focus on mechanics, precision, and building physical functioning models." },
              { icon: Brain, title: "Artificial Intelligence & ML", desc: "Introduction to machine learning, AI concepts, and smart programming." },
              { icon: Printer, title: "3D Printing", desc: "Master SLA, FDM, and CAD software to print your own parts." },
              { icon: Plane, title: "Aeromodelling", desc: "Aero Star Program: Build and fly your own drones and aircraft." },
              { icon: Zap, title: "Electronics", desc: "Learn PCB making, circuit design, and professional soldering." },
              { icon: Building, title: "Atal Lab Setup", desc: "Establishing AIM labs, SDDP Innovators Labs, STEM Labs, Math Labs, and Technology Labs in schools." }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <AnimeAnimatedCard className="bg-[#FFF8F1] p-8 rounded-3xl border border-transparent hover:border-white shadow-sm h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#FF7A00]">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="pt-4 sm:pt-12 pb-24 bg-[#F8FAFC]">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] py-12 px-4 sm:p-16 max-w-7xl mx-auto shadow-sm">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E293B] mb-4 sm:mb-6">Our Core Learning Domains</h2>
            <p className="text-base sm:text-xl text-gray-600">Transforming traditional education through practical, project-based learning across multiple disciplines.</p>
          </div>

          <div className="space-y-10 sm:space-y-24">
          {[
            { title: "Electronics", desc: "Master the fundamentals of circuit design, microcontrollers, and modern electronics. Students learn to build, test, and troubleshoot real-world electronic systems.", img: "/images/domains/electronics.png", reverse: false },
            { title: "Practical Science", desc: "Move beyond textbooks. We provide tangible kits so students can physically build what they learn, cementing complex scientific principles through immediate application.", img: "/images/domains/practical_science.png", reverse: true },
            { title: "Aeromodeling", desc: "Take flight with hands-on aerodynamics. Students design, assemble, and fly their own model aircraft, learning the physics of flight and structural engineering.", img: "/images/domains/aeromodeling.png", reverse: false },
            { title: "3D Printing", desc: "Bring imagination to reality. Learn computer-aided design (CAD) and operate 3D printers to rapid-prototype custom parts and innovative models.", img: "/images/domains/3d_printing.png", reverse: true },
            { title: "IoT Models", desc: "Connect the physical and digital worlds. Build smart devices and sensor networks that collect data and automate tasks using the Internet of Things.", img: "/images/domains/iot_models.png", reverse: false },
            { title: "Coding", desc: "Develop computational thinking. From block-based programming for beginners to advanced text-based languages, we teach students how to write efficient, bug-free code.", img: "/images/domains/coding.png", reverse: true },
            { title: "Space Science", desc: "Explore the cosmos. Engage with astronomy, satellite communications, and rocketry basics to inspire the next generation of space explorers and engineers.", img: "/images/domains/space_science.png", reverse: false },
            { title: "Engineering", desc: "Apply math and science to solve real-world problems. Our engineering curriculum covers mechanical design, structural integrity, and project management.", img: "/images/domains/engineering.png", reverse: true }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className={`flex ${item.reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-4 sm:gap-12 lg:gap-20`}>
              <motion.div variants={fadeInUp} className="w-1/2">
                <div className="w-6 sm:w-12 h-1 bg-[#FF7A00] mb-2 sm:mb-6"></div>
                <h3 className="text-lg sm:text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-xs sm:text-base md:text-lg text-gray-600 leading-tight sm:leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                <ul className="space-y-1 sm:space-y-3 pt-2 sm:pt-4 border-t border-gray-100">
                  <li className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-base text-[#1E293B] font-medium"><CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-[#FF7A00] shrink-0" /> <span className="truncate">SDDP Innovators Program</span></li>
                  <li className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-base text-[#1E293B] font-medium"><CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5 text-[#FF7A00] shrink-0" /> <span className="truncate">Expert Mentorship</span></li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} className="w-1/2 relative">
                <img src={item.img} alt={item.title} className="w-full h-auto rounded-xl sm:rounded-3xl shadow-xl sm:shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[4px] sm:border-[8px] border-white hover:scale-[1.02] transition-transform duration-500" />
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white rounded-[3rem] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Educational Sectors We Serve" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Tailored solutions for every level of the educational ecosystem.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "K-12 Schools", sub: "Academic Integration" },
              { icon: Building, title: "Govt Initiatives", sub: "Atal Innovation Mission" },
              { icon: Users, title: "STEM Institutes", sub: "Private Learning Centers" },
              { icon: Layers, title: "B2C Home Kits", sub: "Individual Learning" }
            ].map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <AnimeAnimatedCard className="bg-[#FFF8F1] p-8 rounded-3xl text-center border border-white shadow-sm h-full">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <ind.icon className="h-8 w-8 text-[#FF7A00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-2">{ind.title}</h3>
                  <p className="text-sm text-[#FF7A00] font-semibold uppercase tracking-wider">{ind.sub}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED PROJECTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Student Showcase" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
            <p className="text-lg text-gray-600">Real projects built by our talented innovators.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { img: "/images/student_showcase/img1.jpg", title: "Bluetooth Controlled Robot", h: "h-[400px]" },
              { img: "/images/student_showcase/img2.jpg", title: "Smart Dustbin", h: "h-[300px]" },
              { img: "/images/student_showcase/img3.jpg", title: "Aeromodels", h: "h-[450px]" },
              { img: "/images/student_showcase/img4.jpg", title: "Webcam Surveillance Robot", h: "h-[350px]" },
              { img: "/images/student_showcase/img5.jpg", title: "Obstacle Avoidance Robot", h: "h-[400px]" },
              { img: "/images/student_showcase/img6.jpg", title: "Arduino Smart Home", h: "h-[300px]" }
            ].map((proj, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative group rounded-3xl overflow-hidden w-full ${proj.h} shadow-lg break-inside-avoid border-4 border-white`}>
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.5 }} 
            className="mt-16 flex justify-center"
          >
            <Link href="/gallery">
              <AnimeMagneticButton className="bg-[#1E293B] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FF7A00] hover:shadow-xl hover:shadow-[#FF7A00]/30 transition-all flex items-center justify-center gap-3 border border-transparent hover:border-[#FF7A00]/50">
                View Full Gallery <ArrowRight className="h-5 w-5" />
              </AnimeMagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. HOW WE WORK */}
      <section className="py-24 bg-[#1E293B] text-white rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="The Process" className="text-4xl font-extrabold mb-4" />
            <p className="text-lg text-gray-400">How we integrate innovation into the curriculum.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Program Integration", desc: "Curriculum designed specifically for grades 1-10." },
              { num: "02", title: "20-30 Sessions", desc: "Immersive hands-on sessions throughout the academic year." },
              { num: "03", title: "DIY Kits", desc: "Individual kits provided to ensure personal engagement." },
              { num: "04", title: "Competition Ready", desc: "Assessments and readiness for national tech fests." }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <AnimeAnimatedCard className="relative bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 h-full">
                  <div className="text-5xl font-extrabold text-[#FF7A00]/20 absolute top-4 right-6">{step.num}</div>
                  <h3 className="text-xl font-bold mb-3 mt-8">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGY STACK MARQUEE */}
      <section className="py-20 border-b border-[#FFB547]/20 overflow-hidden">
        <div className="text-center mb-12">
          <StaggeredHeading text="Technologies We Teach" className="text-3xl font-extrabold text-[#1E293B]" />
        </div>
        <div className="flex w-[200%]">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex gap-6 whitespace-nowrap px-3">
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-6">
                {[
                  "Python", "C++", "Arduino", "Raspberry Pi", "CAD Software", 
                  "FDM Printers", "IoT Sensors", "React"
                ].map((tag, i) => (
                  <div key={`${arrayIndex}-${i}`} className="px-8 py-4 bg-white text-[#1E293B] rounded-full font-bold text-lg border border-[#FFB547]/30 shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. OUR STEM SOLUTIONS */}
      <StemSolutions />

      {/* 11. CLIENT TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="What People Say" className="text-4xl font-extrabold text-[#1E293B]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "My child became more curious and confident after the STEM program. Building and taking home the model made learning real and exciting.", author: "Mrs. Ananya Rao", role: "Parent" },
              { text: "A well-structured STEM solution... thoughtfully aligned with the school syllabus, ensuring hands-on activities reinforce classroom concepts.", author: "Dr. Rekha Reddy", role: "Principal" }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                <AnimeAnimatedCard className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl shadow-orange-500/5 relative border border-gray-100 h-full">
                  <Quote className="absolute top-8 right-8 h-20 w-20 text-[#FFF8F1] z-0" />
                  <p className="text-xl text-gray-700 leading-relaxed relative z-10 font-medium italic mb-8">"{t.text}"</p>
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF7A00] flex items-center justify-center text-white font-bold text-xl">{t.author.charAt(5)}</div>
                    <div>
                      <h4 className="font-bold text-[#1E293B]">{t.author}</h4>
                      <p className="text-[#FF7A00] font-semibold text-sm">{t.role}</p>
                    </div>
                  </div>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LATEST NEWS */}
      <section className="py-24 bg-white rounded-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <StaggeredHeading text="Latest Insights" className="text-4xl font-extrabold text-[#1E293B] mb-4" />
              <p className="text-lg text-gray-600">News and updates from our innovation hubs.</p>
            </div>
            <AnimeMagneticButton className="hidden sm:flex items-center gap-2 text-[#FF7A00] font-bold hover:gap-4 transition-all">
              View All <ArrowRight className="h-5 w-5"/>
            </AnimeMagneticButton>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Highlights from Robotics Fest 2024", img: "/images/latest_insights/img1.png" },
              { title: "How 3D Printing is Changing Indian Classrooms", img: "/images/latest_insights/img2.png" },
              { title: "Setting up an Atal Lab: A Complete Guide", img: "/images/latest_insights/img3.png" }
            ].map((blog, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <AnimeAnimatedCard className="group cursor-pointer">
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] mb-6 shadow-md border-4 border-[#FFF8F1]">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#FF7A00] transition-colors">{blog.title}</h3>
                </AnimeAnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <StaggeredHeading text="Frequently Asked Questions" className="text-4xl font-extrabold text-[#1E293B]" />
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What age group are your STEM programs designed for?", 
                a: "Our core programs are seamlessly integrated for students in Grades 1 to 10. We tailor the complexity of our kits and curriculum—starting with simple block coding and craft-based science for juniors, and advancing to text-based coding, IoT, and complex robotics for seniors." 
              },
              { 
                q: "Do students get to keep the models they build?", 
                a: "Yes, absolutely! We believe in continuous learning. Students are provided with individual, fully-equipped DIY STEM kits. Once they build a project during the workshop or class, they get to take it home to experiment further and show their parents." 
              },
              { 
                q: "How does Robotonic Innovations set up a STEM lab in a school?", 
                a: "We provide end-to-end consulting and execution. This includes procuring the latest 3D printers, soldering stations, robotics kits, and electronics. We also handle the interior setup, teacher training, curriculum integration, and provide Annual Maintenance Contracts (AMC)." 
              },
              {
                q: "Do you provide training for our school's teachers?",
                a: "Yes. Along with setting up the lab or providing kits, we conduct intensive 'Train the Trainer' workshops. We ensure your teaching staff is fully confident in delivering the STEM curriculum and handling the hardware."
              },
              {
                q: "What is the SDDP Innovators Program?",
                a: "It is our flagship initiative designed to identify and nurture young tech talent. Students in this program receive expert mentorship, advanced project kits, and guidance to represent their schools in national and international Robotics Fests and Science Expos."
              },
              {
                q: "Can individuals buy your DIY STEM Kits directly?",
                a: "Yes! While we partner extensively with schools, parents and students can purchase our individual DIY STEM Kits directly through our WhatsApp Store. Each kit comes with a detailed video tutorial and instruction manual."
              }
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-sm border border-[#FFB547]/20 overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3 pr-4">
                    <div className="w-2 h-2 rounded-full bg-[#FF7A00] flex-shrink-0"></div>
                    <span className="font-bold text-base sm:text-lg text-[#1E293B] leading-tight">{faq.q}</span>
                  </div>
                  {openFaq === i ? <Minus className="h-5 w-5 text-[#FF7A00] flex-shrink-0" /> : <Plus className="h-5 w-5 text-[#FF7A00] flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-6 pt-2 pl-[2.25rem] sm:pl-[3.25rem] text-gray-600 font-medium text-sm sm:text-base leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CONTACT US */}
      <section className="py-24 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
              <StaggeredHeading text="Call us for a free demo on Innovation and Technology." className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] leading-tight" />
              <motion.div variants={fadeInUp} className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><MapPin className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium">Ramamurthy Nagar, Bangalore 560016</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><Phone className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium">9731554348</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFF8F1] flex items-center justify-center"><Mail className="h-5 w-5 text-[#FF7A00]" /></div>
                  <p className="text-lg text-gray-700 font-medium break-all">Robotonicinnovationsddp@gmail.com</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#FFF8F1] p-8 sm:p-12 rounded-3xl border border-white shadow-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Role</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="Principal / Parent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Email</label>
                    <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#1E293B] mb-2">Phone</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1E293B] mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white border-transparent focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <AnimeMagneticButton className="w-full bg-[#FF7A00] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#FFB547] hover:shadow-xl hover:shadow-[#FF7A00]/30 transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5" /> Book Free Demo
                </AnimeMagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
