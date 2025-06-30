
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

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
    <Card className="bg-card/50 backdrop-blur-sm border-border glow-effect">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Profile Image */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-primary glow-effect cursor-pointer hover:scale-105 transition-transform duration-300">
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

          {/* Name and Title */}
          <div>
            <h1 className="text-2xl font-bold text-primary mb-1">Mohan S</h1>
            <p className="text-muted-foreground text-sm">Web Developer</p>
            <p className="text-xs text-muted-foreground mt-1">Bangalore, India</p>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Available for work
            </Badge>
          </div>

          {/* Quick Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Motivated BCA graduate proficient in Flutter, Python, AWS and UI/UX design building scalable, secure software solutions
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <Button 
              size="sm" 
              onClick={scrollToProjects} 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Portfolio
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={scrollToContact} 
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Hero;
