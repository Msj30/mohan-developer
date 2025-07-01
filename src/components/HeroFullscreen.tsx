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
  const skillBadges = [{
    name: "React.js",
    position: "top-16 left-8",
    delay: "0ms"
  }, {
    name: "Flutter",
    position: "top-32 right-12",
    delay: "200ms"
  }, {
    name: "Python",
    position: "top-48 left-16",
    delay: "400ms"
  }, {
    name: "AWS",
    position: "bottom-32 right-8",
    delay: "600ms"
  }, {
    name: "Node.js",
    position: "bottom-48 left-12",
    delay: "800ms"
  }, {
    name: "UI/UX",
    position: "top-24 right-24",
    delay: "1000ms"
  }, {
    name: "Firebase",
    position: "bottom-16 left-24",
    delay: "1200ms"
  }, {
    name: "Docker",
    position: "bottom-24 right-16",
    delay: "1400ms"
  }];
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="block text-primary">DEVELOPER</span>
                <span className="block text-foreground">Mohan S</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Crafting digital experiences that blend innovation with functionality. 
              Passionate about turning ideas into scalable, user-centered solutions.
            </p>

            <div className="flex items-center gap-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm">
                Available for work
              </Badge>
              <span className="text-muted-foreground">📍 Bangalore, India</span>
            </div>

            <div className="flex gap-4">
              <Button size="lg" onClick={scrollToProjects} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                View Work
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                Let's Talk
              </Button>
            </div>

            {/* Social Links with Resume Button */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Msj30" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/mohanmsj" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mohanmsj30@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+918861079209" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              
              {/* Resume Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <FileText className="w-6 h-6" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-foreground">Resume - Mohan S</h3>
                      <Button 
                        onClick={handleResumeDownload}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <img 
                      src="/lovable-uploads/8b5e247c-e6a3-4678-a3ec-05012b2b1f7c.png" 
                      alt="Mohan S Resume" 
                      className="w-full h-auto rounded-lg border border-border" 
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Right Side - Profile with Floating Badges */}
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Central Profile Image */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary/20 to-teal-500/20">
                  <img 
                    src="/lovable-uploads/c313d97d-1440-49a0-8455-b2c858bf4361.png" 
                    alt="Mohan S - Web Developer" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
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

            {/* Floating Skill Badges */}
            {skillBadges.map((skill, index) => (
              <Badge 
                key={skill.name} 
                className={`absolute ${skill.position} bg-gradient-to-r from-primary/20 to-teal-500/20 text-primary border-primary/30 border-2 px-4 py-2 text-sm font-semibold hover:scale-110 transition-all duration-500 cursor-default animate-pulse`}
                style={{
                  animationDelay: skill.delay,
                  animationDuration: '3s'
                }}
              >
                {skill.name}
              </Badge>
            ))}

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-4 border-primary/30 rounded-full animate-spin" style={{
              animationDuration: '20s'
            }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-4 border-teal-500/30 rounded-full animate-spin" style={{
              animationDuration: '15s',
              animationDirection: 'reverse'
            }}></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <Button variant="ghost" size="sm" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroFullscreen;
