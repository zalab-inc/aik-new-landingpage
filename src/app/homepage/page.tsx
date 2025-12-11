"use client";

import { useState, useEffect } from 'react';
import { Navbar } from './_components/Navbar';
import { Hero } from './_components/Hero';
import { StatsSection } from './_components/StatsSection';
import { CoursesSection } from './_components/CoursesSection';
import { FeaturesSection } from './_components/FeaturesSection';
import { Testimonials } from './_components/Testimonials';
import { PromoSection } from './_components/PromoSection';
import { EventSection } from './_components/EventSection';
import { FaqSection } from './_components/FaqSection';
import { NewsSection } from './_components/NewsSection';
import { Footer } from './_components/Footer';
import { AIChatBot } from './_components/AIChatBot';
import { CourseDetailView } from './_components/CourseDetailView';
import { Course } from './types';

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCourse]);

  if (selectedCourse) {
    return (
      <main className="w-full overflow-x-hidden font-sans">
        <CourseDetailView course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        <AIChatBot />
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <div id="about">
        <StatsSection />
      </div>
      <CoursesSection onCourseSelect={setSelectedCourse} />
      <FeaturesSection />
      <Testimonials />
      <PromoSection />
      <EventSection />
      <FaqSection />
      <NewsSection />
      <div id="contact">
        <Footer />
      </div>
      <AIChatBot />
    </main>
  );
}

