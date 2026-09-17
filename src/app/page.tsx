import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';
import { IntentToImpact } from '@/components/home/IntentToImpact';
import { HowItWorks } from '@/components/home/HowItWorks';
import { AlterEngineShowcase } from '@/components/home/AlterEngineShowcase';
import { AxInventoryShowcase } from '@/components/home/AxInventoryShowcase';
import { Reliability } from '@/components/home/Reliability';
import { Philosophy } from '@/components/home/Philosophy';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <Hero />
      <IntentToImpact />
      <HowItWorks />
      <AlterEngineShowcase />
      <AxInventoryShowcase />
      <Reliability />
      <Philosophy />
      <FinalCta />
    </main>
  );
}
