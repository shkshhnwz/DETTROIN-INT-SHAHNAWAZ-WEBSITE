import React from "react";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "../../ui/HoverBorderGradient/hover-border-gradient";
import { motion } from "motion/react";

export default function Footer() {
  const email = "info@excellenceinternationalschool.com";
  const email2 = "rahulexcellence85@gmail.com"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="relative w-full bg-[#1c1917] text-white px-6 md:px-16 py-20 overflow-hidden min-h-screen flex flex-col justify-between box-sizing-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >

      {/* Background abstract curves (semi-transparent red and white overlay) */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-[75%] pointer-events-none z-0 opacity-20">
        <svg viewBox="0 0 800 800" fill="none" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M 800 100 C 600 300, 700 500, 500 600 C 300 700, 200 650, 100 800" stroke="#03C03C" strokeWidth="8" strokeLinecap="round" />
          <path d="M 800 200 C 650 350, 720 480, 520 620 C 320 760, 250 600, 120 780" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <path d="M 800 50 C 500 250, 680 520, 480 650 C 280 780, 180 630, 80 820" stroke="#03C03C" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top Grid Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start z-10 w-full">

        {/* Left Column: Branding text & Contact info */}
        <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col gap-10">
          <img
            src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785009635/Logo2.png_ivu06b.webp"
            alt="Excellence international school Logo"
            className="w-52 md:w-64 max-w-full h-auto object-contain"
          />
          <div className="flex flex-col gap-1 mt-4">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">Contact</span>
            <a href={`mailto:${email}`} className="text-xl md:text-2xl font-bold text-white hover:text-[#ef233c] transition-colors block">
              {email}
            </a>
            <a href={`mailto:${email}`} className="text-xl md:text-2xl font-bold text-white hover:text-[#ef233c] transition-colors block">
              {email2}
            </a>
            <span className="text-xl md:text-2xl font-bold text-white block">+91 7055582117</span>
          </div>
        </motion.div>

        {/* Center Column: Navigation & Legal links */}
        <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-4">Navigation</span>
            <div className="flex flex-col gap-2 items-start">
              <Link to="/home">
                <HoverBorderGradient containerClassName="rounded-full" className="text-xs font-bold px-4 py-1.5 bg-transparent hover:bg-neutral-800 transition-colors">
                  Home
                </HoverBorderGradient>
              </Link>
              <Link to="/about-us">
                <HoverBorderGradient containerClassName="rounded-full" className="text-xs font-bold px-4 py-1.5 bg-transparent hover:bg-neutral-800 transition-colors">
                  About us
                </HoverBorderGradient>
              </Link>
              <a href="/Blog">
                <HoverBorderGradient containerClassName="rounded-full" className="text-xs font-bold px-4 py-1.5 bg-transparent hover:bg-neutral-800 transition-colors">
                  Blog
                </HoverBorderGradient>
              </a>
              <a href="/Gallery">
                <HoverBorderGradient containerClassName="rounded-full" className="text-xs font-bold px-4 py-1.5 bg-transparent hover:bg-neutral-800 transition-colors">
                  Gallery
                </HoverBorderGradient>
              </a>
              <Link to="/contact">
                <HoverBorderGradient containerClassName="rounded-full" className="text-xs font-bold px-4 py-1.5 bg-transparent hover:bg-neutral-800 transition-colors">
                  Contact
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Social Follow & Newsletter */}
        <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col md:items-end justify-between gap-12 h-full">
          {/* Social Icons (FOLLOW US) */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold mr-2">Follow Us</span>

            {/* Facebook circle icon */}
            <a href="https://www.facebook.com/ExcllenceInternationalSchool?rdid=UV9iCp0vtBYVYtfX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GvbBbZqN5%2F#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ef233c] hover:border-transparent transition-all duration-300">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>

            {/* YouTube circle icon */}
            <a href="https://www.youtube.com/@excellenceschoolinternational?si=cAvfCyy3WWmRWkg6" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ef233c] hover:border-transparent transition-all duration-300">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.537V175.185l142.739 81.217-142.739 81.218z"></path>
              </svg>
            </a>

            {/* Instagram circle icon */}
            <a href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ef233c] hover:border-transparent transition-all duration-300">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM402.4 344.2c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </div>

      
        </motion.div>

      </motion.div>

      {/* Bottom Large Logo & Copyright Section */}
      <motion.div variants={logoVariants} className="mt-20 z-10 w-full border-t border-white/5 pt-10">
        <h1 className="text-[10vw] font-black tracking-tighter leading-none select-none !text-white">
          Excellence <span className="text-[#03C03C]">International School</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
          <p className="text-xs tracking-widest text-neutral-500 font-bold uppercase">
            © {new Date().getFullYear()} Excellence International School. ALL RIGHTS RESERVED.
          </p>
        </div>
      </motion.div>

    </motion.footer>
  );
}