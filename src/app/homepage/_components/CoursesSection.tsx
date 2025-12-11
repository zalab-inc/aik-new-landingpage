import { ArrowRight, Clock, Users } from 'lucide-react';
import { courses } from '../_data/courses';
import { Course } from '../types';

interface CoursesSectionProps {
  onCourseSelect?: (course: Course) => void;
}

export function CoursesSection({ onCourseSelect }: CoursesSectionProps) {
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
}

