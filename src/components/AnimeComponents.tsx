"use client";

import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { useInView } from "framer-motion";

// 1. Text Rotator (3D Flip)
export const TextRotator = ({ phrases }: { phrases: string[] }) => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let currentIndex = 0;
    
    const cycleText = () => {
      if (!textRef.current) return;
      
      // Rotate out
      anime({
        targets: textRef.current,
        rotateX: [0, -90],
        opacity: [1, 0],
        duration: 600,
        easing: "easeInQuad",
        complete: () => {
          // Update text
          currentIndex = (currentIndex + 1) % phrases.length;
          setIndex(currentIndex);
          
          // Rotate in
          anime({
            targets: textRef.current,
            rotateX: [90, 0],
            opacity: [0, 1],
            duration: 600,
            easing: "easeOutQuad"
          });
        }
      });
    };

    const intervalId = setInterval(cycleText, 3000);
    return () => clearInterval(intervalId);
  }, [phrases]);

  return (
    <span style={{ perspective: "1000px", display: "inline-block" }}>
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
        }}
        className="text-[#FF7A00]"
      >
        {phrases[index]}
      </span>
    </span>
  );
};

// 2. Floating Image (Organic Async Floating)
export const FloatingImage = ({ 
  src, alt, className, duration = 3000, delay = 0 
}: { src: string, alt: string, className: string, duration?: number, delay?: number }) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    
    const animation = anime({
      targets: imgRef.current,
      translateY: [-12, 12],
      duration: duration,
      delay: delay,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine"
    });

    return () => animation.pause();
  }, [duration, delay]);

  return (
    <div ref={imgRef} className={className}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

// 3. Staggered Heading (Scroll Reveal)
export const StaggeredHeading = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  // Split text into words to wrap them in spans
  const words = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block overflow-hidden mr-[0.25em] mb-[0.1em] align-top">
      <span className="stagger-word inline-block opacity-0" style={{ transform: "translateY(100%)" }}>
        {word}
      </span>
    </span>
  ));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        anime({
          targets: el.querySelectorAll('.stagger-word'),
          translateY: ["100%", "0%"],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
          easing: "easeOutCubic"
        });
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={containerRef} className={className}>
      {words}
    </h2>
  );
};

// 4. Magnetic Button
export const AnimeMagneticButton = ({ 
  children, className, onClick 
}: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // max translation mapping
    const y = (clientY - (top + height / 2)) * 0.3;
    
    anime({
      targets: btnRef.current,
      translateX: x,
      translateY: y,
      duration: 100,
      easing: "easeOutQuad"
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    anime({
      targets: btnRef.current,
      translateX: 0,
      translateY: 0,
      duration: 800,
      easing: "easeOutElastic(1, .5)"
    });
  };

  return (
    <button 
      ref={btnRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative z-10 origin-center ${className}`}
    >
      {children}
    </button>
  );
};

// 5. Animated Card (Spring Hover Effect)
export const AnimeAnimatedCard = ({ 
  children, className 
}: { children: React.ReactNode, className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    anime({
      targets: cardRef.current,
      scale: 1.03,
      translateY: -8,
      duration: 800,
      easing: "easeOutElastic(1, .6)"
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    anime({
      targets: cardRef.current,
      scale: 1,
      translateY: 0,
      duration: 800,
      easing: "easeOutElastic(1, .6)"
    });
  };

  return (
    <div 
      ref={cardRef} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className={`origin-center will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
