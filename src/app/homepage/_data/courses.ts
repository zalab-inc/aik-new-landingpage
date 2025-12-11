import { Course } from "../types";

export const courses: Course[] = [
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

