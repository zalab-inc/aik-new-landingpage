"use client";

import React, { useState } from 'react';
import { ChevronDown, Printer } from 'lucide-react';

interface AccordionItem {
    id: string;
    number: string;
    title: string;
    content: React.ReactNode;
}

const accordionData: AccordionItem[] = [
    {
        id: 'section-1',
        number: '01',
        title: 'Introduction & Acceptance of Terms',
        content: (
            <>
                <p>
                    By accessing this website, we assume you accept these terms and conditions. Do not continue to use KelasInovatif if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p className="mt-4">
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
                </p>
            </>
        ),
    },
    {
        id: 'section-2',
        number: '02',
        title: 'License & Intellectual Property',
        content: (
            <>
                <p>
                    Unless otherwise stated, KelasInovatif and/or its licensors own the intellectual property rights for all material on KelasInovatif. All intellectual property rights are reserved. You may access this from KelasInovatif for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Republish material from KelasInovatif</li>
                    <li>Sell, rent or sub-license material from KelasInovatif</li>
                    <li>Reproduce, duplicate or copy material from KelasInovatif</li>
                    <li>Redistribute content from KelasInovatif</li>
                </ul>
            </>
        ),
    },
    {
        id: 'section-3',
        number: '03',
        title: 'Student Code of Conduct',
        content: (
            <>
                <p>
                    Students are expected to maintain the highest standards of academic integrity. Any form of cheating, plagiarism, or falsification of records will result in immediate disciplinary action, which may include suspension or expulsion.
                </p>
                <p className="mt-4">
                    Respectful behavior towards faculty, staff, and fellow students is mandatory in both physical and digital spaces provided by the university.
                </p>
            </>
        ),
    },
    {
        id: 'section-4',
        number: '04',
        title: 'User Comments & Content',
        content: (
            <p>
                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. KelasInovatif does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of KelasInovatif, its agents and/or affiliates.
            </p>
        ),
    },
    {
        id: 'section-5',
        number: '05',
        title: 'Limitation of Liability',
        content: (
            <p>
                In no event shall KelasInovatif, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. KelasInovatif, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
        ),
    },
];

export function TermsContent() {
    const [openSections, setOpenSections] = useState<string[]>(['section-1']);

    const toggleSection = (id: string) => {
        setOpenSections((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-terms-surface-light dark:bg-terms-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-6 md:p-10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-serif font-bold text-terms-text-light dark:text-terms-text-dark">
                        Detailed Terms of Service
                    </h2>
                    <button
                        className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => window.print()}
                    >
                        <Printer className="w-4 h-4" />
                        Print
                    </button>
                </div>

                <div className="space-y-4">
                    {accordionData.map((item) => (
                        <div
                            key={item.id}
                            id={item.id}
                            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/50"
                        >
                            <button
                                className="flex justify-between items-center cursor-pointer p-6 w-full text-left"
                                onClick={() => toggleSection(item.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terms-primary text-white flex items-center justify-center font-bold text-sm">
                                        {item.number}
                                    </span>
                                    <h3 className="text-lg font-bold text-terms-text-light dark:text-terms-text-dark">
                                        {item.title}
                                    </h3>
                                </div>
                                <ChevronDown
                                    className={`transition-transform duration-300 text-gray-400 ${openSections.includes(item.id) ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openSections.includes(item.id) && (
                                <div className="px-6 pb-6 pt-0 text-terms-muted-light dark:text-terms-muted-dark prose dark:prose-invert max-w-none animate-fadeIn">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-terms-primary/5 dark:bg-terms-primary/10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-terms-primary/10">
                    <div className="text-center md:text-left">
                        <h4 className="font-serif font-bold text-lg text-terms-primary dark:text-white">
                            Still have questions?
                        </h4>
                        <p className="text-sm text-terms-muted-light dark:text-gray-400 mt-1">
                            Our legal team is available to help clarify any doubts.
                        </p>
                    </div>
                    <a
                        className="px-6 py-3 bg-terms-primary text-white font-medium rounded-full hover:bg-opacity-90 transition-colors shadow-md whitespace-nowrap"
                        href="#"
                    >
                        Contact Legal Team
                    </a>
                </div>
            </div>
        </div>
    );
}
