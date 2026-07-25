"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

export const TracingBeam = ({
  children,
  className
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Smooth scroll progress
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full h-full", className)}>
      
      {/* Desktop Winding Path (hidden on mobile, visible on md and up) */}
      <svg
        viewBox="0 0 1200 2900"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
        preserveAspectRatio="none"
        aria-hidden="true">
        <defs>
          <linearGradient id="desktop-beam-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#03C03C" />
            <stop offset="40%" stopColor="#03C03C" />
            <stop offset="70%" stopColor="#161a1d" />
            <stop offset="100%" stopColor="#0b090a" />
          </linearGradient>
        </defs>
        
        {/* Background Track Path */}
        <motion.path
          d="M 600,-80 C 600,0 580,60 520,120 C 360,220 120,260 120,360 C 120,460 360,540 600,600 C 900,650 1120,700 1120,850 C 1120,1000 900,1050 600,1150 C 300,1250 80,1300 80,1450 C 80,1600 300,1650 600,1750 C 900,1850 1120,1900 1120,2050 C 1120,2200 900,2250 600,2350 C 500,2450 480,2650 480,2850"
          fill="none"
          stroke="#1c1917"
          strokeOpacity="0.06"
          strokeWidth="6"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Active Animated Path */}
        <motion.path
          d="M 600,-80 C 600,0 580,60 520,120 C 360,220 120,260 120,360 C 120,460 360,540 600,600 C 900,650 1120,700 1120,850 C 1120,1000 900,1050 600,1150 C 300,1250 80,1300 80,1450 C 80,1600 300,1650 600,1750 C 900,1850 1120,1900 1120,2050 C 1120,2200 900,2250 600,2350 C 500,2450 480,2650 480,2850"
          fill="none"
          stroke="url(#desktop-beam-gradient)"
          strokeWidth="6"
          style={{ pathLength: scrollYProgress }}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Mobile Vertical Path (visible on mobile, hidden on md and up) */}
      <div className="absolute left-6 top-0 bottom-0 w-[2px] pointer-events-none z-0 block md:hidden">
        <svg
          viewBox="0 0 40 1000"
          width="40"
          height="100%"
          className="h-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true">
          <defs>
            <linearGradient id="mobile-beam-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#03C03C" />
              <stop offset="50%" stopColor="#03C03C" />
              <stop offset="100%" stopColor="#0b090a" />
            </linearGradient>
          </defs>
          
          {/* Background Track Path */}
          <motion.path
            d="M 20,0 L 20,1000"
            fill="none"
            stroke="#1c1917"
            strokeOpacity="0.08"
            strokeWidth="6"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Active Animated Path */}
          <motion.path
            d="M 20,0 L 20,1000"
            fill="none"
            stroke="url(#mobile-beam-gradient)"
            strokeWidth="6"
            style={{ pathLength: scrollYProgress }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full pl-10 md:pl-0">
        {children}
      </div>
    </motion.div>
  );
};
