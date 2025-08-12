import { useState } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projectCategories = ['All', 'Video Editing', 'Motion Graphics', 'VFX', 'Color Grading'];

const projects = [
  {
    id: 1,
    title: 'Corporate Brand Video',
    category: 'Video Editing',
    description: 'A sleek corporate promotional video showcasing brand values and company culture.',
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
    duration: '2:30',
    type: 'video'
  },
  {
    id: 2,
    title: 'Animated Logo Reveal',
    category: 'Motion Graphics',
    description: 'Dynamic logo animation with particle effects and smooth transitions.',
    tools: ['After Effects', 'Cinema 4D'],
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    duration: '0:15',
    type: 'animation'
  },
  {
    id: 3,
    title: 'Music Video Edit',
    category: 'Video Editing',
    description: 'High-energy music video with creative cuts and color grading.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    duration: '3:45',
    type: 'video'
  },
  {
    id: 4,
    title: 'VFX Breakdown',
    category: 'VFX',
    description: 'Before and after showcase of visual effects work including compositing and CGI.',
    tools: ['After Effects', 'Blender', 'Nuke'],
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    duration: '1:20',
    type: 'vfx'
  },
  {
    id: 5,
    title: 'Documentary Color Grade',
    category: 'Color Grading',
    description: 'Professional color grading for documentary film with cinematic look.',
    tools: ['DaVinci Resolve', 'Premiere Pro'],
    thumbnail: 'https://images.unsplash.com/photo-1489936923075-4609a7eb03de?w=600&h=400&fit=crop',
    duration: '45:00',
    type: 'grading'
  },
  {
    id: 6,
    title: 'Social Media Pack',
    category: 'Motion Graphics',
    description: 'Collection of animated social media templates and lower thirds.',
    tools: ['After Effects', 'Photoshop'],
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    duration: 'Various',
    type: 'templates'
  }
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work in video editing, motion graphics, and visual effects.
            Each project represents a unique creative challenge and solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? 'btn-elegant' 
                  : 'hover:bg-accent/50 hover:scale-105'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" className="btn-creative">
                    <Play className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {project.duration}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="text-xs hover:bg-accent/70 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Category */}
                <div className="pt-2 border-t border-border/50">
                  <span className="text-xs text-primary font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-accent/50 hover:scale-105 transition-all duration-300">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}