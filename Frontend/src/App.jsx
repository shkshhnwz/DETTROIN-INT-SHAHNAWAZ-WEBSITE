import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './ui/PillNav/PillNav'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/Aboutus'
import Contact from './components/Contact/Contact'
import Admission from './components/AdmissionForm/Admission'
import AdmissionProcedure from './components/AdmissionForm/AdmissionProcedure'
import InfoofSchool from './components/InfoofSchool/InfoofSchool';
import DomeGalleryComponent from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import { motion } from 'motion/react'

import './components/Hero/Hero.css'
import InfoofService from './components/InfoofSchool/InfoofSchool';

function App() {
    const location = useLocation();
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about-us' },
        {
            label: 'Academics',
            href: '#academics',
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
            <PillNav 
                logo="https://res.cloudinary.com/dlo9twyi8/image/upload/v1785009037/Excellence-Logo.png_hlmych.webp"
                logoAlt="Excellence International School Logo"
                brandName="Excellence"
                items={navItems} 
                ctaText={null} 
            />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/home" element={<Hero />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admission/enquiry-form" element={<Admission />} />
                <Route path="/admission/procedure" element={<AdmissionProcedure />} />
                <Route path="/gallery" element={<DomeGalleryComponent />} />
                {/* Fallback to Hero for other paths for now */}
                <Route path="*" element={<Hero />} />
            </Routes>
            <InfoofSchool/>
            <Footer/>
        </div>
    );
}

export default App;