import React from 'react';

export function ContactCTA() {
    return (
        <div className="mt-16 p-8 bg-faq-primary/5 dark:bg-faq-primary/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-faq-primary/10">
            <div className="text-center md:text-left">
                <h4 className="font-serif font-bold text-2xl text-faq-primary dark:text-white mb-2">
                    Can't find what you're looking for?
                </h4>
                <p className="text-faq-muted-light dark:text-gray-400">
                    Our support team is available Monday through Friday, 9am to 5pm.
                </p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
                <a
                    className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm border border-gray-200 dark:border-gray-700 whitespace-nowrap text-center"
                    href="/contact"
                >
                    Email Support
                </a>
                <a
                    className="px-8 py-3 bg-faq-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-colors shadow-md whitespace-nowrap text-center"
                    href="/contact"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}
