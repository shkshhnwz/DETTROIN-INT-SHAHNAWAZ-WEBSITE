import React from "react";
import { motion } from "motion/react";
import ContactTraceBeam from "../../ui/ContactTraceBeam/ContactTraceBeam";
import LogoLoop from "../../ui/LogoLoop/LogoLoop";
import { BookOpen, UserCheck, CreditCard, Mail } from "lucide-react";

export default function AdmissionProcedure() {
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

  const steps = [
    "Contact the School front desk for the registration.",
    "Take the admission forms and attach the necessary documents of the student and parents.",
    "In case of Direct Admission kindly approach the school with your previous school documents.",
    "Admission is taken on a first-come, first-served basis.",
    "There is a special term/consideration in case of a single girl child of parents."
  ];

  return (
    <section
      id="admission-procedure"
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
          {/* Left Column: Heading and Admission Overview Steps */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-center text-left"
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
              Admission Overview
            </h2>
            <p className="text-neutral-600 text-base md:text-lg font-medium leading-relaxed mb-8">
              Follow our simple, step-by-step procedure to secure admission at Excellence International School.
            </p>

            {/* Visual Steps List */}
            <div className="flex flex-col gap-6 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#03C03C]/10 border border-[#03C03C]/20 text-[#03C03C] font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-neutral-700 text-sm md:text-base font-semibold pt-1 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Brands Loop Section */}
            <div className="w-full max-w-md mt-6">
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

          {/* Right Column: Key Details Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full flex flex-col gap-6">
            
            {/* Card 1: Direct Admission */}
            <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-lg border border-neutral-100 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-[#03C03C]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900">
                  Direct Admission
                </h3>
              </div>
              <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                Direct admission for classes Play Group to VIII is offered to meritorious students. For more details, please contact us with all necessary documents.
              </p>
            </div>

            {/* Card 2: Entrance Test */}
            <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-lg border border-neutral-100 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#005A36]/10 text-[#005A36]">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900">
                  Entrance Test
                </h3>
              </div>
              <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                All applications undergo a standard procedure of an entrance test to prepare and counsel the parents and student to get a bright future.
              </p>
            </div>

            {/* Card 3: Payment Method */}
            <div className="bg-white p-6 sm:p-8 rounded-[28px] shadow-lg border border-neutral-100 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-[#03C03C]">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900">
                  Payment Method
                </h3>
              </div>
              <p className="text-neutral-600 text-sm font-medium leading-relaxed">
                Payment can be done either directly in the Bank or at the school office. All modes of payment are accepted.
              </p>
            </div>

            {/* Card 4: Query / Contact CTA */}
            <div className="bg-[#123C24] p-6 sm:p-8 rounded-[28px] shadow-lg text-left text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-white/10 text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Admission Queries
                </h3>
              </div>
              <p className="text-neutral-300 text-sm font-medium leading-relaxed mb-6">
                For any admission related queries, you can reach out directly to the school or email us:
              </p>
              <a
                href="mailto:excellenceinternationalschool@gmail.com"
                className="inline-block bg-[#03C03C] hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md"
              >
                excellenceinternationalschool@gmail.com
              </a>
            </div>

          </motion.div>
        </motion.div>
      </ContactTraceBeam>
    </section>
  );
}