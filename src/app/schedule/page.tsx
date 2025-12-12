import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { EventFilters } from './_components/EventFilters';
import { EventList } from './_components/EventList';
import { FeaturedReplay } from './_components/FeaturedReplay';

export default function SchedulePage() {
    return (
        <main className="bg-schedule-bg-light dark:bg-schedule-bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Hero />
            <EventFilters />
            <EventList />
            <FeaturedReplay />
            <Footer />
        </main>
    );
}