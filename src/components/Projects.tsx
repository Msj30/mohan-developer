
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Alternative of OTP",
      description: "Innovative facial-verification login system that replaces traditional OTP authentication with secure biometric verification using advanced computer vision.",
      tech: ["React.js", "Python", "Flask", "Firebase", "Computer Vision", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Web Application",
      featured: true
    },
    {
      title: "Flutter Mobile App",
      description: "Cross-platform mobile application built with Flutter, featuring real-time database integration, responsive UI design, and seamless user experience.",
      tech: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "State Management"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Mobile Application",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-primary">Featured Projects</h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2 bg-primary/20 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
