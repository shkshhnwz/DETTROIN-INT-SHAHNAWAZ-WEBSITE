import { useState } from 'react'
import { FcApproval } from "react-icons/fc";
import { motion } from 'motion/react';

import Stack from '../../ui/Stack/Stack'
import CurvedLoop from '../../ui/CurvedTextLayer/CurvedTextLayer'
import LogoLoop from '../../ui/LogoLoop/LogoLoop'
import './Hero.css'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const leftColVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.15,
            delayChildren: 0.4
        }
    }
};

const titleVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.8
        }
    }
};

const bulletListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.6
        }
    }
};

const bulletVariants = {
    hidden: { x: -25, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
        }
    }
};

const stackVariants = {
    hidden: { scale: 0.85, opacity: 0, y: 30 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 15,
            delay: 0.5
        }
    }
};

const footerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
            delay: 0.8
        }
    }
};

function Hero() {
    const stackCards = [
        <div className="stack-main-card" key="card-bg-1">
            <img
                src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005371/3.jpg_fc4dwx.webp"
                alt="1st Image"
                className="stack-image"
            />
        </div>,
        <div className="stack-main-card" key="card-bg-2">
            <img
                src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005264/2.jpg_em2dpp.webp"
                alt="2nd Image"
                className="stack-image"
            />
        </div>,
        <div className="stack-main-card" key="card-bg-3">
            <img
                src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005372/6.jpg_rdhhol.webp"
                alt="3rd Image"
                className="stack-image"
            />
        </div>,
        <div className="stack-main-card" key="card-main">
            <img
                src="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785005373/7.jpg_yzns10.webp"
                alt="4th Image"
                className="stack-image"
            />
        </div>
    ];

    return (
        <>
            <motion.main 
                className="hero-grid-layout"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Curved looping text line behind the stack */}
                <CurvedLoop
                    marqueeText="• Admission Open for 2026 • Play Group to VIII • Let's learn, laugh and thrive together! • "
                    speed={2.2}
                    curveAmount={250}
                />

                {/* Left Column */}
                <motion.div 
                    className="hero-left-col"
                    variants={leftColVariants}
                >
                    <motion.h1 
                        className="hero-large-title"
                        variants={titleVariants}
                    >
                        We build<br />
                        Creative, Confident &<br />
                        Compassionate<br />
                        leaders of <br/>
                        tomorrow
                    </motion.h1>

                    <motion.ul 
                        className="hero-bullet-list"
                        variants={bulletListVariants}
                    >
                        <motion.li variants={bulletVariants}>
                            <span className="bullet-icon"><FcApproval /></span>
                            Outdoor Sports
                        </motion.li>
                        <motion.li variants={bulletVariants}>
                            <span className="bullet-icon"><FcApproval /></span>
                            Table Tennis
                        </motion.li>
                        <motion.li variants={bulletVariants}>
                            <span className="bullet-icon"><FcApproval /></span>
                            Cricket Pitch
                        </motion.li>
                        <motion.li variants={bulletVariants}>
                            <span className="bullet-icon"><FcApproval /></span>
                            Play Based Learning
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Middle Column (Rotating Card Stack) */}
                <motion.div 
                    className="hero-middle-col"
                    variants={stackVariants}
                >
                    <Stack
                        cards={stackCards}
                        randomRotation={true}
                        sensitivity={150}
                        sendToBackOnClick={true}
                    />
                </motion.div>
            </motion.main>

            {/* Logo/Partner Ticker for Countries */}
            <motion.div 
                className="countries-loop-section"
                initial="hidden"
                animate="visible"
                variants={footerVariants}
            >
                <span className="countries-loop-title">Best School in Aligarh, Uttar Pradesh</span>
                <div className="logo-loop-wrapper">
                    <LogoLoop />
                </div>
            </motion.div>
        </>
    )
}

export default Hero
