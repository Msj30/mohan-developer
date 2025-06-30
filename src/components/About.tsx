
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Award, MapPin, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Mission",
      description: "Creating digital solutions that make a real impact",
      color: "text-primary",
      bgColor: "from-primary/20 to-teal-500/20",
      borderColor: "border-primary/30"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building meaningful connections through technology",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Turning creative ideas into functional realities",
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-6">
            ABOUT
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Education Card */}
          <Card className="bg-gradient-to-br from-primary/20 to-teal-500/20 border-primary/30 border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-primary text-xl">EDUCATION</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-semibold text-foreground">BCA Student</p>
              <p className="text-muted-foreground">CICMS (2022-2025)</p>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                GPA: 8.8/10
              </Badge>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30 border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-green-500/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Code className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-green-400 text-xl">EXPERTISE</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-semibold text-foreground">Full Stack Developer</p>
              <p className="text-muted-foreground">Web & Mobile Solutions</p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                2+ Years
              </Badge>
            </CardContent>
          </Card>

          {/* Certification Card */}
          <Card className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-orange-500/30 border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-orange-500/30 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <CardTitle className="text-orange-400 text-xl">CERTIFIED</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-2">
              <p className="font-semibold text-foreground">AWS Professional</p>
              <p className="text-muted-foreground">UTL Technologies</p>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                Cloud Expert
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-foreground">
                Building Digital <span className="text-primary">Experiences</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate web developer based in Bangalore, India, dedicated to crafting 
                innovative digital solutions that bridge the gap between user needs and business goals.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-card/80 to-card/40 rounded-2xl border border-border">
              <div className="bg-primary/20 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground">Bangalore, India</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-6 border-2 border-green-500/30">
              <p className="text-green-400 font-semibold text-center text-lg">
                🎯 Ready for New Challenges & Collaborations!
              </p>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className={`bg-gradient-to-br ${highlight.bgColor} ${highlight.borderColor} border-2 hover:scale-105 transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-br ${highlight.bgColor} p-4 rounded-2xl border-2 ${highlight.borderColor}`}>
                      <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                    </div>
                    <div>
                      <h4 className={`font-bold ${highlight.color} text-lg mb-2`}>{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
