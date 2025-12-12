import React from 'react';

export function CTA() {
    return (
        <section className="py-24 bg-program-primary text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Innovate?</h2>
                <p className="text-lg text-gray-200 mb-8 font-light">Join thousands of students transforming their careers with our specialized learning paths.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-white text-program-primary font-bold rounded-full hover:bg-gray-100 transition shadow-lg cursor-pointer">
                        Enroll Today
                    </button>
                    <button className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white/10 transition cursor-pointer">
                        Contact Admissions
                    </button>
                </div>
            </div>
        </section>
    );
}
