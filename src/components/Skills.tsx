
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Dart", "Java", "JavaScript"],
      icon: "💻",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Mobile & Web Development", 
      skills: ["Flutter", "React.js", "HTML/CSS", "Responsive Design"],
      icon: "📱",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      icon: "☁️",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Databases",
      skills: ["MySQL", "Firebase", "NoSQL", "Database Design"],
      icon: "🗄️",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "UI/UX Design",
      skills: ["User Experience", "Interface Design", "Prototyping", "Wireframing"],
      icon: "🎨",
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "System Administration",
      skills: ["Linux", "System Configuration", "Command Line", "Shell Scripting"],
      icon: "🐧",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border-border hover:scale-105 transition-all duration-300`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AWS Certification Highlight */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/20 to-teal-500/20 border-primary/30 max-w-md mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h4 className="font-semibold text-primary text-lg">AWS Certified</h4>
                  <p className="text-sm text-muted-foreground">UTL Technologies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
