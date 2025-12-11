import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { CoursesSection } from './components/CoursesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Testimonials } from './components/Testimonials';
import { PromoSection } from './components/PromoSection';
import { EventSection } from './components/EventSection';
import { FaqSection } from './components/FaqSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { AIChatBot } from './components/AIChatBot';
import { CourseDetailPage } from './components/CourseDetailPage';
import { Course } from './types';

function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCourse]);

  if (selectedCourse) {
    return (
      <main className="w-full overflow-x-hidden font-sans">
        <CourseDetailPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />
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

export default App;