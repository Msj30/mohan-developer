
import Header from '@/components/Header';
import HeroFullscreen from '@/components/HeroFullscreen';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroFullscreen />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-24">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
