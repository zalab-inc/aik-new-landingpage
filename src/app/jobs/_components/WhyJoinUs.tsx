import { Lightbulb, Users, Scale } from 'lucide-react';

export function WhyJoinUs() {
    const benefits = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We don't just follow trends; we set them. Our campus is a playground for new ideas and technological breakthroughs."
        },
        {
            icon: Users,
            title: "Collaborative Growth",
            description: "Work alongside world-class educators and technologists in an environment that values every perspective."
        },
        {
            icon: Scale,
            title: "Work-Life Harmony",
            description: "We believe that rested minds are the most creative. Enjoy flexible schedules and a supportive culture."
        }
    ];

    return (
        <div className="py-20 bg-gray-50 dark:bg-gray-900 relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#1e3a34 0.5px, transparent 0.5px)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 bg-eduzin-dark/10 rounded-full flex items-center justify-center mb-6 text-eduzin-dark dark:text-white">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-eduzin-dark dark:text-white mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
