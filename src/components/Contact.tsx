
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

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
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanmsj"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Msj30"
    }
  ];

  return (
    <Card id="contact" className="bg-card/50 backdrop-blur-sm border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-primary">Contact</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactInfo.map((contact) => (
          <div key={contact.label} className="flex items-center space-x-3">
            <contact.icon className="w-4 h-4 text-primary" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium">{contact.label}</p>
              <a 
                href={contact.href} 
                className="text-xs text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {contact.value}
              </a>
            </div>
          </div>
        ))}

        <div className="pt-3 border-t border-border">
          <p className="text-xs font-medium mb-2 text-primary">Follow Me</p>
          <div className="flex space-x-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                size="sm"
                variant="outline"
                className="h-8 w-8 p-0 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-3 h-3" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
          asChild
        >
          <a href="mailto:mohanmsj30@gmail.com">
            <ExternalLink className="w-3 h-3 mr-2" />
            Send Message
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Contact;
