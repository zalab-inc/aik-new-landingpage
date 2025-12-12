import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { ProgramList } from './_components/ProgramList';
import { Testimonial } from './_components/Testimonial';
import { CTA } from './_components/CTA';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Programs - KelasInovatif University',
    description: 'Explore our diverse range of learning programs, from regular classes to intensive bootcamps.',
};

export default function ProgramPage() {
    return (
        <main className="bg-program-bg-light dark:bg-program-bg-dark text-program-text-light dark:text-program-text-dark antialiased transition-colors duration-300 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <ProgramList />
            <Testimonial />
            <CTA />
            <Footer />
        </main>
    );
}