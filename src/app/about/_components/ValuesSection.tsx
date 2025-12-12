import { Lightbulb, Users, Globe } from "lucide-react";

export function ValuesSection() {
    return (
        <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        The principles that guide our curriculum, campus life, and community
                        interactions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Lightbulb className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Innovation First
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We encourage bold ideas and creative problem-solving. Our labs are
                            playgrounds for the next big breakthrough.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Users className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Inclusive Community
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Diversity is our strength. We are committed to creating a space
                            where every voice is heard and valued.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-about-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-800 group">
                        <div className="w-12 h-12 bg-about-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-about-primary transition-colors">
                            <Globe className="w-6 h-6 text-about-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif text-xl font-bold mb-3 text-about-primary dark:text-white">
                            Global Perspective
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We prepare students to be global citizens, fostering partnerships
                            with institutions around the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
