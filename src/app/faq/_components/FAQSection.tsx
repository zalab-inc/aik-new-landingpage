"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
    {
        title: 'Admissions',
        questions: [
            {
                question: 'What are the admission requirements?',
                answer: 'Admission requirements vary by program. Generally, we require a completed application form, transcripts, letters of recommendation, and a personal statement. Some programs may also require standardized test scores or portfolio submissions.',
            },
            {
                question: 'When is the application deadline?',
                answer: 'Application deadlines vary by program and semester. For Fall admission, most programs have a deadline of March 1st. For Spring admission, the deadline is typically October 1st. We recommend applying early as some programs have limited spots.',
            },
            {
                question: 'Do you offer scholarships?',
                answer: 'Yes, we offer a variety of scholarships based on academic merit, financial need, and special talents. Our scholarship committee reviews all applications automatically, and you may also apply for specific named scholarships through our financial aid portal.',
            },
        ],
    },
    {
        title: 'Academic Programs',
        questions: [
            {
                question: 'Can I double major?',
                answer: 'Yes, students can pursue a double major with approval from both departments. You will need to meet all requirements for both majors and work with academic advisors to create a feasible course schedule.',
            },
            {
                question: 'Are online classes available?',
                answer: 'We offer a growing selection of online and hybrid courses. Some programs are available entirely online, while others offer a mix of in-person and virtual learning options. Check with your program advisor for specific availability.',
            },
            {
                question: 'What is the student-to-faculty ratio?',
                answer: 'Our student-to-faculty ratio is 12:1, ensuring personalized attention and mentorship opportunities. Small class sizes allow for more interactive learning experiences and stronger relationships with professors.',
            },
        ],
    },
    {
        title: 'Campus Life',
        questions: [
            {
                question: 'Is housing guaranteed for freshmen?',
                answer: 'Yes, on-campus housing is guaranteed for all first-year students who submit their housing application by the deadline. We offer a variety of residence hall options to fit different preferences and budgets.',
            },
            {
                question: 'What extracurricular activities are available?',
                answer: 'We have over 200 student organizations, including academic clubs, cultural groups, sports teams, performing arts, and community service organizations. Students can also start new clubs with proper approval.',
            },
        ],
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <section className="py-16 bg-white dark:bg-faq-bg-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-faq-primary dark:text-white mb-6">
                            {category.title}
                        </h2>
                        <div className="space-y-3">
                            {category.questions.map((item, questionIndex) => {
                                const key = `${categoryIndex}-${questionIndex}`;
                                const isOpen = openItems[key];
                                return (
                                    <div
                                        key={questionIndex}
                                        className={`rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                                            ? 'bg-white dark:bg-faq-surface-dark shadow-lg border border-faq-primary/20 dark:border-gray-700'
                                            : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700'
                                            }`}
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors"
                                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                                        >
                                            <span className={`font-medium ${isOpen ? 'text-faq-primary dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-faq-primary' : ''
                                                    }`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
