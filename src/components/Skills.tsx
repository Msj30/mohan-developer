
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React.js", "Flutter", "HTML/CSS", "Responsive Design", "UI/UX"],
      icon: "🎨",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400"
    },
    {
      title: "BACKEND", 
      skills: ["Python", "Node.js", "API Design", "Database Management"],
      icon: "⚡",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-400"
    },
    {
      title: "CLOUD",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      icon: "☁️",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      textColor: "text-orange-400"
    },
    {
      title: "DATABASE",
      skills: ["MySQL", "Firebase", "NoSQL", "Database Design"],
      icon: "💾",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
      textColor: "text-pink-400"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-6">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools that power my development process
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm ${category.borderColor} border-2 hover:scale-105 transition-all duration-300 group overflow-hidden`}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className={`${category.textColor} text-xl font-black`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="text-center"
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-background/80 text-foreground border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full justify-center py-2"
                        style={{
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AWS Certification Highlight */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/20 via-teal-500/20 to-green-500/20 border-primary/30 border-2 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-8">
                <div className="text-6xl transform hover:rotate-12 transition-transform duration-300">🏆</div>
                <div className="text-left">
                  <h3 className="text-3xl font-black text-primary mb-2">AWS CERTIFIED</h3>
                  <p className="text-muted-foreground text-lg">Professional Cloud Solutions Expert</p>
                  <p className="text-sm text-muted-foreground mt-1">UTL Technologies</p>
                  <div className="flex gap-2 mt-4">
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                      Cloud Expert
                    </Badge>
                  </div>
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
