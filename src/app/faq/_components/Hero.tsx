"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function Hero() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search functionality can be implemented here
        console.log('Searching for:', searchQuery);
    };

    return (
        <section className="relative bg-faq-primary pt-32 pb-24 sm:pb-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-faq-secondary opacity-10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light mb-10">
                    Have questions? We're here to help. Find answers to the most common questions about admissions, student life, and academics.
                </p>
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400 group-focus-within:text-faq-primary transition-colors" />
                    </div>
                    <input
                        className="block w-full pl-14 pr-32 py-4 rounded-full border-0 bg-white/95 dark:bg-faq-surface-dark/95 backdrop-blur text-gray-900 dark:text-white shadow-xl ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-faq-secondary placeholder:text-gray-500 dark:placeholder:text-gray-400 sm:text-lg sm:leading-6 transition-all"
                        placeholder="Search for answers (e.g. 'tuition', 'housing')..."
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute inset-y-1.5 right-1.5">
                        <button
                            type="submit"
                            className="h-full px-6 bg-faq-primary hover:bg-faq-primary/90 text-white rounded-full font-medium transition-colors text-sm sm:text-base"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
