import React from 'react';
import { ArrowRight, Clock, Users, BookOpen } from 'lucide-react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: '1',
    category: 'Arts & Humanities',
    title: 'Discover the essence of human expression and culture.',
    description: 'Explore the history of art movements from the Renaissance to Contemporary times. This course delves into the social, political, and cultural contexts that shaped artistic expression.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
    duration: '8 Weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 1240,
    price: '$299',
    instructor: { 
      name: 'Natalia T. Morgan', 
      avatar: 'https://i.pravatar.cc/100?img=32', 
      role: 'Professor of Art History',
      bio: 'Natalia T. Morgan has over 15 years of experience teaching art history at top universities. She is a published author and curator.'
    },
    syllabus: [
      { title: 'Introduction to Art History', content: 'Understanding the basic methodologies and terminologies.' },
      { title: 'The Renaissance', content: 'Exploring the rebirth of art and culture in Europe.' },
      { title: 'Baroque and Rococo', content: 'The drama and detail of the 17th and 18th centuries.' },
      { title: 'Modernism', content: 'The shift towards abstraction and new media.' }
    ],
    prerequisites: ['No prior knowledge required', 'Interest in history and culture']
  },
  {
    id: '2',
    category: 'Science & Technology',
    title: 'Fundamentals of Computer Science and Logic.',
    description: 'A comprehensive introduction to computer science, covering algorithms, data structures, and the basics of software engineering.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop',
    duration: '12 Weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 2100,
    price: '$399',
    instructor: { 
      name: 'Gabriella S. Adams', 
      avatar: 'https://i.pravatar.cc/100?img=44', 
      role: 'Senior Software Engineer',
      bio: 'Gabriella is a lead developer at a major tech firm and loves teaching coding basics to the next generation of engineers.'
    },
    syllabus: [
      { title: 'Introduction to Algorithms', content: 'Sorting, searching, and complexity analysis.' },
      { title: 'Data Structures', content: 'Arrays, linked lists, trees, and graphs.' },
      { title: 'Web Development Basics', content: 'HTML, CSS, and JavaScript fundamentals.' },
      { title: 'Software Engineering Principles', content: 'Version control, testing, and deployment.' }
    ],
    prerequisites: ['Basic math skills', 'Access to a computer']
  },
  {
    id: '3',
    category: 'Business & Economics',
    title: 'Strategic Management for Future Leaders.',
    description: 'Learn the core principles of business strategy, marketing, and economics to lead organizations effectively in a global market.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop',
    duration: '10 Weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 850,
    price: '$349',
    instructor: { 
      name: 'Eliana M. Thompson', 
      avatar: 'https://i.pravatar.cc/100?img=9', 
      role: 'MBA, Business Consultant',
      bio: 'Eliana has consulted for Fortune 500 companies and brings real-world case studies into the classroom.'
    },
    syllabus: [
      { title: 'Microeconomics', content: 'Supply, demand, and market structures.' },
      { title: 'Marketing Strategy', content: 'Positioning, targeting, and branding.' },
      { title: 'Financial Accounting', content: 'Reading balance sheets and income statements.' },
      { title: 'Leadership & Ethics', content: 'Managing teams and ethical decision making.' }
    ],
    prerequisites: ['Basic understanding of economics', 'Leadership experience preferred']
  }
];

interface CoursesSectionProps {
  onCourseSelect?: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onCourseSelect }) => {
  return (
    <section id="pages" className="py-20 bg-eduzin-light text-eduzin-text">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="inline-block px-3 py-1 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Areas of Study</span>
            <h2 className="text-4xl font-medium max-w-lg leading-tight">Advance your career and education through.</h2>
          </div>
          <button className="mt-6 md:mt-0 bg-eduzin-dark text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-opacity-90 transition-colors">
            APPLY NOW <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => onCourseSelect && onCourseSelect(course)}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-lg mb-6 h-48 relative">
                <img src={course.image} alt={course.category} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide">
                  {course.level}
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-eduzin-dark">{course.category}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{course.title}</p>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                <div className="flex items-center gap-1"><Clock size={14}/> {course.duration}</div>
                <div className="flex items-center gap-1"><Users size={14}/> {course.students}</div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3">
                  <img src={course.instructor.avatar} alt={course.instructor.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">{course.instructor.name}</p>
                    <p className="text-[10px] text-gray-500 truncate max-w-[100px]">{course.instructor.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-eduzin-dark group-hover:text-white group-hover:border-transparent transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};