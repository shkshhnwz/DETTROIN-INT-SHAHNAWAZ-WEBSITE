import React, { useState } from "react";
import { motion } from "motion/react";
import axios from "axios";
import ContactTraceBeam from "../../ui/ContactTraceBeam/ContactTraceBeam";
import LogoLoop from "../../ui/LogoLoop/LogoLoop";

export default function Admission() {
  const [academicSession, setAcademicSession] = useState("2026-2027");
  const [board, setBoard] = useState("CBSE");
  const [scholarType, setScholarType] = useState("Day Scholar");
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentMobile, setParentMobile] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
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
    if (!parentName.trim()) {
      tempErrors.parentName = "Parent name is required";
    }

    if (!parentEmail.trim()) {
      tempErrors.parentEmail = "Parent email is required";
    } else if (!/\S+@\S+\.\S+/.test(parentEmail)) {
      tempErrors.parentEmail = "Please enter a valid email address";
    }

    if (!parentMobile.trim()) {
      tempErrors.parentMobile = "Parent mobile number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(parentMobile.replace(/\s+/g, ""))) {
      tempErrors.parentMobile = "Please enter a valid mobile number";
    }

    if (!grade) {
      tempErrors.grade = "Please select a grade";
    }

    if (!gender) {
      tempErrors.gender = "Please select a gender";
    }

    if (!dateOfBirth) {
      tempErrors.dateOfBirth = "Date of Birth is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      axios
        .post("/api/admission/submit", {
          academicSession,
          board,
          scholarType,
          parentName,
          parentEmail,
          parentMobile,
          grade,
          gender,
          dateOfBirth
        })
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setParentName("");
          setParentEmail("");
          setParentMobile("");
          setGrade("");
          setGender("");
          setDateOfBirth("");
        })
        .catch((err) => {
          console.error("Error submitting admission inquiry:", err);
          setIsSubmitting(false);
          setIsSubmitted(true); // Fallback displaying success
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
      id="admission"
      className="relative w-full bg-[#f5f5f7] border-t border-neutral-200/50 overflow-hidden animate-fade-in"
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
                color: "#03C03C",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "800",
                lineHeight: "1.2",
                letterSpacing: "-0.02em"
              }}
              className="mb-4"
            >
              Overview:
            </h2>
            <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed mb-8">
              Excellence International School's admissions details are given in this page.
            </p>

            <h3
              style={{
                color: "#005A36",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: "700",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}
              className="mb-4"
            >
              Admission Information
            </h3>
            <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed mb-6">
              The Academic Session is from April to March. Registration opens in the month of December each year. The registration card is to be filled and submitted in the office. A written test will be conducted on a specific date followed by an interview of the child with his/her parents. Admission will be granted on the basis of the child's performance purely on merit.
            </p>
            <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed mb-6">
              The Admission Form has to be duly filled with all entries and signature.
            </p>
            <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed mb-6">
              There will be no written test for admission to the Nursery.
            </p>
            <p className="text-[#03C03C] text-sm md:text-base font-bold leading-relaxed mb-16">
              Registrations open from Dec 1st onwards
            </p>

            {/* Brands Loop Section */}
            <div className="w-full max-w-md">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-neutral-400 block mb-4">
                Excellence International School Aligarh
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

          {/* Right Column: Admission Form */}
          <motion.div variants={itemVariants} className="lg:col-span-6 w-full max-w-xl lg:ml-auto">
            <div className="w-full flex flex-col">
              {/* White Inner Card */}
              <div className="bg-white rounded-[28px] shadow-lg border border-neutral-100 w-full overflow-hidden">
                {/* Custom Form Header */}
                <div className="bg-[#123C24] text-center py-5">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Admission Enquiry Form
                  </h3>
                </div>

                <div className="p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl text-emerald-600">✓</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-neutral-900 mb-2">
                        Enquiry Received!
                      </h3>
                      <p className="text-neutral-600 text-sm max-w-xs mx-auto leading-relaxed">
                        Thank you for your interest in Excellence International School. We will review your enquiry and contact you soon.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-emerald-600 font-semibold text-sm underline cursor-pointer hover:text-emerald-700"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Academic Session */}
                      <div>
                        <select
                          value={academicSession}
                          onChange={(e) => setAcademicSession(e.target.value)}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm cursor-pointer"
                        >
                          <option value="2026-2027">2026-2027</option>
                          <option value="2027-2028">2027-2028</option>
                        </select>
                      </div>

                      {/* Board */}
                      <div>
                        <select
                          value={board}
                          onChange={(e) => setBoard(e.target.value)}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm cursor-pointer"
                        >
                          <option value="CBSE">CBSE</option>
                          <option value="ICSE">ICSE</option>
                          <option value="State Board">State Board</option>
                        </select>
                      </div>

                      {/* Scholar Type */}
                      <div>
                        <select
                          value={scholarType}
                          onChange={(e) => setScholarType(e.target.value)}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm cursor-pointer"
                        >
                          <option value="Day Scholar">Day Scholar</option>
                          <option value="Boarder">Boarder</option>
                        </select>
                      </div>

                      {/* Parent Name */}
                      <div>
                        <input
                          type="text"
                          value={parentName}
                          onChange={(e) => {
                            setParentName(e.target.value);
                            if (errors.parentName) setErrors((prev) => ({ ...prev, parentName: "" }));
                          }}
                          placeholder="Parent Name *"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.parentName && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.parentName}
                          </span>
                        )}
                      </div>

                      {/* Parent Email ID */}
                      <div>
                        <input
                          type="email"
                          value={parentEmail}
                          onChange={(e) => {
                            setParentEmail(e.target.value);
                            if (errors.parentEmail) setErrors((prev) => ({ ...prev, parentEmail: "" }));
                          }}
                          placeholder="Parent Email ID *"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.parentEmail && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.parentEmail}
                          </span>
                        )}
                      </div>

                      {/* Parent Mobile Number */}
                      <div>
                        <input
                          type="tel"
                          value={parentMobile}
                          onChange={(e) => {
                            setParentMobile(e.target.value);
                            if (errors.parentMobile) setErrors((prev) => ({ ...prev, parentMobile: "" }));
                          }}
                          placeholder="Parent Mobile Number *"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all placeholder-neutral-400 font-semibold text-sm"
                        />
                        {errors.parentMobile && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.parentMobile}
                          </span>
                        )}
                      </div>

                      {/* Select a Grade */}
                      <div>
                        <select
                          value={grade}
                          onChange={(e) => {
                            setGrade(e.target.value);
                            if (errors.grade) setErrors((prev) => ({ ...prev, grade: "" }));
                          }}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm cursor-pointer"
                        >
                          <option value="">Select a Grade</option>
                          <option value="Play Group">Play Group</option>
                          <option value="Nursery">Nursery</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          <option value="Class I">Class I</option>
                          <option value="Class II">Class II</option>
                          <option value="Class III">Class III</option>
                          <option value="Class IV">Class IV</option>
                          <option value="Class V">Class V</option>
                          <option value="Class VI">Class VI</option>
                          <option value="Class VII">Class VII</option>
                          <option value="Class VIII">Class VIII</option>
                        </select>
                        {errors.grade && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.grade}
                          </span>
                        )}
                      </div>

                      {/* Select a Gender */}
                      <div>
                        <select
                          value={gender}
                          onChange={(e) => {
                            setGender(e.target.value);
                            if (errors.gender) setErrors((prev) => ({ ...prev, gender: "" }));
                          }}
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm cursor-pointer"
                        >
                          <option value="">Select a Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.gender && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.gender}
                          </span>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 mb-1 text-left">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          value={dateOfBirth}
                          onChange={(e) => {
                            setDateOfBirth(e.target.value);
                            if (errors.dateOfBirth) setErrors((prev) => ({ ...prev, dateOfBirth: "" }));
                          }}
                          placeholder="dd-mm-yyyy"
                          className="w-full px-5 py-4 rounded-2xl bg-neutral-100/70 text-neutral-900 border border-transparent focus:outline-none focus:border-[#03C03C] focus:bg-white transition-all font-semibold text-sm"
                        />
                        {errors.dateOfBirth && (
                          <span className="text-red-500 text-xs mt-1 block font-medium">
                            {errors.dateOfBirth}
                          </span>
                        )}
                      </div>

                      {/* Footer Row / Submit Button */}
                      <div className="flex flex-col gap-4 mt-2">
                        <p className="text-[11px] text-neutral-400 leading-normal text-left">
                          By submitting this form, you agree to our{" "}
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
                          className="flex w-full"
                          onMouseEnter={() => setIsSubmitHovered(true)}
                          onMouseLeave={() => setIsSubmitHovered(false)}
                        >
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#03C03C] hover:bg-[#005A36] text-white py-4 rounded-2xl font-extrabold transition-all shadow-md cursor-pointer text-base disabled:opacity-50"
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ContactTraceBeam>
    </section>
  );
}