
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 88610 79209",
      href: "tel:+918861079209"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mohanmsj30@gmail.com",
      href: "mailto:mohanmsj30@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanmsj",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Msj30",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <a 
                      href={contact.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="font-medium mb-4">Follow Me</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-primary/20 p-3 rounded-lg text-primary ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-teal-500/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-center text-primary">Ready to Collaborate?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Whether you have a project in mind or just want to say hello, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="mailto:mohanmsj30@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="tel:+918861079209">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
