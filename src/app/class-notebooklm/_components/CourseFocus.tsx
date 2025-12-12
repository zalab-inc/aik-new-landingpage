import { Search, GitBranch, Filter } from 'lucide-react';

export function CourseFocus() {
    const focuses = [
        {
            icon: Search,
            title: "Document Organization & Querying",
            description: "Master the art of structuring your knowledge base and crafting effective queries to extract maximum value from your research materials using AI-powered search."
        },
        {
            icon: GitBranch,
            title: "Cross-Source Synthesis",
            description: "Learn to connect ideas across multiple documents. We teach you how to use NotebookLM to identify patterns, contradictions, and relationships between different sources."
        },
        {
            icon: Filter,
            title: "AI-Assisted Analysis",
            description: "Develop skills in prompt engineering for research. Learn to ask the right questions and validate AI-generated insights against your source materials."
        }
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-eduzin-dark dark:text-green-400 uppercase tracking-wide mb-3">Course Focus</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Mastering AI-Powered Research</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        We don't just teach the tool; we teach the methodology. Learn how to leverage AI to accelerate your research while maintaining academic rigor.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {focuses.map((focus, index) => {
                        const Icon = focus.icon;
                        return (
                            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-eduzin-dark/20 dark:hover:border-eduzin-dark/40">
                                <div className="w-12 h-12 bg-eduzin-dark/10 dark:bg-eduzin-dark/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-eduzin-dark dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{focus.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {focus.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
