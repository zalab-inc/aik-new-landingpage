import React from 'react';
import { CheckCircle } from 'lucide-react';

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-bootcamp-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why learn with KelasInovatif?</h2>
                        <p className="text-bootcamp-accent/90 text-lg mb-8 max-w-md">
                            Our bootcamps are more than just classes. They are a community-driven experience designed to accelerate your career and research impact.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Live Mentorship</h4>
                                    <p className="text-white/70 text-sm">Get real-time feedback from industry experts.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Practical Projects</h4>
                                    <p className="text-white/70 text-sm">Build a portfolio that showcases your new skills.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-bootcamp-accent mt-1 w-6 h-6" />
                                <div>
                                    <h4 className="font-bold text-lg">Lifelong Access</h4>
                                    <p className="text-white/70 text-sm">Review course materials whenever you need them.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">95%</div>
                            <div className="text-sm text-white/80">Completion Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10 translate-y-8">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">500+</div>
                            <div className="text-sm text-white/80">Papers Published</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">50+</div>
                            <div className="text-sm text-white/80">Expert Mentors</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10 translate-y-8">
                            <div className="text-4xl font-bold text-bootcamp-accent mb-2">4.9</div>
                            <div className="text-sm text-white/80">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
