import React from 'react';
import { Share2 } from 'lucide-react';

export function ArticleContent() {
    return (
        <article className="bg-white dark:bg-blog-surface-dark rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 mb-12">
            <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
                <img
                    alt="Students collaborating in a modern library"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_3RKJfP18_u2RRxn_-k7j3aTyUnTO5Ey4XIpgijO5hFMBTqnNx2TC-4R_ZhvlBrx6xBoBd7yYx9a0JF3sV-hIzHXHt4xA5_3cVSmtqQUJC7OhSgTFcFHChfGb9hMF3MKu1cTsLfi-Y3J-jy-B5zs7qp2Hb3fRkEwikZqst9IEVpl4p1FbkzRjbJlUi6qWs2dDNhUCZkX-Xm311S6__bz2O3RtHTaa-XFe7Eq2Dm198J1FNiOciToYyX46wVx8SCTloBFoJqWAy6E"
                />
            </div>
            <div className="p-8 md:p-12 lg:p-16">
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-blog-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-a:text-blog-primary dark:prose-a:text-blog-accent prose-blockquote:border-blog-accent">
                    <p className="lead font-serif italic text-2xl text-blog-primary dark:text-white/90 mb-8">
                        As technology reshapes how we learn and interact, universities must adapt. KelasInovatif is leading the charge with hybrid classrooms, AI-driven curriculum, and a focus on real-world application.
                    </p>
                    <p>
                        The traditional lecture hall model has served us well for centuries, but the rapid pace of technological advancement demands a new approach. Today's students are digital natives, accustomed to instant information and collaborative online environments. To prepare them for the workforce of tomorrow, we must integrate these tools into the very fabric of their education.
                    </p>
                    <p>
                        At KelasInovatif, we believe that the university experience should be immersive, flexible, and deeply connected to the global community. This isn't just about putting lectures online; it's about reimagining the pedagogy itself.
                    </p>
                    <h2 className="mt-10 mb-6 text-3xl">The Hybrid Classroom</h2>
                    <p>
                        One of our flagship initiatives is the "borderless classroom." By combining physical attendance with high-definition virtual participation, we allow students from different continents to work on projects together in real-time. This not only democratizes access to quality education but also fosters cross-cultural communication skills essential for the modern workplace.
                    </p>
                    <blockquote className="my-10 border-l-4 border-blog-accent bg-gray-50 dark:bg-gray-800/50 py-6 px-8 rounded-r-xl not-italic">
                        <p className="font-serif text-xl leading-relaxed text-blog-primary dark:text-white mb-2">
                            "Education is no longer about the transmission of knowledge, but the co-creation of it. Our students aren't just consumers; they are active participants in the discovery process."
                        </p>
                        <cite className="not-italic text-sm font-bold text-gray-500 block mt-4">
                            — Dr. Elena Rodriguez, Dean of Innovation
                        </cite>
                    </blockquote>
                    <h3 className="mt-8 mb-4 text-2xl">Integrating AI responsibly</h3>
                    <p>
                        Artificial Intelligence is transforming every industry, and education is no exception. Rather than banning AI tools, we are teaching students how to use them ethically and effectively. From personalized learning assistants that adapt to each student's pace to complex data analysis in research projects, AI is becoming a partner in the learning journey.
                    </p>
                    <p>
                        However, we remain steadfast in our commitment to the humanities. Critical thinking, empathy, and ethical reasoning are skills that algorithms cannot replicate. Our curriculum ensures that as students gain technical proficiency, they also deepen their understanding of the human condition.
                    </p>
                    <figure className="my-10">
                        <img
                            alt="Students using tablets in a bright classroom"
                            className="rounded-xl w-full h-auto object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuf4qno2Jwc74tkxip7k3r85qAa6-kdqP6QieN26q0Qm-thIVCLIwQjGIGVTMuuHz_bM0_OWrEaTP8k3qopFPqTC7XRgAwFH4X8SvFoR_bXwB6JXbXRr4L04adKZrQ_SbKQwmAj7kpzFz5_FfPFxFLQ3xnmHlcgpIo68KLOQ2Sy6zEIxZdI8rmZ9WxICAhJpPYFFOH-jNkKLZT93S8B9wtQZBiJQQjz9tmLiMRaMxpsMTgzq4E54BfBPGHbWbdXowsYA_A_RlGpyQ"
                        />
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                            Students utilizing AI tools for collaborative research projects.
                        </figcaption>
                    </figure>
                    <p>
                        Join us as we step boldly into this new era. The future of education is here, and it is more exciting, inclusive, and innovative than ever before.
                    </p>
                </div>

                {/* Tags and Share */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">Tags:</span>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Education
                        </a>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Technology
                        </a>
                        <a className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-blog-primary hover:text-white hover:border-blog-primary transition-colors duration-300" href="#">
                            Innovation
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Share:</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#3b5998] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-blog-primary hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
