import { TracingBeam } from '../../ui/TraceBeam/tracing-beam';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

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

function InfoofSchool() {
    return (
        <>
            <section className="w-full py-24 bg-[#f5f5f7] flex flex-col items-center border-t border-neutral-200/50">
                
                {/* Header Section */}
                <motion.div 
                    className="text-center max-w-5xl mx-auto mb-20 px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                    variants={headingVariants}
                >
                    <span className="bg-[#03C03C] text-white font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-widest inline-block mb-4 shadow-sm">
                        Our Framework
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none mb-6" style={{ color: '#111827', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
                        Academic Stages & Excellence System
                    </h2>
                    <p className="text-neutral-600 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        At Excellence International School, our academic journey and environment are structured to support students at every stage of their development, fostering analytical thinking, personal responsibility, and secure growth.
                    </p>
                </motion.div>

                {/* Tracing Beam Timeline */}
                <TracingBeam className="max-w-6xl px-6 md:px-0 mx-auto">
                    <div className="flex flex-col gap-32 py-16">
                        
                        {/* Row 1: Pre-Primary School */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005264/2.jpg_em2dpp.webp"
                                        alt="Pre-Primary learning activities"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-white/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight">Pre-Primary</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Foundation Stage</div>
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
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Pre-Primary School
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful environment.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">Key Focus Areas:</h4>
                                    {[
                                        "Play-based learning",
                                        "Language development",
                                        "Basic numeracy skills",
                                        "Social interaction",
                                        "Creative exploration"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Children learn through activities, storytelling, games, and interactive sessions that make learning enjoyable and engaging.
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 2: Primary School */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div 
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Primary School
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Primary education is designed to strengthen core academic skills while encouraging curiosity and independent learning.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">Key Focus Areas:</h4>
                                    {[
                                        "Reading and writing skills",
                                        "Fundamental mathematics",
                                        "Basic science concepts",
                                        "Moral values and good habits",
                                        "Classroom discipline and responsibility"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Students gradually develop critical thinking, problem-solving abilities, and better understanding of academic subjects.
                                </p>
                            </motion.div>
                            {/* Right: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto order-1 md:order-2 px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005371/3.jpg_fc4dwx.webp"
                                        alt="Primary school children in classroom"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] text-left border border-white/20">
                                    <div className="text-3xl font-extrabold tracking-tight">Primary School</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Foundational Stage</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 3: Middle School */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005372/6.jpg_rdhhol.webp"
                                        alt="Middle school students studying"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-white/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight">Middle School</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Preparatory Stage</div>
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
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Middle School
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Middle school prepares students for advanced academic learning while developing analytical thinking and responsibility.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">Key Focus Areas:</h4>
                                    {[
                                        "Advanced reading and writing skills",
                                        "Concept-based mathematics",
                                        "Science exploration and practical understanding",
                                        "Social studies and general awareness",
                                        "Communication and presentation skills"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Students are encouraged to ask questions, explore ideas, and participate actively in classroom discussions.
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 4: Daycare */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div 
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Daycare
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    The Daycare facility at Excellence International School provides a safe, caring, and supportive environment for young children while their parents are at work.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">The daycare program includes:</h4>
                                    {[
                                        "Safe and supervised environment",
                                        "Play and activity-based engagement",
                                        "Rest and relaxation time",
                                        "Interactive learning activities",
                                        "Social interaction with peers"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Children receive proper care, attention, and engaging activities that support their emotional, social, and cognitive development throughout the day.
                                </p>
                            </motion.div>
                            {/* Right: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto order-1 md:order-2 px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005373/7.jpg_yzns10.webp"
                                        alt="Daycare facility"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] text-left border border-white/20">
                                    <div className="text-3xl font-extrabold tracking-tight">Daycare</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Support Services</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 5: Positive & Motivating Learning Environment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image */}
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
                                        alt="Safe and encouraging school environment"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-white/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight">Environment</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Positive & Motivating</div>
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
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Learning Environment
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    The school provides an environment that is carefully balanced to ensure children feel safe, motivated, and fully engaged in their individual learning process.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">We maintain an atmosphere that is:</h4>
                                    {[
                                        "Student-focused",
                                        "Encouraging and supportive",
                                        "Structured and disciplined",
                                        "Growth-oriented"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Students feel motivated to learn, explore, and achieve their full potential.
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 6: Strong Academic System */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div 
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Strong Academic System
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Excellence International School follows a structured and well-planned academic approach to ensure effective learning.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">The academic framework includes:</h4>
                                    {[
                                        "Well-planned daily lessons",
                                        "Concept-focused teaching",
                                        "Regular revision sessions",
                                        "Periodic assessments",
                                        "Doubt-clearing sessions",
                                        "Continuous performance monitoring"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Teachers guide students individually to help them improve academically and build confidence in learning.
                                </p>
                            </motion.div>
                            {/* Right: Image */}
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
                                        alt="Structured school education and monitoring"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] text-left border border-white/20">
                                    <div className="text-3xl font-extrabold tracking-tight">Academics</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Strong System</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 7: Concept-Based Learning */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007096/27_tx5lus.webp"
                                        alt="Practical and logical student development"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-white/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight">Concepts First</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">No Memorization</div>
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
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Concept-Based Learning
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Education at Excellence International School focuses on understanding concepts rather than memorizing information.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">Students develop:</h4>
                                    {[
                                        "Analytical thinking",
                                        "Problem-solving abilities",
                                        "Logical reasoning",
                                        "Practical knowledge"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    This approach prepares students for higher studies and future career paths.
                                </p>
                            </motion.div>
                        </div>

                        {/* Row 8: Experienced & Dedicated Faculty */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Text */}
                            <motion.div 
                                className="flex flex-col text-left justify-center order-2 md:order-1 md:pr-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Experienced & Dedicated Faculty
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    Teachers play a crucial role in shaping students’ future. The faculty at Excellence International School is qualified, experienced, and committed to providing quality education.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">Teaching methods include:</h4>
                                    {[
                                        "Interactive classroom discussions",
                                        "Activity-based learning",
                                        "Real-life examples",
                                        "Student participation",
                                        "Technology-supported learning"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Teachers regularly monitor student progress and provide guidance whenever needed.
                                </p>
                            </motion.div>
                            {/* Right: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto order-1 md:order-2 px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInRight}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785007100/Experienced-and-Dedicated-Faculty_nyod1q.webp"
                                        alt="School teachers and guides"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-2 md:-right-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] text-left border border-white/20">
                                    <div className="text-3xl font-extrabold tracking-tight">Our Faculty</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">Experienced Leaders</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 9: Safe and Secure Campus */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Left: Image */}
                            <motion.div 
                                className="relative w-full max-w-md mx-auto px-4 md:px-0"
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportSettings}
                                variants={slideInLeft}
                            >
                                <div className="w-full rounded-[32px] overflow-hidden shadow-2xl bg-zinc-200">
                                    <img
                                        src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005372/6.jpg_rdhhol.webp"
                                        alt="Safe secure learning campus environment"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-2 md:-left-12 bg-[#03C03C] text-white px-8 py-5 rounded-[24px] shadow-2xl z-10 w-[240px] md:w-[260px] border border-white/20 text-left">
                                    <div className="text-3xl font-extrabold tracking-tight">Safe Campus</div>
                                    <div className="text-[10px] font-extrabold uppercase tracking-widest mt-1 text-white/80">CCTV & Supervision</div>
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
                                <h3 className="text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-6" style={{ color: '#005A36' }}>
                                    Safe & Secure Campus
                                </h3>
                                <p className="text-neutral-600 font-semibold text-lg leading-relaxed mb-6">
                                    A secure learning environment helps students focus on their education and development.
                                </p>
                                <div className="flex flex-col gap-3 mb-6">
                                    <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400">We ensure safety through:</h4>
                                    {[
                                        "CCTV monitoring",
                                        "Supervised campus areas",
                                        "Structured discipline policies",
                                        "Responsible staff supervision",
                                        "Safe entry and exit systems"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-neutral-700 font-semibold text-sm">
                                            <Check className="w-4 h-4 text-[#03C03C] shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-neutral-500 font-medium text-sm leading-relaxed border-l-2 border-[#03C03C] pl-4">
                                    Students can learn and grow in a safe and supportive environment.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </TracingBeam>
            </section>
        </>
    );
}

export default InfoofSchool;