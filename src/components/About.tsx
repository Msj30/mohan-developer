
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-4 transform -rotate-1">
            ABOUT ME
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hey there! I'm a passionate web developer who loves turning ideas into digital reality. 
                My journey combines technical excellence with creative problem-solving to build solutions that truly make a difference.
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Based in Bangalore, India</span>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl p-4 border border-green-500/30">
                <p className="text-green-400 font-semibold text-center text-lg">
                  🎯 Currently Available for Exciting Projects!
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Experience Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/20 to-teal-500/20 border-primary/30 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/30 p-3 rounded-2xl">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Education</h4>
                    <p className="text-foreground font-medium">BCA, CICMS (2022-2025)</p>
                    <p className="text-sm text-muted-foreground">
                      Achieving Excellence • <span className="text-primary font-semibold">GPA: 8.8/10</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/30 p-3 rounded-2xl">
                    <Code className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-400 text-lg">Experience</h4>
                    <p className="text-foreground font-medium">Full Stack Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Crafting scalable, user-centered digital solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-orange-500/30 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/30 p-3 rounded-2xl">
                    <Award className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-400 text-lg">Certification</h4>
                    <p className="text-foreground font-medium">AWS Certified</p>
                    <p className="text-sm text-muted-foreground">
                      UTL Technologies • Cloud Solutions Expert
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-teal-500/10 to-green-500/10 border-primary/30 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-primary mb-4">My Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create innovative, user-centered digital experiences that solve real-world problems 
                and contribute to technological advancement while building meaningful connections through code.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
