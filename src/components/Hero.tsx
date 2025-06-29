
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary glow-effect cursor-pointer hover:scale-105 transition-transform duration-300">
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

            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
              Mohan S
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Web Developer
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Motivated BCA graduate proficient in Flutter, Python, AWS and UI/UX design building scalable, secure software solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToProjects} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 glow-effect"
              >
                View Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact} 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
