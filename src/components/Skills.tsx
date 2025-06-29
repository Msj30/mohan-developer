
import { Card, CardContent } from '@/components/ui/card';
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
    },
    {
      title: "UI/UX Design",
      skills: ["User Experience", "Interface Design", "Prototyping", "Wireframing"],
      icon: "🎨"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Agile Methodology"],
      icon: "🔧"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-all duration-300 animate-fade-in glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills Note */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="bg-gradient-to-r from-primary/10 to-teal-500/10 border-primary/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Core Strengths</h3>
                <p className="text-muted-foreground">
                  Strong problem-solving abilities, effective team collaboration, systematic debugging approach, 
                  and clear communication skills that drive successful project outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
