"use client";

import { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';

interface Week {
    number: number;
    title: string;
    subtitle: string;
    lessons: string[];
}

export function Syllabus() {
    const [openWeek, setOpenWeek] = useState<number>(0);

    const weeks: Week[] = [
        {
            number: 1,
            title: "Introduction to AI-Assisted Coding",
            subtitle: "Week 1 • 3 Lessons",
            lessons: [
                "Understanding the Cursor interface and AI capabilities",
                "Setting up your development environment",
                "Your first AI-generated code: Building a simple app"
            ]
        },
        {
            number: 2,
            title: "Advanced Code Generation",
            subtitle: "Week 2 • 4 Lessons",
            lessons: [
                "Writing effective prompts for complex features",
                "Iterating on AI-generated code",
                "Debugging with AI assistance"
            ]
        },
        {
            number: 3,
            title: "Refactoring & Optimization",
            subtitle: "Week 3 • 3 Lessons",
            lessons: [
                "Transforming legacy code with AI",
                "Performance optimization techniques",
                "Code review best practices with Cursor"
            ]
        },
        {
            number: 4,
            title: "Final Project & Certification",
            subtitle: "Week 4 • 2 Lessons",
            lessons: [
                "Building a full-stack application with Cursor",
                "Presenting your project and receiving certification"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">Course Syllabus</h2>
                        <p className="text-gray-600 dark:text-gray-400">10 weeks • 24 Video Lessons • 5 Projects</p>
                    </div>
                    <button className="inline-flex items-center gap-2 text-teal-700 dark:text-teal-400 font-medium hover:underline text-sm">
                        Download Syllabus PDF
                        <Download className="w-4 h-4" />
                    </button>
                </div>
                <div className="space-y-4">
                    {weeks.map((week, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border-2 border-gray-200 dark:border-gray-700 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenWeek(openWeek === index ? -1 : index)}
                                className="flex items-center justify-between p-6 cursor-pointer w-full text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-700 to-teal-800 text-white flex items-center justify-center font-bold font-serif shadow-lg">
                                        {week.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{week.subtitle}</p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openWeek === index && (
                                <div className="px-6 pb-6 pt-2 border-t-2 border-gray-200 dark:border-gray-700">
                                    <ul className="space-y-3 mt-4">
                                        {week.lessons.map((lesson, lessonIndex) => (
                                            <li key={lessonIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm">
                                                <svg className="w-5 h-5 text-teal-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                                </svg>
                                                <span>{lesson}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
