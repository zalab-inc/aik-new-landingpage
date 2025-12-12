import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export function HighlightedEvent() {
    return (
        <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="group relative flex gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-20 md:w-24 text-center pt-2">
                        <span className="block text-4xl font-serif font-bold text-schedule-primary dark:text-white mb-1">
                            22
                        </span>
                        <span className="block text-sm font-medium text-gray-500 uppercase tracking-widest">
                            OCT
                        </span>
                        <div className="hidden md:block h-full w-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4"></div>
                    </div>
                    <div className="flex-grow">
                        <div className="relative bg-schedule-primary overflow-hidden rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute inset-0 z-0">
                                <img
                                    alt="Students gathering"
                                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7h89z2lNbhE_KFW08s32IBGUu22uwJEWUhDpwuvVnyl6E6OuZoATuC0Krz1MX-btASPoH6rISBYbHIm0_XFzzKKlDdgp_xpmcls7Rm0l1Cp3HyWrd38D3I--tMPnMZcS7dseQWONxRiTgrOnFLydv9VGMofKzC-_p5s4oJ6XE6I2KrV98EsP4rMelvNaliWQwR8tXFsb7fNZ31A527TB0tpppBWl2-0WgUVOiUzFHZ96hEnWK4YAZLdY2XXw6eAuMPxZGeed5t4"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-schedule-primary via-schedule-primary to-transparent opacity-90"></div>
                            </div>
                            <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-400 text-schedule-primary mb-4">
                                        Campus Highlight
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-3 font-serif">
                                        Annual Innovation Summit
                                    </h3>
                                    <p className="text-gray-200 mb-6 leading-relaxed max-w-lg">
                                        Our biggest event of the year. Student showcases, guest panels from industry leaders, and the innovation awards ceremony.
                                    </p>
                                    <div className="flex flex-wrap gap-6 text-sm text-gray-200 mb-6">
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-yellow-400" />
                                            All Day Event
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-yellow-400" />
                                            Main Auditorium
                                        </span>
                                    </div>
                                    <button className="bg-white text-schedule-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 cursor-pointer">
                                        Register Now
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
