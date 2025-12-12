import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { SpecialPrograms } from './_components/SpecialPrograms';
import { WhyChooseUs } from './_components/WhyChooseUs';
import { CTA } from './_components/CTA';

export default function BootcampPage() {
    return (
        <div className="bg-bootcamp-bg-light dark:bg-background-dark min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-bootcamp-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <SpecialPrograms />
                <WhyChooseUs />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}