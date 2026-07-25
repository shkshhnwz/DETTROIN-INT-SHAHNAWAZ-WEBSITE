import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './ui/PillNav/PillNav'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/Aboutus'
import Footer from './components/Footer/Footer';
import { motion } from 'motion/react'

import './components/Hero/Hero.css'

function App() {
    const location = useLocation();
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about-us' },
        {
            label: 'Academics',
            href: '#academics',
            dropdown: [
                {
                    title: 'Our Programs',
                    categories: [
                        {
                            header: 'Pre-Primary & Primary',
                            links: [
                                { label: 'Pre Primary School', href: '/academics/pre-primary' },
                                { label: 'Primary School', href: '/academics/primary' }
                            ]
                        },
                        
                    ]
                }
            ]
        },
        {
            label: 'Admission',
            href: '#admission',
            dropdown: [
                {
                    title: 'Admissions',
                    categories: [
                        {
                            header: 'Information',
                            links: [
                                { label: 'Admission Enquiry Form', href: '/admission/enquiry-form' },
                                { label: 'Admission Procedure', href: '/admission/procedure' }
                            ]
                        }
                    ]
                }
            ]
        },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact us', href: '/contact' },
    ];

    return (
        <div className="app-container">
            <PillNav items={navItems} brandName="Excellence" ctaText={null} />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/home" element={<Hero />} />
                <Route path="/about-us" element={<AboutUs />} />
                {/* Fallback to Hero for other paths for now */}
                <Route path="*" element={<Hero />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;