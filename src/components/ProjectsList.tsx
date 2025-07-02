
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsList = () => {
  const featuredProjects = [
    {
      title: "ALTERNATIVE OF OTP",
      description: "Revolutionary facial-verification login system replacing traditional OTP authentication with secure biometric verification using advanced computer vision technology.",
      tech: ["React.js", "Python", "Flask", "Firebase", "Computer Vision", "ML"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "WEB INNOVATION",
      icon: "🔐",
      featured: true
    },
    {
      title: "FLUTTER MOBILE APP",
      description: "Cross-platform mobile application built with Flutter, featuring real-time database integration, responsive UI design, and seamless user experience across devices.",
      tech: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "State Management"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "MOBILE EXPERIENCE",
      icon: "📱",
      featured: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-6">
            FEATURED PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key projects showcasing innovation and technical expertise
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-500 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Project Icon */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30">
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary/20 backdrop-blur-sm text-primary border-primary/30 font-black text-xs px-3 py-1">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <CardTitle className="text-xl font-black text-primary mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge 
                      variant="outline" 
                      className="text-xs border-primary/30 text-muted-foreground"
                    >
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Explore Button */}
                <Button className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  EXPLORE
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
