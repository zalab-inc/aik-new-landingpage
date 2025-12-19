import { ChevronsUpDown, ChevronDown } from 'lucide-react';

export function EventList() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                {['Date', 'Time', 'Category', 'Title', 'Location/Virtual', 'Speaker'].map((header) => (
                                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <div className="flex items-center">
                                            {header}
                                            <ChevronsUpDown className="w-3 h-3 ml-1 opacity-40" />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {[
                                { date: 'Oct 22', time: 'All Day', category: 'Highlight', categoryColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', title: 'Annual Innovation Summit', location: 'Main Auditorium', speaker: 'Various Leaders' },
                                { date: 'Oct 12', time: '10:00 AM - 12:30 PM', category: 'Workshop', categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', title: 'Digital Design Fundamentals', location: 'Creative Lab 204', speaker: 'Sarah Jenkins & team' },
                                { date: 'Oct 15', time: '2:00 PM - 3:30 PM', category: 'Lecture', categoryColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', title: 'The Future of AI in Education', location: 'Virtual (Zoom)', speaker: 'Dr. Alan Grant' },
                                { date: 'Oct 28', time: '6:00 PM - 8:00 PM', category: 'Social', categoryColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', title: 'Fall Networking Mixer', location: 'Student Center Rooftop', speaker: 'N/A' },
                            ].map((event, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{event.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.time}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded ${event.categoryColor}`}>
                                            {event.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{event.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{event.speaker}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center pt-8">
                <button className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer shadow-sm">
                    Load More Events
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
