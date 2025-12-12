
import React from 'react';
import { Quote, Star, StarHalf } from 'lucide-react';

export function Testimonials() {
    return (
        <section className="py-24 bg-private-surface-light dark:bg-private-surface-dark transition-colors duration-300" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest text-private-primary dark:text-white uppercase mb-4 inline-block px-4 py-1 border border-private-primary dark:border-white rounded-full">Real Results</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white mb-6">Student Success Stories</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        See how our private classes have helped researchers and students break through barriers and achieve their academic goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Michael Chen */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="Student 1" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-QD2bj7jHkkm-JxLJdB8krw6111lb24xb4mOamfiZiAxxI9d9oxDAlIE90biRtJaEPYYoON23QvP-x-wjeoectSxPoquFeJUQmSgevh2P8nOtulHDKtBUiK5DpovuwDFJiHk02BW7WrsAgC52ey8av8dS7A9M4yVGEwm1ucWqRasyj0YZhDy8f6_4iKtkCXS1C4h8Nj-tj9i1V7SujD4GM7xzLXAJwWBXAV_n8tYb_g4ozAUZdx_3YxSl58f-nkPZuRF23IUnmE" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">Michael Chen</p>
                                <p className="text-xs text-gray-500">PhD Candidate</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "The one-on-one sessions with Dr. Jen were transformative. I was stuck on my data analysis for months, and she helped me untangle it in just three sessions."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    {/* Anna Lee */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="Anna Lee" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_vxfK4YhBrsXPXRh9Jcu_W3x70aZm74tzMARat1XrMFcCBx8Rg5vZS4FFqUqr0JJXiEPIC86A1I1r1skWJkdT_wQMnz-arrFQK3r-qRDKbo-kqvmOzKLIJikertXCpZPEb2pNHARzCOSYLQ1GQ6yhRpkMZXhCSXxfAK5GTtgkG662x4A7EoGDvvhtJOQO6Af4gmxfaP37QmxGmSagcN0Xj3ki1Jw-LiaA9DudLr60SZgvBMWW27iEJDec5N1SnrFl1LbAkHOhWXY" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">Anna Lee</p>
                                <p className="text-xs text-gray-500">Research Assistant</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "James opened my eyes to how AI can streamline my literature review process. The private coaching format meant we could work directly on my current project."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <StarHalf className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    {/* David Ross */}
                    <div className="bg-private-bg-light dark:bg-private-bg-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 relative">
                        <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-6 w-16 h-16 opacity-50" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img alt="David Ross" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSpALF3snsD6vn6vpbRm_43JQqhoiMneR6dFOsIpbVChmJ4godaaqJYxzvHUUI56ZKvij6MPdvRe4VmRIRgfYe0AGZqNESzvhxlBA9HimylbtBENzXpo0alTfj_4GwsPUHLlB1JTjOhopcstr90kh30tzL_VQ9pFUSJaF3vCagyEgTkTtO7W6IsldKzqEB6Z8F3kZ_JHADFSOd1SPEvnrXe_Ez0utNUKq7DphvTQKYrU2BVjs8Oj4O2SArigPByQFc30NNksjYaj0" />
                            <div>
                                <p className="font-bold text-private-primary dark:text-white">David Ross</p>
                                <p className="text-xs text-gray-500">Masters Student</p>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
                            "I needed to build a custom scraper for my thesis. Emily's guidance on Cursor was invaluable. Worth every penny for the personalized attention."
                        </p>
                        <div className="flex text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
