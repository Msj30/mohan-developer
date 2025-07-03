import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowDown, Github, Linkedin, Mail, Phone, FileText, Download } from 'lucide-react';

const HeroFullscreen = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const skillBadges = [
    {
      name: "React.js",
      position: "top-16 left-8",
      delay: "0ms"
    },
    {
      name: "Flutter",
      position: "top-32 right-12",
      delay: "200ms"
    },
    {
      name: "Python",
      position: "top-48 left-16",
      delay: "400ms"
    },
    {
      name: "AWS",
      position: "bottom-32 right-8",
      delay: "600ms"
    },
    {
      name: "Node.js",
      position: "bottom-48 left-12",
      delay: "800ms"
    },
    {
      name: "UI/UX",
      position: "top-24 right-24",
      delay: "1000ms"
    },
    {
      name: "Firebase",
      position: "bottom-16 left-24",
      delay: "1200ms"
    },
    {
      name: "Docker",
      position: "bottom-24 right-16",
      delay: "1400ms"
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/8b5e247c-e6a3-4678-a3ec-05012b2b1f7c.png';
    link.download = 'Mohan_S_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Typography with Animation */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none transform hover:scale-105 transition-transform duration-500">
                <span className="block text-8xl">
                  <span className="text-white hover:text-gray-200 transition-colors duration-300">WEB</span>{' '}
                  <span className="text-primary hover:text-teal-400 transition-colors duration-300">DEVELOPER</span>
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg transform translate-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Crafting digital experiences that blend innovation with functionality. 
              Passionate about turning ideas into scalable, user-centered solutions.
            </p>

            <div className="flex items-center gap-4 transform translate-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Badge 
                onClick={scrollToContact}
                className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm hover:bg-green-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </Badge>
              <span className="text-muted-foreground">📍 Bangalore, India</span>
            </div>

            <div className="flex gap-4 transform translate-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" onClick={scrollToProjects} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                View Work
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                Let's Talk
              </Button>
            </div>

            {/* Social Links with Resume Button - Enhanced Interactions */}
            <div className="flex gap-4 pt-4 transform translate-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com/Msj30" target="_blank" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/mohanmsj" target="_blank" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mohanmsj30@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+918861079209" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Phone className="w-6 h-6" />
              </a>
              
              {/* Resume Button */}
              <div className="flex flex-col items-center gap-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                      <FileText className="w-6 h-6" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto animate-scale-in">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-foreground">Resume - Mohan S</h3>
                        <Button onClick={handleResumeDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <img src="/lovable-uploads/8b5e247c-e6a3-4678-a3ec-05012b2b1f7c.png" alt="Mohan S Resume" className="w-full h-auto rounded-lg border border-border hover:shadow-lg transition-shadow duration-300" />
                    </div>
                  </DialogContent>
                </Dialog>
                <span className="text-xs text-muted-foreground">Resume</span>
              </div>
            </div>
          </div>

          {/* Right Side - Profile with Enhanced Animations */}
          <div className="relative flex flex-col justify-center items-center min-h-[600px] space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Central Profile Image */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-700 bg-gradient-to-br from-primary/20 to-teal-500/20 hover:shadow-primary/50">
                  <img src="/lovable-uploads/c313d97d-1440-49a0-8455-b2c858bf4361.png" alt="Mohan S - Web Developer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent hover:from-background/10 transition-all duration-500"></div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl animate-scale-in">
                <img src="/lovable-uploads/c313d97d-1440-49a0-8455-b2c858bf4361.png" alt="Mohan S - Web Developer" className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>

            {/* Name below profile picture with typing animation effect */}
            <h2 className="text-7xl font-black text-foreground z-10 relative transform hover:scale-105 transition-all duration-500 hover:text-primary cursor-default">Mohan S</h2>

            {/* Enhanced Floating Skill Badges */}
            {skillBadges.map((skill, index) => (
              <Badge
                key={index}
                className={`absolute ${skill.position} bg-primary/20 text-primary border-primary/30 animate-bounce hover:animate-none hover:scale-125 hover:bg-primary/30 transition-all duration-300 cursor-pointer`}
                style={{
                  animationDelay: skill.delay,
                  animationDuration: '2s',
                  animationIterationCount: 'infinite'
                }}
              >
                {skill.name}
              </Badge>
            ))}

            {/* Enhanced Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-4 border-primary/30 rounded-full animate-spin hover:border-primary/50 transition-colors duration-300" style={{
              animationDuration: '20s'
            }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-teal-500/30 rounded-full animate-spin hover:border-teal-500/50 transition-colors duration-300" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }}></div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-sm text-muted-foreground animate-pulse">Scroll to explore</span>
          <Button variant="ghost" size="sm" onClick={scrollToAbout} className="animate-bounce hover:animate-none hover:scale-125 transition-all duration-300">
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroFullscreen;
