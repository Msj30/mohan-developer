
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohanmsj",
      username: "mohanmsj"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Msj30",
      username: "Msj30"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Let's discuss your next project or opportunity</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <Card className="bg-card/30 backdrop-blur-sm border-border glow-effect">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact) => (
                    <div key={contact.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold mb-4 text-primary">Connect with me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <p>LinkedIn: {socialLinks[0].username}</p>
                      <p>GitHub: {socialLinks[1].username}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <Card className="bg-card/30 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-background/50 border-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
