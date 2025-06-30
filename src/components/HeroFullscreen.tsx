
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Profile Image */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary glow-effect cursor-pointer hover:scale-105 transition-all duration-300">
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

          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-sm px-4 py-2">
              Available for work
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary leading-tight tracking-tight">
              MOHAN S
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground">
              WEB DEVELOPER
            </h2>
          </div>

          {/* Impact Statement */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
              CREATING <span className="text-primary font-semibold">SCALABLE SOLUTIONS</span><br />
              THAT <span className="text-primary font-semibold">CONNECT</span> AND <span className="text-primary font-semibold">INSPIRE</span>
            </p>
          </div>

          {/* Quick Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Motivated BCA graduate proficient in Flutter, Python, AWS and UI/UX design building secure, innovative software solutions in Bangalore, India
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToAbout} 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:mohanmsj30@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mohanmsj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Msj30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
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
          className="text-primary hover:text-primary/80 transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Side Navigation Elements */}
      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-4 text-right">
          <span className="text-sm text-muted-foreground">01</span>
          <div className="w-px h-12 bg-primary mx-auto"></div>
          <span className="text-sm text-muted-foreground">HOME</span>
        </div>
      </div>
    </section>
  );
};

export default HeroFullscreen;
