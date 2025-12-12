import React from 'react';
import { ArrowLeft, ArrowRight, Beaker, Library, Terminal, Clock, ArrowUpRight } from 'lucide-react';

export function RegularPrograms() {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-program-surface-dark relative" id="regular-programs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-widest text-bootcamp-primary dark:text-bootcamp-accent uppercase mb-2 block">Core Skills</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">Regular Programs</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">Essential tools for the modern academic and professional landscape. Master the AI tools that are reshaping research.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-bootcamp-primary hover:text-white hover:border-bootcamp-primary dark:hover:bg-white dark:hover:text-bootcamp-primary transition-all cursor-pointer">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-bootcamp-primary hover:text-white hover:border-bootcamp-primary dark:hover:bg-white dark:hover:text-bootcamp-primary transition-all cursor-pointer">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Scite Class */}
                    <div className="group relative bg-bootcamp-bg-light dark:bg-background-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-bootcamp-primary dark:text-bootcamp-accent uppercase tracking-wider">
                                Popular
                            </div>
                            <img alt="Scite Class" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkSRvTogYDDcjL86rC2FvekktTJ7Jzy-R4vyS4qG86M6zFMOzThOe2VLNYSYL7LH58ekV0cmn19KLf_APdMSn41lErUTim9KxI-r36yb1HEs-YTTFtwaWqsuQwDML-8gq2AT2aFqFKt8W3wrXGfE1L4bW4tW6FnD3cTiYYnMDTsxuuVG76eSfavVjylMUIP9WXav0-PYDzDsh3ueQ2M_0JvVSjBJgziqHNF0YcTEKv6oQ3Ffw_5pG6bzjztGycxGu-mywTFO1WZQk" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-8 relative">
                            <div className="w-12 h-12 bg-bootcamp-primary rounded-xl flex items-center justify-center text-white mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-bootcamp-accent group-hover:text-bootcamp-primary transition-colors">
                                <Beaker className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-bootcamp-primary dark:group-hover:text-bootcamp-accent transition-colors">Scite Class</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-3">
                                Leverage AI to check citations and discover supporting or contrasting evidence for your research papers instantly.
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    4 Weeks
                                </div>
                                <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-bootcamp-primary dark:text-white group-hover:bg-bootcamp-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-bootcamp-primary transition-all" href="#">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* NotebookLM Class */}
                    <div className="group relative bg-bootcamp-bg-light dark:bg-background-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                New
                            </div>
                            <img alt="NotebookLM Class" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2hNMSPWTxsMrTdUA0zQzseh5y6uVgvWB2GH10SWiF1MdMSnkdb4iiv9CvVnP-Q44j4I8yelIeBnYncO9Fx_pj4BUS43uglQYmu8UACrCeUZ9e29_QYbGs5IgETr_21hXV8CIveblPvPK82PXDZU7YcT7dQqb7FU21qh0tDKh0yA4RS45hdCUVb5lHrX7vj2HW99-fHGkq4AlzmpPbnwn42CZ5BXpiPr935R30FSdPoG0f0j3_fVbcy7ElPujE2i6jOpM3GYYtZM" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-8 relative">
                            <div className="w-12 h-12 bg-bootcamp-primary rounded-xl flex items-center justify-center text-white mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-bootcamp-accent group-hover:text-bootcamp-primary transition-colors">
                                <Library className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-bootcamp-primary dark:group-hover:text-bootcamp-accent transition-colors">NotebookLM Class</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-3">
                                Master Google's NotebookLM to synthesize complex documents, generate insights, and accelerate your learning process.
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    3 Weeks
                                </div>
                                <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-bootcamp-primary dark:text-white group-hover:bg-bootcamp-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-bootcamp-primary transition-all" href="#">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Cursor Class */}
                    <div className="group relative bg-bootcamp-bg-light dark:bg-background-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                        <div className="aspect-[4/3] overflow-hidden relative">
                            <img alt="Cursor Class" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcjATHLBYqkIjstxDxkzfd1Ahry7ZdUlitQ1nvd9tuVhQSiI1Q2PzaMPPwkeqp2PvD9_7k_2x8U2xZox7vFVlgz6STEKgHBXgrVSn2H7VgKoqtYATQG7J0czSU5LAjH6SsmHs7WU1rk2og0JRMgm92l-lT-HWMsnzwg4L1HiO4cDJDaaYLpBowzkl15Ccx3atf838yYnfa137vNrc3yE9nOsEKVlftlckM3L1jfEQTCE7yrWSXMKd1lLrdRZw6dfLq9rZJ-IOPlX8" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </div>
                        <div className="p-8 relative">
                            <div className="w-12 h-12 bg-bootcamp-primary rounded-xl flex items-center justify-center text-white mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-bootcamp-accent group-hover:text-bootcamp-primary transition-colors">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-bootcamp-primary dark:group-hover:text-bootcamp-accent transition-colors">Cursor Class</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-3">
                                The future of coding is here. Learn to code faster and smarter with Cursor, the AI-first code editor.
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    6 Weeks
                                </div>
                                <a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-bootcamp-primary dark:text-white group-hover:bg-bootcamp-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-bootcamp-primary transition-all" href="#">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
