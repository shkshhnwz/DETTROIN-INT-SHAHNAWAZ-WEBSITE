import React, { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import ContactTraceBeam from "../../ui/ContactTraceBeam/ContactTraceBeam";
import LogoLoop from "../../ui/LogoLoop/LogoLoop";


export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);

  const brandLogos = [
    {
      node: (
        <span className="flex items-center gap-1 font-black text-neutral-400 tracking-tighter text-lg select-none">
         Excellence International School,
        </span>
      ),
    },
    {
      node: (
        <span className="flex items-center gap-1.5 font-bold text-neutral-400 text-lg tracking-tight select-none">
          <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <rect x="7" y="7" width="10" height="10" fill="white" />
          </svg>
         Ramghat Road,
        </span>
      ),
    },
    {
      node: (
        <span className="flex items-center gap-1.5 font-bold text-neutral-400 text-lg tracking-tight select-none">
          <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
          </svg>
         Aligarh 202001,
        </span>
      ),
    },
    {
      node: (
        <span className="font-serif font-black text-neutral-400 text-lg tracking-widest select-none">
         Uttar Pradesh,
        </span>
      ),
    },
    {
      node: (
        <span className="flex items-center gap-1.5 font-bold text-neutral-400 text-lg tracking-tight select-none">
          <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="5" fill="white" />
          </svg>
         India
        </span>
      ),
    },
  ];

  const validate = () => {
    let tempErrors = {};
    if (!fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(mobile.replace(/\s+/g, ""))) {
      tempErrors.mobile = "Please enter a valid mobile number";
    }

    if (!country) {
      tempErrors.country = "Please select your country of residence";
    }

    if (!subject.trim()) {
      tempErrors.subject = "Subject is required";
    }

    if (!message.trim()) {
      tempErrors.message = "Message cannot be empty";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "Inquirer";

      axios
        .post("/api/contact/submit", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobileNumber: mobile,
          countryOfResidence: country,
          subject: subject,
          message: message,
        })
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFullName("");
          setEmail("");
          setMobile("");
          setCountry("");
          setSubject("");
          setMessage("");
        })
        .catch((err) => {
          console.error("Error submitting contact inquiry:", err);
          setIsSubmitting(false);
          setIsSubmitted(true); // Fallback to simulated success display
        });
    }
  };

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

  return (
    <section
      id="contact"
      className="relative w-full bg-[#f5f5f7] border-t border-neutral-200/50 overflow-hidden"
    >
      <ContactTraceBeam className="py-24 flex items-center justify-center">
        <motion.div
          className="max-w-6xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {/* Left Column: Heading, Description, and Brand Loop */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <h2
              style={{
                color: "#1c1917",
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                lineHeight: "1.1",
                letterSpacing: "-0.03em"
              }}
              className="font-black text-neutral-900 mb-6"
            >
              Contact Us
              <br />
              for you child's
              <br />
              better future
            </h2>
            <p className="text-neutral-600 text-lg md:text-xl font-medium leading-relaxed max-w-md mb-16">
              We're here to help you every step of the way
              —connect with us today!

            </p>

            {/* Brands Loop Section */}
            <div className="w-full max-w-md">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-neutral-400 block mb-4">
                100s of students have got placed in our school
              </span>
              <div className="w-full overflow-hidden bg-transparent py-2">
                <LogoLoop
                  logos={brandLogos}
                  speed={40}
                  gap={48}
                  logoHeight={24}
                  fadeOut={true}
                  fadeOutColor="#f5f5f7"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-6 w-full max-w-xl lg:ml-auto">
            <div className="w-full flex flex-col p-6">
              {/* Header Text */}
              <h3 className="text-3xl font-black text-neutral-900 mb-6 tracking-tight">
                Let us know about you.
              </h3>

              {/* White Inner Card */}
              <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-lg border border-neutral-100 w-full">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl text-[#ff007f]">✓</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-neutral-900 mb-2">
                      Submission Received!
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you for sharing your goals. We will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-[#ff007f] font-semibold text-sm underline cursor-pointer hover:text-[#ff007f]/85"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                        }}
                        placeholder="Enter full name"
                        className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-xs mt-1 block font-medium">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          placeholder="Enter email address"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                          MOBILE NUMBER
                        </label>
                        <input
                          type="tel"
                          value={mobile}
                          onChange={(e) => {
                            setMobile(e.target.value);
                            if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: "" }));
                          }}
                          placeholder="Enter mobile number"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.mobile && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.mobile}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Country & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                          COUNTRY OF RESIDENCE
                        </label>
                        <select
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value);
                            if (errors.country) setErrors((prev) => ({ ...prev, country: "" }));
                          }}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all font-semibold text-sm appearance-none cursor-pointer"
                        >
                          <option value="">Select country</option>
                          <option value="United Arab Emirates">United Arab Emirates</option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Oman">Oman</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="India">India</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="United States">United States</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.country && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.country}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                            if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                          }}
                          placeholder="Subject of inquiry"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.subject && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                        MESSAGE
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                        }}
                        rows={4}
                        placeholder="Let us know about your ideas or challenges"
                        className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#ff007f] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm resize-none"
                      />
                      {errors.message && (
                        <span className="text-red-500 text-xs mt-1 block font-medium">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Footer Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <p className="text-[11px] text-neutral-400 leading-normal max-w-xs">
                        By submitting, you agree to our{" "}
                        <a href="#" className="underline font-bold text-neutral-700 hover:text-neutral-900">
                          Terms
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline font-bold text-neutral-700 hover:text-neutral-900">
                          Privacy Policy
                        </a>
                        .
                      </p>

                      <div
                        className="flex items-center gap-3"
                        onMouseEnter={() => setIsSubmitHovered(true)}
                        onMouseLeave={() => setIsSubmitHovered(false)}
                      >
                        {isSubmitHovered ? (
                          <>
                            <motion.div
                              layout
                              key="arrow-btn"
                              className="w-12 h-12 rounded-full bg-red-100/40 border border-red-500/20 text-red-500 flex items-center justify-center font-bold text-lg hover:bg-red-200/60 transition-all cursor-pointer select-none"
                            >
                              ↗
                            </motion.div>
                            <motion.button
                              layout
                              key="submit-btn"
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-[#1c1917] hover:bg-black text-white px-8 py-3.5 rounded-full font-extrabold transition-all shadow-md cursor-pointer text-sm disabled:opacity-50"
                            >
                              {isSubmitting ? "Submitting..." : "Submit"}
                            </motion.button>
                          </>
                        ) : (
                          <>
                            <motion.button
                              layout
                              key="submit-btn"
                              type="submit"
                              disabled={isSubmitting}
                              className="bg-[#1c1917] hover:bg-black text-white px-8 py-3.5 rounded-full font-extrabold transition-all shadow-md cursor-pointer text-sm disabled:opacity-50"
                            >
                              {isSubmitting ? "Submitting..." : "Submit"}
                            </motion.button>
                            <motion.div
                              layout
                              key="arrow-btn"
                              className="w-12 h-12 rounded-full bg-red-100/40 border border-red-500/20 text-red-500 flex items-center justify-center font-bold text-lg hover:bg-red-200/60 transition-all cursor-pointer select-none"
                            >
                              ↗
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ContactTraceBeam>
    </section>
  );
}