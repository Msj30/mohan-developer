
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Magic",
      skills: ["React.js", "Flutter", "HTML/CSS", "Responsive Design"],
      icon: "🎨",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      rotation: "rotate-1"
    },
    {
      title: "Backend Power", 
      skills: ["Python", "Node.js", "API Design", "Database Management"],
      icon: "⚡",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      rotation: "-rotate-2"
    },
    {
      title: "Cloud Solutions",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      icon: "☁️",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      rotation: "rotate-2"
    },
    {
      title: "Data & Storage",
      skills: ["MySQL", "Firebase", "NoSQL", "Database Design"],
      icon: "💾",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
      rotation: "-rotate-1"
    },
    {
      title: "Design Thinking",
      skills: ["UI/UX Design", "Prototyping", "User Research", "Wireframing"],
      icon: "🎭",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      rotation: "rotate-3"
    },
    {
      title: "System Mastery",
      skills: ["Linux", "Shell Scripting", "System Config", "DevOps"],
      icon: "🔧",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      rotation: "-rotate-3"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-4 transform rotate-1">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for building amazing digital experiences
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm ${category.borderColor} border-2 hover:scale-105 transition-all duration-300 group overflow-hidden transform ${category.rotation} hover:rotate-0 rounded-3xl`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-3">
                  <span className="text-3xl transform group-hover:scale-125 transition-transform duration-300">{category.icon}</span>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-background/80 text-foreground border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 rounded-full px-3 py-1"
                      style={{
                        animationDelay: `${skillIndex * 100}ms`
                      }}
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
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/20 via-teal-500/20 to-green-500/20 border-primary/30 border-2 max-w-md mx-auto transform hover:scale-105 transition-all duration-300 rounded-3xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-6">
                <div className="text-5xl transform hover:rotate-12 transition-transform duration-300">🏆</div>
                <div>
                  <h4 className="font-bold text-primary text-xl">AWS Certified Professional</h4>
                  <p className="text-muted-foreground">UTL Technologies</p>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 rounded-full">
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
