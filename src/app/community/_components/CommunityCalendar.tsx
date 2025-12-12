import React from 'react';

export function CommunityCalendar() {
    return (
        <section className="py-24 bg-community-primary text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border-[60px] border-white"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full border-[30px] border-white"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold mb-4">Community Calendar</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">Don't miss out on what's happening. From guest lectures to social mixers, stay connected.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="flex-shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">OCT</span>
                            <span className="block text-3xl font-serif font-bold">12</span>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-white text-community-primary px-2 py-0.5 rounded font-bold uppercase">Lecture</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> 14:00 - 16:00</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Future of AI Ethics: Panel Discussion</h3>
                            <p className="text-sm text-gray-300">Main Auditorium • Guest Speaker: Dr. Sarah Connor</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Register Now</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="flex-shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">OCT</span>
                            <span className="block text-3xl font-serif font-bold">15</span>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded font-bold uppercase">Social</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> 18:00 - 21:00</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Fall Semester Mixer</h3>
                            <p className="text-sm text-gray-300">Student Center Courtyard • Live Music &amp; Food</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Register Now</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                        <div className="flex-shrink-0 w-full md:w-24 text-center mb-4 md:mb-0 md:mr-8 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-8">
                            <span className="block text-sm uppercase tracking-wider opacity-70">OCT</span>
                            <span className="block text-3xl font-serif font-bold">22</span>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded font-bold uppercase">Workshop</span>
                                <span className="text-xs opacity-70 flex items-center"><span className="material-icons-outlined text-sm mr-1">schedule</span> 10:00 - 13:00</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">Career Prep: Building Your Portfolio</h3>
                            <p className="text-sm text-gray-300">Innovation Lab 3 • Bring your laptop</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                            <button className="bg-transparent border border-white hover:bg-white hover:text-community-primary px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer">Register Now</button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a className="inline-flex items-center text-sm font-bold text-white hover:text-gray-200 transition" href="#">
                        View Full Calendar <span className="material-icons-outlined ml-2">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
