
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye, Zap, Trophy } from 'lucide-react';
import ProjectsList from './ProjectsList';

const Projects = () => {
  const projects = [
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

  const hackathons = [
    {
      title: "SBI HACKATHON",
      description: "Created an AI chatbot solution for banking customers, providing intelligent assistance and automated query resolution with natural language processing capabilities.",
      tech: ["AI/ML", "Natural Language Processing", "Chatbot Development", "Banking Solutions"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "HACKATHON WINNER",
      icon: "🤖",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-6">
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Featured work that showcases innovation and technical excellence
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
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
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4 border border-primary/30">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-6 right-6 flex gap-2">
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-black/20 backdrop-blur-sm hover:bg-primary/30 text-white border border-white/20 rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-primary/20 backdrop-blur-sm text-primary border-primary/30 font-black text-sm px-4 py-2">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8 space-y-6">
                <div>
                  <CardTitle className="text-2xl font-black text-primary mb-4 group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Explore Button */}
                <Button className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  EXPLORE PROJECT
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Hackathons Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-black text-foreground mb-4 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              HACKATHONS
            </h3>
            <p className="text-lg text-muted-foreground">Competition achievements and innovative solutions</p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <Card 
                key={hackathon.title} 
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-yellow-500/30 hover:border-yellow-500/50 hover:scale-105 transition-all duration-500 group overflow-hidden"
              >
                {/* Hackathon Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Hackathon Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full p-3 border border-yellow-500/30">
                      <span className="text-2xl">{hackathon.icon}</span>
                    </div>
                  </div>

                  {/* Trophy Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full p-3 border border-yellow-500/30">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-yellow-500/20 backdrop-blur-sm text-yellow-400 border-yellow-500/30 font-black text-sm px-4 py-2">
                      {hackathon.category}
                    </Badge>
                  </div>
                </div>
                
                {/* Hackathon Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <CardTitle className="text-xl font-black text-yellow-400 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {hackathon.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {hackathon.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-yellow-500/30 text-foreground hover:bg-yellow-500 hover:text-black transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-black transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                VIEW ALL PROJECTS
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-auto">
              <ProjectsList />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;
