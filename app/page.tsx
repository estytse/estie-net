import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowWeWork from '@/components/HowWeWork';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowWeWork />
      <Projects />
      <TechStack />
      <FinalCTA />
    </main>
  );
}
