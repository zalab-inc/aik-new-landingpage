"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#EAE7E0]/90 dark:bg-[#18181B]/90 backdrop-blur-md shadow-sm border-b border-[#234238]/10 dark:border-white/10 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-eduzin-dark flex items-center justify-center text-white font-serif font-bold italic">K</div>
                    <span className="text-xl font-bold tracking-tight text-eduzin-dark dark:text-white">KelasInovatif</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <a href="/" className="hover:opacity-75 transition-opacity cursor-pointer">HOME +</a>
                    <a href="/about" className="hover:opacity-75 transition-opacity cursor-pointer">ABOUT</a>
                    <a href="/community" className="hover:opacity-75 transition-opacity cursor-pointer">COMMUNITY</a>
                    <a href="/about" className="hover:opacity-75 transition-opacity cursor-pointer">ABOUT</a>
                    <a href="/program" className="hover:opacity-75 transition-opacity cursor-pointer">PROGRAMS</a>
                    <a href="/bootcamp" className="hover:opacity-75 transition-opacity cursor-pointer">BOOTCAMPS</a>
                    <a href="/contact" className="hover:opacity-75 transition-opacity cursor-pointer">CONTACT</a>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer bg-eduzin-dark text-white hover:bg-opacity-90">
                        +123 (456 789 00)
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-current cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="text-black dark:text-white" /> : <Menu className="text-black dark:text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-4 flex flex-col gap-4 text-center">
                    <a href="/" className="text-gray-800 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="/about" className="text-gray-800 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="/community" className="text-gray-800 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Community</a>
                    <a href="/program" className="text-gray-800 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Programs</a>
                    <a href="/contact" className="text-gray-800 font-medium cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    );
}
