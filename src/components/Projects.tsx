
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Alternative of OTP",
      description: "Innovative facial-verification login system that replaces traditional OTP authentication with secure biometric verification.",
      tech: ["React.js", "Python", "Flask", "Firebase", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Web Application"
    },
    {
      title: "Flutter Mobile App",
      description: "Cross-platform mobile application built with Flutter, featuring real-time database integration and responsive UI design.",
      tech: ["Flutter", "Dart", "Firebase", "Mobile UI/UX"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Mobile Application"
    }
  ];

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">My Works</h2>
        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300 group"
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-primary text-sm">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs mt-1 bg-primary/20 text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-primary/20">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-primary/20">
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs px-1 py-0 h-4 border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs px-1 py-0 h-4 border-primary/30 text-primary">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
