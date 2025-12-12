import React from 'react';
import { Clock } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 bg-privacy-primary overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <div className="max-w-3xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-xs font-bold tracking-wider uppercase mb-6 text-white/80 border border-white/20">
                        Legal &amp; Compliance
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                        At KelasInovatif, we are committed to protecting your personal information and your right to privacy. This policy outlines how we collect, use, and safeguard your data across our learning platform.
                    </p>
                    <p className="mt-8 text-sm text-white/60 font-mono flex items-center gap-2 justify-center md:justify-start">
                        <Clock className="w-4 h-4" /> Last updated: October 24, 2024
                    </p>
                </div>
            </div>
        </section>
    );
}
