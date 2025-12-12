import React from 'react';
import { Clock, MapPin, Video, ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';

const events = [
    {
        id: 1,
        day: '12',
        month: 'OCT',
        type: 'Workshop',
        typeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        title: 'Digital Design Fundamentals',
        time: '10:00 AM - 12:30 PM',
        location: 'Creative Lab 204',
        isVirtual: false,
        description: 'An intensive hands-on session covering the basics of UI/UX design, focusing on accessibility and visual hierarchy. Bring your own laptop.',
        speakers: [
            { name: 'Sarah Jenkins', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_vxfK4YhBrsXPXRh9Jcu_W3x70aZm74tzMARat1XrMFcCBx8Rg5vZS4FFqUqr0JJXiEPIC86A1I1r1skWJkdT_wQMnz-arrFQK3r-qRDKbo-kqvmOzKLIJikertXCpZPEb2pNHARzCOSYLQ1GQ6yhRpkMZXhCSXxfAK5GTtgkG662x4A7EoGDvvhtJOQO6Af4gmxfaP37QmxGmSagcN0Xj3ki1Jw-LiaA9DudLr60SZgvBMWW27iEJDec5N1SnrFl1LbAkHOhWXY' },
            { name: 'Mike T.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSpALF3snsD6vn6vpbRm_43JQqhoiMneR6dFOsIpbVChmJ4godaaqJYxzvHUUI56ZKvij6MPdvRe4VmRIRgfYe0AGZqNESzvhxlBA9HimylbtBENzXpo0alTfj_4GwsPUHLlB1JTjOhopcstr90kh30tzL_VQ9pFUSJaF3vCagyEgTkTtO7W6IsldKzqEB6Z8F3kZ_JHADFSOd1SPEvnrXe_Ez0utNUKq7DphvTQKYrU2BVjs8Oj4O2SArigPByQFc30NNksjYaj0' },
        ],
    },
    {
        id: 2,
        day: '15',
        month: 'OCT',
        type: 'Lecture',
        typeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        title: 'The Future of AI in Education',
        time: '2:00 PM - 3:30 PM',
        location: 'Virtual (Zoom)',
        isVirtual: true,
        description: 'Join us for an enlightening talk by Dr. Alan Grant on how artificial intelligence is reshaping personalized learning pathways worldwide.',
        speakers: [
            { name: 'Dr. Alan Grant', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoa-GoELF8L4y2Y8RKWf6t-LZNQjqN1OJT7cPTBYrVQVbLuazl06c7ntVxyBdbctfhiMXncpFkJ6mvOgMjl568uXXhDWDhmtzgQDFGoIB3iPeWH53wsV7wfhYsnySsn3kuGwzSByr_Zr9hNMJe2q1KRl8nBqZwF_GLCEm00ukhaYY751SzFAG-P4IkhV5vYL2HxQx5EYW9DGhSrmx5iZ_p78sLXkuHdEyfrSaKET0EFAYC4dPO9XgyOPmHXdQnnoeA6a8dgFa9DL4' },
        ],
    },
    {
        id: 3,
        day: '28',
        month: 'OCT',
        type: 'Social',
        typeColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        title: 'Fall Networking Mixer',
        time: '6:00 PM - 8:00 PM',
        location: 'Student Center Rooftop',
        isVirtual: false,
        description: 'Connect with alumni and industry partners in a casual setting. Refreshments provided.',
        speakers: [],
    },
];

export function EventList() {
    return (
        <section className="pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {events.map((event, index) => (
                    <div key={event.id} className="group relative flex gap-8 md:gap-12 mb-12">
                        <div className="flex-shrink-0 w-20 md:w-24 text-center pt-2">
                            <span className="block text-4xl font-serif font-bold text-schedule-primary dark:text-white mb-1">
                                {event.day}
                            </span>
                            <span className="block text-sm font-medium text-gray-500 uppercase tracking-widest">
                                {event.month}
                            </span>
                            {index < events.length - 1 && (
                                <div className="hidden md:block h-full w-px bg-gray-200 dark:bg-gray-700 mx-auto mt-4"></div>
                            )}
                        </div>
                        <div className="flex-grow">
                            <div className="bg-schedule-surface-light dark:bg-schedule-surface-dark rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                                    <div>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${event.typeColor} mb-3`}>
                                            {event.type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-schedule-primary dark:group-hover:text-green-400 transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {event.time}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                {event.isVirtual ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                                                {event.location}
                                            </span>
                                        </div>
                                    </div>
                                    <a className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-schedule-primary hover:border-schedule-primary hover:text-white transition-all" href="#">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {event.description}
                                </p>
                                {event.speakers.length > 0 && (
                                    <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-700 pt-4">
                                        <div className="flex -space-x-2">
                                            {event.speakers.map((speaker, idx) => (
                                                <img
                                                    key={idx}
                                                    alt={speaker.name}
                                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                                                    src={speaker.image}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {event.speakers.length === 1 ? 'Speaker:' : 'Led by'}{' '}
                                            <span className="font-semibold text-gray-900 dark:text-white">
                                                {event.speakers[0].name}
                                            </span>
                                            {event.speakers.length > 1 && ' & team'}
                                        </span>
                                    </div>
                                )}
                                <div className="mt-6 md:hidden">
                                    <a className="block w-full text-center py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-schedule-primary hover:text-white hover:border-schedule-primary transition" href="#">
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-schedule-primary text-schedule-primary dark:text-white hover:bg-schedule-primary hover:text-white dark:hover:border-white transition-all font-medium">
                        Load More Events
                        <ChevronDown className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
