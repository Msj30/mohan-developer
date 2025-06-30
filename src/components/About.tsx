
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-primary">About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <GraduationCap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium">Education</h4>
            <p className="text-xs text-muted-foreground">
              BCA, CICMS (2022-2025)<br />
              <span className="text-primary">GPA: 8.8/10</span>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Code className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium">Experience</h4>
            <p className="text-xs text-muted-foreground">
              Full Stack Developer with passion for creating scalable solutions
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium">Certification</h4>
            <p className="text-xs text-muted-foreground">
              AWS Certified - UTL Technologies
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
