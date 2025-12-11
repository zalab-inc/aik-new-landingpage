import React from 'react';

export const NewsletterSection: React.FC = () => {
  // SVG pattern of a graduation hat (mortarboard)
  const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%231F3D35' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.08'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'/%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'/%3E%3C/svg%3E")`;

  return (
    <section className="pt-20 pb-20 border-t border-gray-100 relative" style={{ backgroundColor: '#F9FAFB', backgroundImage: bgPattern }}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-eduzin-dark flex items-center justify-center text-white font-serif font-bold italic text-xl shadow-lg shadow-eduzin-dark/20">K</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-eduzin-dark leading-none">KelasInovatif</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">University</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-medium text-center lg:text-left text-gray-900">
            Join our newsletter
          </h3>

          <div className="flex w-full max-w-md bg-gray-50 border border-gray-200 rounded-full p-1.5 pl-5 focus-within:ring-2 focus-within:ring-eduzin-dark/20 focus-within:border-eduzin-dark transition-all">
             <input type="email" placeholder="Business email..." className="flex-1 outline-none text-sm bg-transparent placeholder-gray-400 text-gray-800" />
             <button className="bg-eduzin-dark text-white text-[10px] font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md">
               SUBSCRIBE
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};