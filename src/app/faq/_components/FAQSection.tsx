"use client";

import React, { useState } from 'react';
import { ChevronDown, GraduationCap, BookOpen, Home } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    iconColor: string;
    faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        id: 'admissions',
        title: 'Admissions & Financial Aid',
        icon: <GraduationCap className="w-6 h-6" />,
        iconColor: 'text-faq-secondary',
        faqs: [
            {
                question: 'What is the application deadline for the Fall semester?',
                answer: 'The regular decision application deadline for the Fall semester is January 15th. Early action applications are due by November 1st. We recommend submitting all required documents at least one week prior to the deadline to ensure processing.',
            },
            {
                question: 'Are scholarships available for international students?',
                answer: 'Yes, KelasInovatif offers a range of merit-based scholarships for international students. All applicants are automatically considered for these awards upon submission of their application. Need-based aid is also available but requires a separate application submitted by February 1st.',
            },
            {
                question: 'What standardized tests are required?',
                answer: 'We are currently test-optional for most undergraduate programs. Submission of SAT or ACT scores is voluntary and will not negatively impact your application if omitted. However, international students may still need to provide proof of English proficiency (TOEFL/IELTS).',
            },
        ],
    },
    {
        id: 'academics',
        title: 'Academics',
        icon: <BookOpen className="w-6 h-6" />,
        iconColor: 'text-faq-primary dark:text-faq-secondary',
        faqs: [
            {
                question: 'How do I declare or change my major?',
                answer: 'Students generally declare their major by the end of their sophomore year. To declare or change a major, you must meet with your academic advisor to discuss degree requirements and submit the "Change of Major" form through the student portal.',
            },
            {
                question: 'What is the average class size?',
                answer: 'We pride ourselves on a personalized learning environment. The average class size for undergraduate courses is 18 students, with a student-to-faculty ratio of 12:1, ensuring you get direct support from your professors.',
            },
        ],
    },
    {
        id: 'campus-life',
        title: 'Campus Life',
        icon: <Home className="w-6 h-6" />,
        iconColor: 'text-faq-primary dark:text-faq-secondary',
        faqs: [
            {
                question: 'Is on-campus housing guaranteed for freshmen?',
                answer: 'Yes, all first-year students are guaranteed housing in one of our designated freshmen residence halls. We believe living on campus is essential for transitioning to university life and building a community.',
            },
            {
                question: 'Can I bring a car to campus?',
                answer: 'Parking is limited. While upperclassmen may apply for parking permits, freshmen are generally discouraged from bringing cars unless there are specific medical or employment needs. The campus is very walkable and serviced by a robust shuttle system.',
            },
            {
                question: 'What health services are available?',
                answer: 'The University Health Center offers comprehensive primary care, counseling services, and urgent care for minor injuries. All enrolled students have access to these services, most of which are covered by the mandatory student health fee.',
            },
        ],
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<{ [key: string]: number }>({
        admissions: 0, // First item in admissions is open by default
    });

    const toggleItem = (categoryId: string, index: number) => {
        setOpenItems((prev) => ({
            ...prev,
            [categoryId]: prev[categoryId] === index ? -1 : index,
        }));
    };

    return (
        <div className="space-y-12">
            {faqData.map((category) => (
                <div key={category.id} className="scroll-mt-28" id={category.id}>
                    <h2 className="text-2xl font-serif font-bold text-faq-primary dark:text-white mb-6 flex items-center gap-3">
                        <span className={category.iconColor}>{category.icon}</span>
                        {category.title}
                    </h2>
                    <div className="bg-faq-surface-light dark:bg-faq-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden p-2">
                        <div className="space-y-2">
                            {category.faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800/30 rounded-lg"
                                >
                                    <button
                                        className="flex justify-between items-center cursor-pointer p-5 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                                        onClick={() => toggleItem(category.id, index)}
                                    >
                                        <h3 className="text-base md:text-lg font-bold text-faq-text-light dark:text-faq-text-dark pr-4">
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`transition-transform duration-300 text-gray-400 flex-shrink-0 ${openItems[category.id] === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openItems[category.id] === index && (
                                        <div className="px-5 pb-5 pt-0 text-faq-muted-light dark:text-faq-muted-dark prose dark:prose-invert max-w-none text-sm md:text-base animate-fadeIn">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
