import { TracingBeam } from '../../ui/TraceBeam/tracing-beam';
import { motion } from 'motion/react';
import { GoDotFill } from "react-icons/go";

const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.8 }
    }
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 70, damping: 15, duration: 0.8 }
    }
};

const viewportSettings = { once: true, amount: 0.15 };

function AboutUs() {
    return (
        <>
            {/* Tracing Beam Section */}
            <section className="w-full py-24 bg-[#f5f5f7] flex flex-col items-center border-t border-neutral-200/50">
                <motion.div
                    className="text-center max-w-5xl mx-auto mb-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={headingVariants}
                >
                    <span className="bg-[#03C03C] text-white font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-widest inline-block mb-4">
                        Excellence International School
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 !text-neutral-900 tracking-tight leading-none" style={{ color: '#111827', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
                        About us
                    </h2>
                </motion.div>

                <TracingBeam className="max-w-6xl px-6 md:px-0 mx-auto">
                    <div className="flex flex-col gap-32 py-16">
                        {/* Row 1: Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image Card */}
                            <motion.div
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007100/Experienced-and-Dedicated-Faculty_nyod1q.webp"
                                        alt="Aboutus1"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#F0FFF0] px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-[#03C03C]/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight text-neutral-900">Leading School</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-[#03C03C]">Excellence</div>
                                </div>
                            </motion.div>
                            {/* Right: Text */}
                            <motion.div
                                className="flex flex-col text-left justify-center md:pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 !text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#111827' }}>
                                    Our Mission
                                </h3>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed mb-6">
                                    Excellence International School is dedicated to fostering a supportive and enriching educational environment. Our mission centers on:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>High academic standards and conceptual clarity</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Value-based education that builds moral character</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>A modern, engaging, and resource-rich learning environment</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Diverse skill development and co-curricular opportunities</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>A safe, inclusive, and disciplined campus environment</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Row 2: Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 !text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#111827' }}>
                                    Our Vision
                                </h3>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed mb-6">
                                    We envision nurturing future leaders who excel in all walks of life. We aim to inspire our students to:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Think independently and reason logically</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Act responsibly with empathy and integrity</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Respect universal values, culture, and self-discipline</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Contribute positively to their communities and society</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Strive for excellence in both academics and personal development</span>
                                    </li>
                                </ul>
                            </motion.div>
                            {/* Right: Image Card */}
                            <motion.div
                                className="relative w-full max-w-md mx-auto order-1 md:order-2 px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007096/22.jpg_dl7qql.webp"
                                        alt="Academic Excellence"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#F0FFF0] px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-[#03C03C]/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight text-neutral-900">Academic</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-[#03C03C]">Excellence</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 3: Holistic Development */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image Card */}
                            <motion.div
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007098/28_i5y93j.webp"
                                        alt="Holistic Growth"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#F0FFF0] px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-[#03C03C]/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight text-neutral-900">Holistic</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-[#03C03C]">Growth</div>
                                </div>
                            </motion.div>
                            {/* Right: Text */}
                            <motion.div
                                className="flex flex-col text-left justify-center md:pl-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 !text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#111827' }}>
                                    Holistic Development
                                </h3>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed mb-6">
                                    Excellence International School follows a structured academic system that focuses on concept clarity and strong learning foundations. Our academic approach includes:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Well-planned syllabus coverage</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Regular assessments and evaluations</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Concept-based, student-centric teaching methods</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Practical and activity-based learning</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Continuous performance monitoring</span>
                                    </li>
                                </ul>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed">
                                    Students are guided and supported to achieve consistent academic success and build confidence in their abilities.
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 4: Modern Infrastructure */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 !text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#111827' }}>
                                    Modern Infrastructure
                                </h3>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed mb-6">
                                    To maintain high standards of education, Excellence International School provides modern facilities that enhance the learning experience. The campus includes:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Smart and interactive classrooms</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Fully equipped science laboratories</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Computer laboratory for technical literacy</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>Mathematics learning spaces</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-600 font-medium text-lg">
                                        <GoDotFill className="text-[#03C03C] mt-1.5 flex-shrink-0" />
                                        <span>A rich library with curated educational resources</span>
                                    </li>
                                </ul>
                                <p className="text-neutral-600 font-medium text-lg leading-relaxed">
                                    A well-designed learning environment helps students stay engaged and motivated.
                                </p>
                            </motion.div>
                            {/* Right: Image Card */}
                            <motion.div
                                className="relative w-full max-w-md mx-auto order-1 md:order-2 px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007096/27_tx5lus.webp"
                                        alt="Modern Infrastructure"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#F0FFF0] px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-[#03C03C]/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight text-neutral-900">Safe &</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-[#03C03C]">Disciplined</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </TracingBeam>
            </section>
        </>
    )
}

export default AboutUs;