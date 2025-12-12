import React from 'react';

export function Hero() {
    return (
        <section className="relative bg-terms-primary pt-32 pb-24 sm:pb-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-terms-secondary opacity-10 rounded-full blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                    Terms &amp; Conditions
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
                    Please read these terms carefully before using our services. They outline the rules and regulations for the use of KelasInovatif's Website and Services.
                </p>
                <div className="mt-8 text-sm text-gray-400">
                    Last Updated: <span className="font-medium text-white">October 24, 2023</span>
                </div>
            </div>
        </section>
    );
}
