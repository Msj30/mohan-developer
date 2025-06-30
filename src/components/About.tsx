
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate web developer with a strong foundation in modern technologies. 
              My journey in software development combines creativity with technical expertise 
              to build solutions that make a difference.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    BCA, CICMS (2022-2025) • <span className="text-primary">GPA: 8.8/10</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer with passion for creating scalable solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Certification</h4>
                  <p className="text-sm text-muted-foreground">
                    AWS Certified - UTL Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-primary/10 to-teal-500/10 border-primary/30">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="text-3xl">🎯</div>
                <h3 className="text-xl font-semibold text-primary">My Mission</h3>
                <p className="text-muted-foreground">
                  To create innovative, user-centered digital experiences that solve real-world problems 
                  and contribute to technological advancement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
