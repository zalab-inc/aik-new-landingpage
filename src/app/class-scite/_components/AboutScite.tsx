import { CheckCircle, TrendingUp } from 'lucide-react';

export function AboutScite() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300" id="about-scite">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200/50 dark:bg-green-900/30 rounded-full blur-2xl"></div>
                        <img
                            alt="Researcher looking at data visualization"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                        />
                        <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Smart Citations</span>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400">AI-powered analysis to see if articles support or contrast your claims.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">The Tool</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">What is Scite?</h3>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                            <p className="mb-4">
                                Scite is an award-winning platform for discovering and evaluating scientific articles via Smart Citations. Smart Citations allow users to see how a publication has been cited by providing the context of the citation and a classification describing whether it provides supporting or contrasting evidence.
                            </p>
                            <p>
                                In this course, we move beyond simple keyword searches. We leverage Scite to understand the <em>conversation</em> happening between researchers, allowing you to build a more robust and defensible literature review.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Verify Claims</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Instantly see if a paper has been retracted or disputed.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Contextual Analysis</h4>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Read the citation context without opening full PDFs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
