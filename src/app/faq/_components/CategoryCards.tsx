import React from 'react';
import { GraduationCap, BookOpen, Home } from 'lucide-react';

export function CategoryCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a
                className="bg-faq-surface-light dark:bg-faq-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer block"
                href="#admissions"
            >
                <div className="w-12 h-12 bg-faq-secondary/20 dark:bg-faq-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-faq-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-faq-text-light dark:text-faq-text-dark group-hover:text-faq-primary dark:group-hover:text-faq-secondary transition-colors">
                    Admissions & Aid
                </h3>
                <p className="text-sm text-faq-muted-light dark:text-faq-muted-dark leading-relaxed">
                    Application deadlines, requirements, scholarship opportunities, and tuition fees.
                </p>
            </a>

            <a
                className="bg-faq-surface-light dark:bg-faq-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer block"
                href="#academics"
            >
                <div className="w-12 h-12 bg-faq-primary/10 dark:bg-faq-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-faq-primary dark:text-faq-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-faq-text-light dark:text-faq-text-dark group-hover:text-faq-primary dark:group-hover:text-faq-secondary transition-colors">
                    Academics
                </h3>
                <p className="text-sm text-faq-muted-light dark:text-faq-muted-dark leading-relaxed">
                    Course catalogs, research programs, faculty information, and grading policies.
                </p>
            </a>

            <a
                className="bg-faq-surface-light dark:bg-faq-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer block"
                href="#campus-life"
            >
                <div className="w-12 h-12 bg-faq-primary/10 dark:bg-faq-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-6 h-6 text-faq-primary dark:text-faq-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-faq-text-light dark:text-faq-text-dark group-hover:text-faq-primary dark:group-hover:text-faq-secondary transition-colors">
                    Campus Life
                </h3>
                <p className="text-sm text-faq-muted-light dark:text-faq-muted-dark leading-relaxed">
                    Student housing, clubs, sports facilities, and dining options on campus.
                </p>
            </a>
        </div>
    );
}
