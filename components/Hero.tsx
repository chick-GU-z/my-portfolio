import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-16 relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-foreground/10"></div>
        <div className="absolute top-1/3 right-0 w-px h-1/3 bg-foreground/10"></div>
        <div className="absolute bottom-1/3 left-0 w-px h-1/3 bg-foreground/10"></div>
        <div className="absolute bottom-0 right-1/4 w-1/4 h-px bg-foreground/10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
              Designer &amp;<br />
              <span className="text-muted-foreground">Creator</span>
            </h1>
            
            {/* Visual accent line */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-foreground"></div>
              <div className="w-2 h-2 bg-foreground rounded-full"></div>
              <div className="w-16 h-px bg-foreground"></div>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting meaningful experiences through interior design, 
            furniture modeling, exhibition design, and digital interfaces.
          </p>

          {/* CTA with enhanced styling */}
          <div className="pt-12">
            <a
              href="#portfolio"
              className="group inline-flex items-center space-x-3 px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <span className="tracking-wide">View Works</span>
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        <div className="w-px h-12 bg-foreground/30"></div>
        <div className="w-1 h-1 bg-foreground/30 rounded-full"></div>
      </div>
    </section>
  );
}