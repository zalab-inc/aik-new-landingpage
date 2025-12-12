import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { CategoryCards } from './_components/CategoryCards';
import { FAQSection } from './_components/FAQSection';
import { ContactCTA } from './_components/ContactCTA';

export default function FAQPage() {
    return (
        <main className="bg-faq-bg-light dark:bg-faq-bg-dark text-faq-text-light dark:text-faq-text-dark transition-colors duration-300 font-sans min-h-screen">
            <Navbar />
            <Hero />
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24 relative z-10">
                <CategoryCards />
                <FAQSection />
                <ContactCTA />
            </section>
            <Footer />
        </main>
    );
}