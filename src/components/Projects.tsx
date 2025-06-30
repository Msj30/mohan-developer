
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Zap, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Alternative of OTP",
      description: "Revolutionary facial-verification login system that replaces traditional OTP authentication with secure biometric verification using advanced computer vision technology.",
      tech: ["React.js", "Python", "Flask", "Firebase", "Computer Vision", "ML"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Web Innovation",
      icon: "🔐",
      featured: true,
      rotation: "rotate-1"
    },
    {
      title: "Flutter Mobile App",
      description: "Cross-platform mobile application built with Flutter, featuring real-time database integration, responsive UI design, and seamless user experience across all devices.",
      tech: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "State Management"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Mobile Experience",
      icon: "📱",
      featured: true,
      rotation: "-rotate-2"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-4 transform -rotate-1">
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that blend creativity with functionality
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-500 group overflow-hidden transform ${project.rotation} hover:rotate-0 rounded-3xl`}
            >
              <div className="aspect-video overflow-hidden rounded-t-3xl relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30">
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2 group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-primary/20 to-teal-500/20 text-primary border-primary/30 rounded-full px-4 py-1"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 rounded-full px-3 py-1"
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Explore Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
