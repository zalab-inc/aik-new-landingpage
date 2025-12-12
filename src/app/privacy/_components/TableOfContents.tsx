"use client";

import React from 'react';

const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'collection', title: '2. Information Collection' },
    { id: 'usage', title: '3. How We Use Data' },
    { id: 'security', title: '4. Data Security' },
    { id: 'cookies', title: '5. Cookies & Tracking' },
    { id: 'rights', title: '6. Your Rights' },
    { id: 'contact', title: '7. Contact Us' },
];

export function TableOfContents() {
    const [activeSection, setActiveSection] = React.useState('introduction');

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <aside className="hidden lg:block lg:w-1/4">
            <nav className="sticky top-32 space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-3">
                    Table of Contents
                </p>
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block px-3 py-2 text-sm font-medium border-l-2 transition-colors ${activeSection === section.id
                                ? 'text-privacy-primary dark:text-white border-privacy-primary dark:border-white bg-privacy-primary/5 dark:bg-white/5 rounded-r-lg'
                                : 'text-gray-600 dark:text-gray-400 hover:text-privacy-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-privacy-surface-dark border-transparent'
                            }`}
                    >
                        {section.title}
                    </a>
                ))}
            </nav>
        </aside>
    );
}
