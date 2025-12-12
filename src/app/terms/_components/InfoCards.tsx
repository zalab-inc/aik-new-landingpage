import React from 'react';
import { Gavel, GraduationCap, Lock } from 'lucide-react';

export function InfoCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Gavel className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    User Agreement
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    By accessing this website, you accept these terms and conditions in full. Do not continue to use if you disagree.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-1">
                    Read More →
                </a>
            </div>

            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    Academic Integrity
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    We uphold high standards of academic honesty. Plagiarism and cheating are strictly prohibited.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-3">
                    Read More →
                </a>
            </div>

            <div className="bg-terms-surface-light dark:bg-terms-surface-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group">
                <div className="w-12 h-12 bg-terms-primary/10 dark:bg-terms-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6 text-terms-primary dark:text-terms-secondary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2 text-terms-text-light dark:text-terms-text-dark">
                    Privacy Policy
                </h3>
                <p className="text-sm text-terms-muted-light dark:text-terms-muted-dark leading-relaxed">
                    Your data is safe with us. We collect only what is necessary to improve your learning experience.
                </p>
                <a className="inline-block mt-4 text-sm font-semibold text-terms-primary hover:underline dark:text-white" href="#section-5">
                    Read More →
                </a>
            </div>
        </div>
    );
}
