
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Alternative of OTP",
      description: "Innovative facial-verification login system that replaces traditional OTP authentication with secure biometric verification.",
      longDescription: "A cutting-edge authentication solution that leverages facial recognition technology to provide secure, password-free login experiences. The system integrates advanced computer vision algorithms with robust security measures.",
      tech: ["React.js", "Python", "Flask", "Firebase", "Computer Vision", "Authentication"],
      highlights: [
        "Secure facial recognition authentication",
        "Real-time face detection and verification",
        "Firebase integration for user management",
        "RESTful API architecture"
      ],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Web Application"
    },
    {
      title: "Flutter-Based Mobile Application",
      description: "Cross-platform mobile application built with Flutter, featuring real-time database integration and responsive UI design.",
      longDescription: "A comprehensive mobile solution developed using Flutter framework, showcasing modern mobile development practices with seamless user experience across iOS and Android platforms.",
      tech: ["Flutter", "Dart", "Firebase", "Real-time Database", "Mobile UI/UX", "Cross-platform"],
      highlights: [
        "Cross-platform compatibility",
        "Real-time data synchronization",
        "Responsive and intuitive UI",
        "Firebase backend integration"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Mobile Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Showcasing my latest work and innovations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-all duration-500 animate-fade-in group glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-2xl mb-3 text-primary">{project.title}</CardTitle>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Key Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
