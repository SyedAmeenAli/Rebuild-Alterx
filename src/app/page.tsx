import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';
import { ProductAtlas } from '@/components/home/ProductAtlas';
import { EngineScrollStory } from '@/components/home/EngineScrollStory';
import { EngineComparison } from '@/components/home/EngineComparison';
import { EngineRadialModel } from '@/components/home/EngineRadialModel';
import { UseCaseJourney } from '@/components/home/UseCaseJourney';
import { VoiceWorkflowDemo } from '@/components/home/VoiceWorkflowDemo';
import { SecurityVerificationStream } from '@/components/home/SecurityVerificationStream';
import { WhyAlterX } from '@/components/home/WhyAlterX';
import { StartRoutes } from '@/components/home/StartRoutes';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-ivory">
      <Header />
      <Hero />
      <ProductAtlas />
      <EngineScrollStory />
      <EngineComparison />
      <EngineRadialModel />
      <UseCaseJourney />
      <VoiceWorkflowDemo />
      <SecurityVerificationStream />
      <WhyAlterX />
      <StartRoutes />
    </main>
  );
}
