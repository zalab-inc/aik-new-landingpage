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
                                    <a className="inline-flex items-center text-program-primary dark:text-white font-semibold group-hover:underline" href="#">
                                        View Program Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                                    <a className="inline-flex items-center text-program-primary dark:text-white font-semibold group-hover:underline" href="#">
                                        View Program Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-program-accent dark:bg-program-primary/20 rounded-tl-full -mr-24 -mb-24 transition-transform group-hover:scale-150 duration-700"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-5 relative">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg relative">
                                    <img alt="Coding on a laptop screen" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8pBvZT3EufRYzcZJKa23NdCupK23axMelTMC02IIOeFHRcIsYlBSdGoBt5EIT3xtBXCdtDUkD5zZlyuHHOqcE-MPrnmaizk-4QgBscLU4M_mfWw5RPNUSlPju3xySFJD30kM7_XTGgmHEyR7D1i-0gdp2teQ1yqgPnI0fSOCwtb_Ann-X3Y8nidNobxrPzS5nAB8eo0N9tEY8AmQSD2y0_o2f3qHzpu6GNZo2bGzCgLPpK4n6yGhtMmHgFleFQo9bRfLzSrUiuEA" />
                                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <span className="text-xs font-bold text-program-primary dark:text-white flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> 10 Weeks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full">Development</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                    Cursor Class: AI-First Code Editing
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Step into the future of software development. Learn to code faster and smarter with Cursor, the AI-powered code editor. From generating boilerplate to refactoring legacy codebases, unlock productivity superpowers.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex items-start space-x-3">
                                        <Code className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Smart Refactoring</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Describe changes in plain English.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Code className="text-program-primary dark:text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Codebase Chat</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Ask questions about your entire project.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <a className="inline-flex items-center text-program-primary dark:text-white font-semibold group-hover:underline" href="#">
                                        View Program Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
