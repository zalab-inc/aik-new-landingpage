import React from 'react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-schedule-accent dark:bg-gray-800 text-schedule-primary dark:text-green-400 text-xs font-semibold tracking-wider mb-6">
                    ACADEMIC CALENDAR
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Upcoming Events <br />
                    <span className="italic font-normal text-gray-500 dark:text-gray-400">&amp; Schedule</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Discover workshops, lectures, and campus activities designed to broaden your perspective and enhance your learning journey.
                </p>
            </div>
        </section>
    );
}
