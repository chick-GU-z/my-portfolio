import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'furniture', label: 'Furniture Modeling' },
    { id: 'exhibition', label: 'Exhibition Design' },
    { id: 'uiux', label: 'UI/UX Design' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Minimal Apartment',
      category: 'interior',
      description: 'A clean, functional living space embracing German minimalism',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Modular Chair System',
      category: 'furniture',
      description: '3D modeled furniture piece focusing on functionality and form',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Design Museum Exhibition',
      category: 'exhibition',
      description: 'Contemporary exhibition space with clean geometric elements',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'RPG Game Interface',
      category: 'uiux',
      description: 'Intuitive game UI design focused on player experience',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Corporate Office Design',
      category: 'interior',
      description: 'Modern workspace promoting collaboration and focus',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'Sustainable Table Collection',
      category: 'furniture',
      description: 'Eco-friendly furniture design with emphasis on durability',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: 'Art Gallery Layout',
      category: 'exhibition',
      description: 'Gallery space designed to highlight contemporary artworks',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'Mobile Gaming Dashboard',
      category: 'uiux',
      description: 'Clean, accessible interface for mobile gaming platform',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-px h-full bg-foreground/5"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/5"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-foreground/5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-foreground/30"></div>
              <span className="text-muted-foreground tracking-widest uppercase text-sm">Portfolio</span>
              <div className="w-12 h-px bg-foreground/30"></div>
            </div>
            <h2 className="text-4xl md:text-5xl tracking-tight">
              Selected Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of projects spanning interior design, furniture modeling, 
              exhibition design, and digital interfaces.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 border transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-background text-foreground border-border hover:border-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-background border border-border">
                {/* Project Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-colors duration-300"></div>
                
                {/* Project Info */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-background space-y-2">
                    <h3 className="text-xl tracking-tight">{project.title}</h3>
                    <p className="text-background/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-foreground/20 group-hover:bg-background/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}