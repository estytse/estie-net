import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import WhyDifferent from '@/components/WhyDifferent';
import TechStack from '@/components/TechStack';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyDifferent />
      <TechStack />
      <FinalCTA />
    </main>
  );
}
