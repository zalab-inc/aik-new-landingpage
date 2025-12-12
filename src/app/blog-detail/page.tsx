import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';

export default function BlogDetailPage() {
    return (
        <main className="bg-blog-bg-light dark:bg-blog-bg-dark text-blog-text-light dark:text-blog-text-dark antialiased transition-colors duration-300 min-h-screen">
            <Navbar />
            <Hero />

            {/* Article Content - Simplified for now */}
            <div className="relative -mt-24 lg:-mt-32 pb-16 px-4 sm:px-6 lg:px-8 z-20">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
                        <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
                            <img
                                alt="Students collaborating in a modern library"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_3RKJfP18_u2RRxn_-k7j3aTyUnTO5Ey4XIpgijO5hFMBTqnNx2TC-4R_ZhvlBrx6xBoBd7yYx9a0JF3sV-hIzHXHt4xA5_3cVSmtqQUJC7OhSgTFcFHChfGb9hMF3MKu1cTsLfi-Y3J-jy-B5zs7qp2Hb3fRkEwikZqst9IEVpl4p1FbkzRjbJlUi6qWs2dDNhUCZkX-Xm311S6__bz2O3RtHTaa-XFe7Eq2Dm198J1FNiOciToYyX46wVx8SCTloBFoJqWAy6E"
                            />
                        </div>
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                <p className="lead font-serif italic text-2xl text-blog-primary dark:text-white/90 mb-8">
                                    As technology reshapes how we learn and interact, universities must adapt. KelasInovatif is leading the charge with hybrid classrooms, AI-driven curriculum, and a focus on real-world application.
                                </p>
                                <p>
                                    The traditional lecture hall model has served us well for centuries, but the rapid pace of technological advancement demands a new approach. Today's students are digital natives, accustomed to instant information and collaborative online environments.
                                </p>
                                <h2 className="mt-10 mb-6 text-3xl font-serif">The Hybrid Classroom</h2>
                                <p>
                                    One of our flagship initiatives is the "borderless classroom." By combining physical attendance with high-definition virtual participation, we allow students from different continents to work on projects together in real-time.
                                </p>
                                <blockquote className="my-10 border-l-4 border-blog-accent bg-gray-50 dark:bg-gray-800/50 py-6 px-8 rounded-r-xl">
                                    <p className="font-serif text-xl leading-relaxed text-blog-primary dark:text-white mb-2">
                                        "Education is no longer about the transmission of knowledge, but the co-creation of it."
                                    </p>
                                    <cite className="not-italic text-sm font-bold text-gray-500 block mt-4">
                                        — Dr. Elena Rodriguez, Dean of Innovation
                                    </cite>
                                </blockquote>
                                <p>
                                    Join us as we step boldly into this new era. The future of education is here, and it is more exciting, inclusive, and innovative than ever before.
                                </p>
                            </div>
                        </div>
                    </article>

                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                            Full article content, author bio, comments, and related articles will be displayed here.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}