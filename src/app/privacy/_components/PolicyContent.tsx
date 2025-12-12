import React from 'react';
import { CheckCircle, Info, Mail, Download } from 'lucide-react';

export function PolicyContent() {
    return (
        <div className="lg:w-3/4">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-privacy-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-a:text-privacy-primary dark:prose-a:text-white prose-strong:text-privacy-primary dark:prose-strong:text-white max-w-none">

                {/* Introduction */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="introduction">
                    <h2>1. Introduction</h2>
                    <p>Welcome to KelasInovatif University ("we," "our," or "us"). We respect the privacy of our students, faculty, staff, and website visitors. This Privacy Policy explains who we are, how we collect, share, and use personal information about you, and how you can exercise your privacy rights.</p>
                    <p>This policy applies to all personal information we collect through our website and our online learning platforms. By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.</p>
                </div>

                {/* Information Collection */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="collection">
                    <h2>2. Information We Collect</h2>
                    <p>The personal information that we may collect about you broadly falls into the following categories:</p>

                    <div className="bg-privacy-bg-light dark:bg-privacy-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm my-8 not-prose">
                        <h3 className="font-serif text-xl font-bold text-privacy-primary dark:text-white mb-6">
                            Information you provide voluntarily
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Identity Data:</strong> Includes first name, last name, username or similar identifier, and date of birth.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Contact Data:</strong> Includes billing address, delivery address, email address, and telephone numbers.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Academic Data:</strong> Includes prior educational records, transcripts, research interests, and project submissions during your coursework.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Financial Data:</strong> Includes bank account and payment card details (processed via secure third-party payment gateways).
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p>We also automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.</p>
                </div>

                {/* How We Use Data */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="usage">
                    <h2>3. How We Use Your Data</h2>
                    <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                    <ul>
                        <li><strong>To facilitate account creation and logon process:</strong> If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process.</li>
                        <li><strong>To deliver academic services:</strong> We use your data to grade assignments, track academic progress, and issue certifications or degrees.</li>
                        <li><strong>To request feedback:</strong> We may use your information to request feedback and to contact you about your use of our Website.</li>
                        <li><strong>To protect our Services:</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
                    </ul>
                </div>

                {/* Data Security */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="security">
                    <h2>4. Data Storage &amp; Security</h2>
                    <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
                    <p>All academic records are stored in encrypted databases with strict access controls limited to authorized faculty and administrative staff.</p>
                </div>

                {/* Cookies & Tracking */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="cookies">
                    <h2>5. Cookies &amp; Tracking Technologies</h2>
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

                    <div className="bg-privacy-primary/5 dark:bg-privacy-primary/20 p-6 rounded-xl border-l-4 border-privacy-primary dark:border-privacy-accent not-prose my-6">
                        <p className="text-sm text-privacy-primary dark:text-white font-medium mb-0">
                            <span className="block font-bold mb-1 flex items-center gap-2">
                                <Info className="w-4 h-4" /> Note on Third-Party Analytics:
                            </span>
                            We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/.
                        </p>
                    </div>
                </div>

                {/* Your Rights */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="rights">
                    <h2>6. Your Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <ul>
                        <li>The right to request access and obtain a copy of your personal information.</li>
                        <li>The right to request rectification or erasure of your personal information.</li>
                        <li>The right to restrict the processing of your personal information.</li>
                        <li>The right to object to the processing of your personal information.</li>
                        <li>The right to data portability.</li>
                    </ul>
                    <p>If you are a resident in the European Economic Area (EEA) or United Kingdom (UK) and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority.</p>
                </div>

                {/* Contact Us */}
                <div className="scroll-mt-32" id="contact">
                    <h2>7. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may email our Data Protection Officer (DPO) at <a href="mailto:privacy@kelasinovatif.edu">privacy@kelasinovatif.edu</a> or by post to:</p>

                    <div className="not-prose mt-8 p-8 bg-privacy-surface-light dark:bg-privacy-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
                        <div>
                            <h4 className="font-serif text-2xl text-privacy-primary dark:text-white mb-2">Privacy Office</h4>
                            <address className="not-italic text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                <p className="font-bold">KelasInovatif University</p>
                                <p>123 Innovation Drive</p>
                                <p>Tech District, CA 94043</p>
                                <p>United States</p>
                            </address>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <a className="flex items-center justify-center gap-2 bg-privacy-primary hover:bg-privacy-primary-light text-white px-6 py-3 rounded-full text-sm font-bold transition-colors" href="mailto:privacy@kelasinovatif.edu">
                                <Mail className="w-4 h-4" />
                                Email DPO
                            </a>
                            <button className="flex items-center justify-center gap-2 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-privacy-primary dark:text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
                                <Download className="w-4 h-4" />
                                Download PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
