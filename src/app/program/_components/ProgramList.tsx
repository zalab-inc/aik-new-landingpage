import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Code, Clock } from 'lucide-react';

export function ProgramList() {
    return (
        <section className="py-20 md:py-32 bg-program-bg-light dark:bg-program-bg-dark relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-program-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-program-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="space-y-24">
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-program-accent dark:bg-program-primary/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5 relative">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
                                    <img alt="Students analyzing scientific data" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpmfB581a6gbvp8aaUkESasO6VhITZ1rDatiqVa9BwzSHKOJnHb6TN_aq7X5fF5kGncC-n_l-lWaOD6KdXvHXagkChl9F-vP1sxt5BOJUgGfCVHZZu_cdWF26NCyp2hWek51sxzpHx5-2chsPSChUEfKKo7q9SpEwtPHbXzbXrQ2jNcoobf3FlRcCjsuSGmEtcwtUQvUJQkmUQrGsJidEJ4Bl9LzcnA8iOBeQQI0CKXS-Z2dVJVCJ2JPNUSVxcRQPTGzlR2zgFWXE" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-program-primary dark:text-white flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> 8 Weeks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">Research Tools</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                    Scite Class: Advanced Citation Analysis
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Master the art of verifying scientific claims. This intensive program teaches you how to leverage Smart Citations to understand the context of references and evaluate the reliability of research papers effectively.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Citation Context</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Deep dive into supporting &amp; contrasting evidence.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Lit Review Mastery</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Streamline your literature review workflow.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <a className="inline-flex items-center gap-2 px-6 py-3 bg-program-primary dark:bg-program-primary text-white rounded-lg font-semibold hover:bg-program-primary/90 dark:hover:bg-program-primary/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105" href="/class-scite">
                                        View Program Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-program-accent dark:bg-program-primary/20 rounded-br-full -ml-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">AI Assistance</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                    NotebookLM Class: Personalized AI Learning
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Transform your notes into a personalized AI tutor. Learn to organize complex information, generate summaries, and interact with your own documents using advanced language models grounded in your specific sources.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <Sparkles className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Source Grounding</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">AI answers based strictly on your documents.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Sparkles className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Idea Synthesis</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Connect dots across multiple PDFs and notes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <a className="inline-flex items-center gap-2 px-6 py-3 bg-program-primary dark:bg-program-primary text-white rounded-lg font-semibold hover:bg-program-primary/90 dark:hover:bg-program-primary/80 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105" href="#">
                                        View Program Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                            <div className="lg:col-span-5 relative order-1 lg:order-2">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
                                    <img alt="Students using tablets for digital learning" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyCM4lCIev0xztsmTsV-UFYthLMki4LnEV1PQ_-unaX8C1l6Id_zrae_-jstA6b51IYKt894B4Wq5H1qeYNKG3E31CV_RuHRJWyU-kvmwRb92-JZmukzcyD2RNVQJSDjP4DMnw4NwP30MYuXFkHDmFzLIEBndC0Zod_4Jrno3n5GHumAXxSg5EP83SXoplzf__0sb4yk3V8Xy0-ARvlGXKBEp63_zy3nK8pIUS71MoBlyQlKa71bBsDtAMYoTKqnFfiRcluj7Io8I" />
                                    <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-program-primary dark:text-white flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> 6 Weeks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Cursor Class - SPECIAL PREMIUM CLASS */}
                    <div className="group relative bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900/20 rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 dark:border-amber-700/50 overflow-hidden">
                        {/* Premium Badge */}
                        <div className="absolute top-6 right-6 z-20">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 blur-lg opacity-50 animate-pulse"></div>
                                <span className="relative px-4 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 text-white rounded-full shadow-lg flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Special Class
                                </span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-amber-300/20 via-orange-300/10 to-transparent dark:from-amber-600/20 dark:via-orange-600/10 rounded-tl-full -mr-24 -mb-24 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-300/20 via-orange-300/10 to-transparent dark:from-amber-600/20 dark:via-orange-600/10 rounded-br-full -ml-16 -mt-16"></div>

                        {/* Sparkle Effects */}
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-amber-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                            <div className="lg:col-span-5 relative">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative ring-2 ring-amber-200 dark:ring-amber-700/50">
                                    <img alt="Coding on a laptop screen" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8pBvZT3EufRYzcZJKa23NdCupK23axMelTMC02IIOeFHRcIsYlBSdGoBt5EIT3xtBXCdtDUkD5zZlyuHHOqcE-MPrnmaizk-4QgBscLU4M_mfWw5RPNUSlPju3xySFJD30kM7_XTGgmHEyR7D1i-0gdp2teQ1yqgPnI0fSOCwtb_Ann-X3Y8nidNobxrPzS5nAB8eo0N9tEY8AmQSD2y0_o2f3qHzpu6GNZo2bGzCgLPpK4n6yGhtMmHgFleFQo9bRfLzSrUiuEA" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-500/95 to-orange-500/95 dark:from-amber-600/95 dark:to-orange-600/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg ring-1 ring-white/20">
                                        <span className="text-xs font-bold text-white flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> 10 Weeks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 text-orange-800 dark:text-orange-200 rounded-full border border-orange-200 dark:border-orange-700">Development</span>
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-700">AI-Powered</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-gray-900 via-amber-900 to-orange-900 dark:from-white dark:via-amber-200 dark:to-orange-200 bg-clip-text text-transparent">
                                    Cursor Class: AI-First Code Editing
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Step into the future of software development. Learn to code faster and smarter with Cursor, the AI-powered code editor. From generating boilerplate to refactoring legacy codebases, unlock productivity superpowers.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-gradient-to-r from-amber-200 via-orange-200 to-amber-200 dark:from-amber-700/50 dark:via-orange-700/50 dark:to-amber-700/50">
                                    <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm">
                                        <Code className="text-amber-600 dark:text-amber-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Smart Refactoring</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Describe changes in plain English.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg backdrop-blur-sm">
                                        <Code className="text-amber-600 dark:text-amber-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Codebase Chat</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Ask questions about your entire project.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 flex gap-4">
                                    <a className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white rounded-lg font-bold transition-all duration-300 shadow-xl shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-600/50 hover:scale-105 ring-2 ring-amber-400/50" href="#">
                                        View Program Details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">Limited Seats Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
