
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Sidebar - Profile Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Hero />
              <About />
              <Contact />
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
