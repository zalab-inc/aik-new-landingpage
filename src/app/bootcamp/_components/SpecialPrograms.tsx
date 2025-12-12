import React from 'react';
import { Users, Download, Timer, GraduationCap, Beaker, Library, Terminal, Clock, ArrowRight } from 'lucide-react';

export function SpecialPrograms() {
    return (
        <section className="py-20 lg:py-32 bg-bootcamp-bg-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800" id="special-programs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sm font-bold tracking-widest text-bootcamp-primary dark:text-bootcamp-accent uppercase mb-2 block">Advanced Tracks</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">Special Programs</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Deep dive into specialized methodologies. These rigorous programs are designed for researchers aiming for high-impact publication and advanced data analysis.
                    </p>
                </div>
                <div className="space-y-8">
                    {/* Scite Class */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="Scite Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkSRvTogYDDcjL86rC2FvekktTJ7Jzy-R4vyS4qG86M6zFMOzThOe2VLNYSYL7LH58ekV0cmn19KLf_APdMSn41lErUTim9KxI-r36yb1HEs-YTTFtwaWqsuQwDML-8gq2AT2aFqFKt8W3wrXGfE1L4bW4tW6FnD3cTiYYnMDTsxuuVG76eSfavVjylMUIP9WXav0-PYDzDsh3ueQ2M_0JvVSjBJgziqHNF0YcTEKv6oQ3Ffw_5pG6bzjztGycxGu-mywTFO1WZQk" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-bootcamp-accent/20 text-bootcamp-primary dark:text-bootcamp-accent text-xs font-bold rounded-full uppercase">Core Skills</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <Clock className="w-4 h-4 mr-1" /> 4 Weeks
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Scite Class</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Leverage AI to check citations and discover supporting or contrasting evidence for your research papers instantly.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NotebookLM Class */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="NotebookLM Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2hNMSPWTxsMrTdUA0zQzseh5y6uVgvWB2GH10SWiF1MdMSnkdb4iiv9CvVnP-Q44j4I8yelIeBnYncO9Fx_pj4BUS43uglQYmu8UACrCeUZ9e29_QYbGs5IgETr_21hXV8CIveblPvPK82PXDZU7YcT7dQqb7FU21qh0tDKh0yA4RS45hdCUVb5lHrX7vj2HW99-fHGkq4AlzmpPbnwn42CZ5BXpiPr935R30FSdPoG0f0j3_fVbcy7ElPujE2i6jOpM3GYYtZM" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase">New</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <Clock className="w-4 h-4 mr-1" /> 3 Weeks
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">NotebookLM Class</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Master Google's NotebookLM to synthesize complex documents, generate insights, and accelerate your learning process.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cursor Class */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="Cursor Class" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcjATHLBYqkIjstxDxkzfd1Ahry7ZdUlitQ1nvd9tuVhQSiI1Q2PzaMPPwkeqp2PvD9_7k_2x8U2xZox7vFVlgz6STEKgHBXgrVSn2H7VgKoqtYATQG7J0czSU5LAjH6SsmHs7WU1rk2og0JRMgm92l-lT-HWMsnzwg4L1HiO4cDJDaaYLpBowzkl15Ccx3atf838yYnfa137vNrc3yE9nOsEKVlftlckM3L1jfEQTCE7yrWSXMKd1lLrdRZw6dfLq9rZJ-IOPlX8" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded-full uppercase">Coding</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <Clock className="w-4 h-4 mr-1" /> 6 Weeks
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Cursor Class</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    The future of coding is here. Learn to code faster and smarter with Cursor, the AI-first code editor.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Smart PLS */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="Smart PLS and Data Analysis" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn15f9AoWTyZuzLkiLGnGm1vLCbbYZsb6V52olyWwWdaKVQZg9av9YqcUVRPvU6o_Y8CviWNCr1VHnGGOgq976PPI2uIgtxfYzvcGr_uSbbZBrZBaTegb6queZMHsarEpN7v2VrqglGJhWWzAFh5eIyuH3wCO2F1fhFFJEP6KDhPaZ6fXikNZcZ-z5aGp7NpfCT8KYfv6nHmCB5Yx57BcOcf7hpzD4_AlEq_B_3YprGd0RpxxKCVSdf5CdFlcVyRjZUgZ5jJXJ2OQ" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-bootcamp-accent/20 text-bootcamp-primary dark:text-bootcamp-accent text-xs font-bold rounded-full uppercase">Analytics</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <Users className="w-4 h-4 mr-1" /> 20 Spots Left
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Smart PLS and Data Analysis</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    A comprehensive guide to Structural Equation Modeling (SEM) using SmartPLS. Learn to analyze complex data structures, validate models, and interpret results for top-tier journals.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            <img alt="Instructor" className="w-10 h-10 rounded-full border-2 border-white dark:border-program-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ141VSXYafggFAADBSKP2SlhEUixKM9Yjd83ItIIAAjfWy0osVZ7nFQil4Fqr0uWMucYlQh5I3QJa4Guli7TKFzEwj31xnW2ejcaoE3k2tKGd8bJQRiKRNHNDsF2cgOpnAo4ubACStfPvMVoBfZFle8ONwy-8R6HkJvQ-Zj_dxr9xh6bs5HiUIWdL599-xDG-Mv0oS1GTza1KlNNQh6z6SDG1pvUCT8_QHvX9u_tJcYAzwBkobCprpJ7F3XSNQ7Noxsa8HdfA_eI" />
                                            <img alt="Instructor" className="w-10 h-10 rounded-full border-2 border-white dark:border-program-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGMqAY97kL0BpbtLF-_M8mlY1qQuz6JG2TIXIu7--_pCCR-VehTSyrtzJ1B0jlKuDN8JkhbvO1OJrm6qvr5FEydXACQ4BNvhEXforQrBH2cBa63jw6DUSV7CZJ6H1s5Zs0lq6uctMvOsygAB8r7gGfKV4NtVUsWRM0USn8eJdBRUpno5jIHjeg-jrzA6XLEzyDHsN_ZO3iPytuLXPVlIJi9OkEUuyMXfLJKU3wsYmj-HN_bfJnOsW7Qo7nCRgbiha5sR3dodBvZQg" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Expert Instructors</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Scopus Mastery */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="Scopus Mastery" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3vHkFavGRP7j1WTFYaQnM-xsS9DtuzA7BQ6tQJRybWcooKTtkvIkk2nMrqpGP7RrYo_ltFMhnjWWtW04jEESZOgCsrgOCCJlhmtlpm61jjt30WkXB9ohFT-0wwrD5PofqyNPSvqBcgyvPh8dMZeFV8sF1Ih8Es4LvRPXUarxxIXNNyPmuPu70K1B_kk2OAEevK6xdLZpHu_jKgW_JChZ0JOw7LPJrwj-ALOUbrT-kbsWquAOiNpZ1oQQF_q7qZYsFW3YJ6LlgZmo" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold rounded-full uppercase">Publication</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <Timer className="w-4 h-4 mr-1" /> Weekend Batch
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Scopus Mastery</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Demystify the path to Scopus-indexed publications. From selecting the right journal to addressing reviewer comments, this bootcamp covers the end-to-end publication lifecycle.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            <img alt="Instructor" className="w-10 h-10 rounded-full border-2 border-white dark:border-program-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj7yj-6zyxWy0UeaVv6x2I_o20uEpgK9dYb4jHwbsZgU6yr6PFO07xFcpIzs9Rer7_CpR-ofqKSoctU9aZacdSHMkEhGFT-9bjyCP91Z9nE1HjRAagkV_Powl76cF_6Tl6EkP3RGblLOMvSKkD7IJjQL20-ZoZ-YVsjNT3lmGSVgCGIgf7mskounWKIF7KepCZ3CvDq15aJwo7NJyhB5EQP7D1bT-saIfZTmuyjfiN8HjeQtC35ohxNetfRibVPZLgYEh9gJHzwy4" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Dr. Sarah Jenkins</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Research Methodology */}
                    <div className="group relative bg-white dark:bg-program-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-5 relative h-64 md:h-auto overflow-hidden">
                                <img alt="Research Methodology" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM28cpo6_wpCnMK0hBAfDmZf7m6Vzzo5Z9MSBaxHXKiiU1PXRDcOKexej1vqrTSVMlFIWXvuiPTjbiuG0huArzcJNS1XkDU9O9rxcEZQppI63F8HUHYL0mERxGRNj5STqTxzwj_iUF3zXkYNjpTP4CY1Kcxcj1KTsIJYBbkqAWykGtYlCrqhVRnJ3goxlR5Pnx5dL4jxs1RwMgbhzX79bfAIRH148z87ixnzxFaP3efyNHQdQsVq6emyweD7-zz5g07xqm3J_M3gs" />
                                <div className="absolute inset-0 bg-bootcamp-primary/20 mix-blend-multiply"></div>
                            </div>
                            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold rounded-full uppercase">Foundational</span>
                                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                        <GraduationCap className="w-4 h-4 mr-1" /> Certificate Included
                                    </span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Research Methodology</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Build a rock-solid foundation for your academic career. Understand qualitative, quantitative, and mixed-method approaches to design rigorous studies.
                                </p>
                                <div className="flex flex-wrap items-center gap-6">
                                    <a className="px-6 py-3 bg-bootcamp-primary text-white rounded-full font-medium shadow hover:bg-bootcamp-primary-light transition-all flex items-center gap-2" href="#">
                                        View Syllabus
                                        <Download className="w-4 h-4" />
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            <img alt="Instructor" className="w-10 h-10 rounded-full border-2 border-white dark:border-program-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEBNBUpr4AVgYV7hlB2n7m37ORgyuqOkU5QqyEvLmkktBi7nvGyWU-1z90Ut7zSr-OLJUA7f6olWgWIqOzvywPl5SkvD-6TNT2NLv6XYnI2oxm1xM3vSsgVbNA5xnkzQy4TX3LEwOcKH9AbJg6WStiPan71_wGRlTF7EkJNPFSEhyCS9rjJua-gVDBjlpynovmJGgN0F-NKDgq4fG1OQu9CR1nkrRRNlNnzoK2nItQw7aGBcfxWAjYjB1XmlfxqEcrdehYZBQ2-P8" />
                                            <img alt="Instructor" className="w-10 h-10 rounded-full border-2 border-white dark:border-program-surface-dark" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg2wCIsblMhDqKhAri85ljVPNEIK6FkPVqR-Dx0GFMPNaF9lrc_Wa03UerIQdAjdxjZlJZT7ofA4_KI_YP6tTs3oOLmyzGfFRkl8tFw0MHE8k9PTDVDkYtpwi6USTifaqUKyE2YGckDTv93VnmzzuyfSLycTJakPpwmZTnJmvWKpd0-Hz_RNjgq-8e6o2wo89J-SDRjmbpgZLgIuASL6FH04uvRQWZLEb_Z-YMr1b1FtcrUhl2CjWJVliJaZjwVnjIOZbszRcjPn8" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">Prof. Alan &amp; Team</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
