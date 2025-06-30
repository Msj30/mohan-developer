
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Github, Linkedin, MapPin, Heart, Coffee } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Let's Talk",
      value: "+91 88610 79209",
      href: "tel:+918861079209",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Mail,
      label: "Drop a Message",
      value: "mohanmsj30@gmail.com",
      href: "mailto:mohanmsj30@gmail.com",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: MapPin,
      label: "Find Me At",
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
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanmsj",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Msj30",
      color: "text-gray-400",
      bgColor: "from-gray-500/20 to-slate-500/20",
      borderColor: "border-gray-500/30"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Curved Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-4 transform rotate-1">
            LET'S CONNECT
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-teal-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-primary/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just have a friendly chat about technology and development. 
                <span className="inline-flex items-center gap-1 ml-2">
                  <Coffee className="w-4 h-4" />
                </span>
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={contact.label} 
                    className={`bg-gradient-to-br ${contact.bgColor} ${contact.borderColor} border-2 transform hover:scale-105 transition-all duration-300 rounded-2xl`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-br ${contact.bgColor} p-4 rounded-2xl border ${contact.borderColor}`}>
                          <contact.icon className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-lg">{contact.label}</p>
                          <a 
                            href={contact.href} 
                            className={`${contact.color} hover:text-primary transition-colors font-medium`}
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-teal-500/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="font-semibold mb-6 text-teal-400 text-xl">Follow My Journey</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-br ${social.bgColor} p-4 rounded-2xl border-2 ${social.borderColor} ${social.color} hover:text-white hover:scale-110 transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/20 via-teal-500/20 to-green-500/20 border-2 border-primary/30 transform rotate-2 hover:rotate-0 transition-transform duration-300 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-center text-primary text-3xl">
                  Ready to Collaborate?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-8 p-8">
                <div className="text-6xl mb-6">🚀</div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a groundbreaking project in mind, need technical consultation, 
                  or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90 text-white py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:mohanmsj30@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="tel:+918861079209">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Me
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fun Quote */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300 rounded-3xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💡</div>
                <p className="text-lg font-medium text-purple-400 mb-2">
                  "Great things happen when great minds collaborate"
                </p>
                <p className="text-sm text-muted-foreground">
                  Let's build something extraordinary together!
                  <Heart className="w-4 h-4 inline ml-2 text-red-400" />
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
