"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const PATH_DATA = "M -50,300 C 200,280 350,400 500,320 C 650,240 750,150 720,280 C 690,400 600,250 630,180 C 660,110 750,150 900,250 C 1100,350 1300,250 1500,280";

export const ContactTraceBeam = ({ children, className }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <div ref={containerRef} className={cn("relative w-full h-full", className)}>
      {/* Curved Background Path Track & Active Tracing Beam */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 500"
          width="100%"
          height="100%"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Background Track Path (Solid Light Gray from Photo) */}
          <path
            d={PATH_DATA}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="8"
            vectorEffect="non-scaling-stroke"
          />

          {/* Render active animated path and dot only when in viewport */}
          {isInView && (
            <>
              {/* Active Animated Path (Elegant White Trace) */}
              <motion.path
                d={PATH_DATA}
                fill="none"
                stroke="#ffffff"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))",
                }}
              />

              {/* Traveling Glowing Head Dot */}
              <circle r="8" fill="#ffffff" style={{ filter: "drop-shadow(0 0 8px #ffffff)" }}>
                <animateMotion
                  dur="2.5s"
                  repeatCount="1"
                  fill="freeze"
                  path={PATH_DATA}
                  keyTimes="0;1"
                  keySplines="0.4 0 0.2 1"
                  calcMode="spline"
                />
              </circle>
            </>
          )}
        </svg>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default ContactTraceBeam;
