import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Innovative learning <br/> 
            <span className="font-serif italic">for everyone</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <p className="text-white/80 max-w-sm text-sm md:text-base border-l-2 border-white/30 pl-4">
              Graduates hold a position related to their degree or career objective.
            </p>
            
            <button className="bg-white text-eduzin-dark px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors group cursor-pointer">
              JOIN COMMUNITY
              <div className="w-6 h-6 rounded-full bg-eduzin-dark flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

