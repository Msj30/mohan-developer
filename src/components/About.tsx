
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground">Get to know more about my background and journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image/Icon Side */}
            <div className="animate-fade-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border glow-effect">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-teal-400 flex items-center justify-center">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Full Stack Developer</h3>
                    <p className="text-muted-foreground">Passionate about creating innovative solutions</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Text Content Side */}
            <div className="animate-slide-in-right">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-muted-foreground">
                          Bachelor of Computer Applications (BCA)<br />
                          CICMS, 2022–2025<br />
                          <span className="text-primary font-medium">GPA: 8.8/10</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Background</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm a dedicated developer with a passion for creating scalable and secure software solutions. 
                          My journey in technology has led me to specialize in modern web and mobile development, 
                          with a strong focus on user experience and performance optimization.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                        <p className="text-muted-foreground">
                          Problem-solving • Team collaboration • Debugging • Clear communication • 
                          Continuous learning • Project management
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
