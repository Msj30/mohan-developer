
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Mail, Github, Linkedin, Code, Palette, Cloud } from 'lucide-react';

const HeroFullscreen = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Skill Badges */}
      <div className="absolute inset-0 pointer-events-none">
        <Badge className="absolute top-1/4 left-1/4 bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse">
          React
        </Badge>
        <Badge className="absolute top-1/3 right-1/4 bg-green-500/20 text-green-400 border-green-500/30 animate-pulse delay-100">
          Flutter
        </Badge>
        <Badge className="absolute bottom-1/3 left-1/3 bg-purple-500/20 text-purple-400 border-purple-500/30 animate-pulse delay-200">
          Python
        </Badge>
        <Badge className="absolute top-1/2 right-1/3 bg-orange-500/20 text-orange-400 border-orange-500/30 animate-pulse delay-300">
          AWS
        </Badge>
        <Badge className="absolute bottom-1/4 right-1/5 bg-pink-500/20 text-pink-400 border-pink-500/30 animate-pulse delay-500">
          UI/UX
        </Badge>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Section with Curved Background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-teal-500/20 to-green-500/20 rounded-full blur-xl scale-150"></div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary glow-effect cursor-pointer hover:scale-105 transition-all duration-300">
                  <img 
                    src="/lovable-uploads/c313d97d-1440-49a0-8455-b2c858bf4361.png" 
                    alt="Mohan S - Web Developer" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <img 
                  src="/lovable-uploads/c313d97d-1440-49a0-8455-b2c858bf4361.png" 
                  alt="Mohan S - Web Developer" 
                  className="w-full h-auto rounded-lg" 
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-sm px-6 py-2 rounded-full">
              ✨ Available for work
            </Badge>
          </div>

          {/* Creative Typography */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black text-primary leading-none tracking-tighter transform -rotate-2">
                CODE
              </h1>
              <h1 className="text-7xl md:text-9xl font-black text-foreground leading-none tracking-tighter transform rotate-1 -mt-4">
                MASTER
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-light text-muted-foreground transform rotate-1">
              Building Digital Experiences That Matter
            </h2>
          </div>

          {/* Curved Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-primary/20 to-teal-500/20 rounded-3xl p-6 border border-primary/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Code className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold text-primary mb-2">Full Stack</h3>
              <p className="text-sm text-muted-foreground">React, Flutter, Python & AWS</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl p-6 border border-green-500/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Palette className="w-8 h-8 text-green-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-green-400 mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">User-centered design solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl p-6 border border-orange-500/30 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <Cloud className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
              <h3 className="font-semibold text-orange-400 mb-2">Cloud Native</h3>
              <p className="text-sm text-muted-foreground">AWS Certified Solutions</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              className="bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Creations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout} 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Get to Know Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:mohanmsj30@gmail.com"
              className="bg-gradient-to-r from-primary/20 to-teal-500/20 p-4 rounded-full text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-teal-500 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohanmsj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-4 rounded-full text-blue-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Msj30"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 p-4 rounded-full text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-500 hover:to-slate-500 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-primary hover:text-primary/80 transition-colors animate-bounce bg-primary/10 rounded-full p-3"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroFullscreen;
