"use client";

import { useState } from 'react';
import { MapPin, Clock, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

interface JobListing {
    category: string;
    categoryColor: string;
    location: string;
    title: string;
    description: string;
    type: string;
    salary: string;
    experience: string;
    isPrimary?: boolean;
}

export function JobOpenings() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

    const handleApplyClick = (job: JobListing) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const jobs: JobListing[] = [
        {
            category: "Engineering",
            categoryColor: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
            location: "Remote / Hybrid",
            title: "Senior AI Engineer",
            description: "Lead the development of our adaptive learning algorithms. You will architect scalable machine learning models that personalize the educational journey for thousands of students globally. Experience with PyTorch and Transformer models required.",
            type: "Full-time",
            salary: "$160k - $220k",
            experience: "5+ Years Exp.",
            isPrimary: true
        },
        {
            category: "AI Operations",
            categoryColor: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
            location: "Campus HQ",
            title: "Senior Prompt Engineer",
            description: "Craft the language that drives our AI tutors. You will design, test, and optimize complex prompt chains to ensure high-quality, pedagogically sound interactions between students and our AI systems. A background in linguistics or education is a plus.",
            type: "Full-time",
            salary: "$130k - $180k",
            experience: "3+ Years Exp."
        },
        {
            category: "Creative Tech",
            categoryColor: "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
            location: "Remote",
            title: "Vibe Coder",
            description: "We need a developer with an artistic soul. As a Vibe Coder, you will focus on the \"feel\" of our digital campus—animations, micro-interactions, and sound design that make learning delightful. Proficiency in WebGL, Three.js, and creative coding frameworks is essential.",
            type: "Contract / Full-time",
            salary: "Competitive",
            experience: "Portfolio Required"
        }
    ];

    return (
        <div className="py-24 bg-white dark:bg-gray-900" id="openings">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-eduzin-dark dark:text-white/80 font-bold text-xs tracking-widest uppercase mb-3 block">Current Opportunities</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-eduzin-dark dark:text-white mb-6">Join Our Faculty & Tech Team</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We are currently seeking exceptional talent to fill the following strategic roles. If you are passionate about the intersection of AI and education, we want to hear from you.</p>
                </div>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-eduzin-dark/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 ${job.categoryColor} text-xs font-semibold rounded-full`}>{job.category}</span>
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {job.location}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-eduzin-dark dark:text-white mb-3 group-hover:text-eduzin-dark transition-colors">{job.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-3xl leading-relaxed">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <DollarSign className="w-4 h-4" />
                                            {job.salary}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" />
                                            {job.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    {job.isPrimary ? (
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="w-full md:w-auto bg-eduzin-dark hover:bg-eduzin-dark/90 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-eduzin-dark/20"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="w-full md:w-auto bg-white dark:bg-gray-700 border-2 border-eduzin-dark dark:border-gray-600 text-eduzin-dark dark:text-white hover:bg-eduzin-dark hover:text-white dark:hover:bg-eduzin-dark dark:hover:border-eduzin-dark px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 dark:text-gray-400 mb-4">Don't see a role that fits? We're always looking for talent.</p>
                    <a className="inline-flex items-center text-eduzin-dark dark:text-white font-medium hover:underline decoration-2 underline-offset-4" href="#">
                        Send us your general application
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>

            {/* Application Modal */}
            {selectedJob && (
                <ApplicationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    jobTitle={selectedJob.title}
                    jobCategory={selectedJob.category}
                />
            )}
        </div>
    );
}
