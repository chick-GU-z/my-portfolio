export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-foreground text-background relative">
      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-background/10"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-px bg-background/10"></div>
        <div className="absolute bottom-1/3 left-0 w-1/2 h-px bg-background/10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-px bg-background/60"></div>
                  <span className="text-background/60 tracking-widest uppercase text-sm">About</span>
                </div>
                <h2 className="text-4xl md:text-5xl tracking-tight leading-tight">
                  Designing with<br />Purpose &amp; Precision
                </h2>
              </div>
              
              <div className="space-y-8 text-background/80 leading-relaxed text-lg">
                <p>
                  I am a multidisciplinary designer with a passion for creating 
                  functional and aesthetically pleasing environments and digital experiences.
                </p>
                <p>
                  My work spans across interior design, furniture modeling, 
                  exhibition design, and UI/UX for the gaming industry. I believe 
                  in the power of minimalist design to create meaningful connections 
                  between people and spaces.
                </p>
                <p>
                  Influenced by German design principles, I focus on functionality, 
                  clean lines, and thoughtful use of space to create timeless solutions.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-px bg-background/40"></div>
                <h3 className="text-background/60 tracking-wider uppercase text-sm">Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Interior Design',
                  '3D Modeling',
                  'Exhibition Design',
                  'UI/UX Design',
                  'Furniture Design',
                  'Game Interface'
                ].map((skill, index) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-background/60 rounded-full"></div>
                    <span className="text-background/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image with geometric frame */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <div className="aspect-square bg-background/10 border border-background/20 flex items-center justify-center">
                <span className="text-background/60">Portrait Photo</span>
              </div>
              {/* Geometric frame accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-background/40"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-background/40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}