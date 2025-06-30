
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Dart", "Java", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Mobile & Web Development", 
      skills: ["Flutter", "React.js", "HTML/CSS", "Responsive Design"],
      icon: "📱"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      icon: "☁️"
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase", "NoSQL", "Database Design"],
      icon: "🗄️"
    }
  ];

  const otherSkills = [
    {
      title: "UI/UX Design",
      skills: ["User Experience", "Interface Design", "Prototyping", "Wireframing"],
      icon: "🎨"
    },
    {
      title: "System Administration",
      skills: ["Linux", "System Configuration", "Command Line", "Shell Scripting"],
      icon: "🐧"
    }
  ];

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Skills & Expertise</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <Card 
            key={category.title} 
            className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs bg-primary/20 text-primary border-primary/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-primary">Other Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {otherSkills.map((category) => (
            <Card 
              key={category.title} 
              className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-primary/20 text-primary border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AWS Certification */}
      <Card className="bg-gradient-to-r from-primary/10 to-teal-500/10 border-primary/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏆</div>
            <div>
              <h4 className="font-semibold text-primary">AWS Certification</h4>
              <p className="text-sm text-muted-foreground">UTL Technologies</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
