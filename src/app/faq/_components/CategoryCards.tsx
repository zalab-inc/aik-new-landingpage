import React from 'react';
import { GraduationCap, BookOpen, Home } from 'lucide-react';

const categories = [
    {
        icon: GraduationCap,
        title: 'Admissions',
        description: 'Learn about application deadlines, requirements, and the enrollment process.',
        iconBg: 'bg-faq-primary/10 dark:bg-faq-primary/20',
        iconColor: 'text-faq-primary dark:text-faq-accent',
    },
    {
        icon: BookOpen,
        title: 'Academic Programs',
        description: 'Details on majors, minors, online courses, and degree requirements.',
        iconBg: 'bg-faq-primary/10 dark:bg-faq-primary/20',
        iconColor: 'text-faq-primary dark:text-faq-accent',
    },
    {
        icon: Home,
        title: 'Student Life',
        description: 'Housing, campus facilities, clubs, and extracurricular activities.',
        iconBg: 'bg-faq-primary/10 dark:bg-faq-primary/20',
        iconColor: 'text-faq-primary dark:text-faq-accent',
    },
];

export function CategoryCards() {
    return (
        <section className="py-16 -mt-12 relative z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-faq-surface-dark rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                <div className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${category.iconColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-faq-primary dark:text-white mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
