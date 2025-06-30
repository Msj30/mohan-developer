
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "EMAIL",
      value: "mohanmsj30@gmail.com",
      href: "mailto:mohanmsj30@gmail.com",
      color: "text-primary",
      bgColor: "from-primary/20 to-teal-500/20",
      borderColor: "border-primary/30"
    },
    {
      icon: Phone,
      title: "PHONE",
      value: "+91 88610 79209",
      href: "tel:+918861079209",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: MapPin,
      title: "LOCATION",
      value: "Bangalore, India",
      href: "#",
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LINKEDIN",
      href: "https://linkedin.com/in/mohanmsj",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Github,
      label: "GITHUB",
      href: "https://github.com/Msj30",
      color: "text-gray-400",
      bgColor: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-6">
            CONTACT
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's create something amazing together
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-primary">GET IN TOUCH</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just have a friendly chat about technology and development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((contact) => (
                <Card 
                  key={contact.title} 
                  className={`bg-gradient-to-br ${contact.bgColor} ${contact.borderColor} border-2 hover:scale-105 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-br ${contact.bgColor} p-4 rounded-2xl border-2 ${contact.borderColor}`}>
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="font-black text-foreground text-sm mb-1">{contact.title}</p>
                        <a 
                          href={contact.href} 
                          className={`${contact.color} hover:text-primary transition-colors font-medium text-lg`}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-black text-foreground text-xl">FOLLOW MY JOURNEY</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-br ${social.bgColor} p-6 rounded-2xl border-2 ${social.borderColor} ${social.color} hover:text-white hover:scale-110 transition-all duration-300 group flex-1 text-center`}
                  >
                    <social.icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                    <p className="font-black text-sm">{social.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <Card className="bg-gradient-to-br from-primary/20 via-teal-500/20 to-green-500/20 border-2 border-primary/30 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <CardTitle className="text-primary text-3xl font-black">
                  READY TO COLLABORATE?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                <p className="text-muted-foreground text-center leading-relaxed text-lg">
                  Whether you have a groundbreaking project in mind, need technical consultation, 
                  or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white py-6 text-lg font-black shadow-lg transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:mohanmsj30@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      SEND EMAIL
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-lg font-black transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+918861079209">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      CALL NOW
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💡</div>
                <div className="space-y-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-lg px-6 py-2 font-black">
                    AVAILABLE FOR WORK
                  </Badge>
                  <p className="text-muted-foreground">
                    Currently accepting new projects and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
