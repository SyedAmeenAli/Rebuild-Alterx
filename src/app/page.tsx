import { Header } from '@/components/site/Header';
import { HeroCore } from '@/components/home/HeroCore';
import { SystemUnderneath } from '@/components/home/SystemUnderneath';
import { HomeAxInventory } from '@/components/home/HomeAxInventory';
import { DevelopersSection } from '@/components/home/DevelopersSection';
import { TechLoop } from '@/components/home/TechLoop';
import { InTheSystem } from '@/components/home/InTheSystem';
import { LatestSection } from '@/components/home/LatestSection';
import { GetStarted } from '@/components/home/GetStarted';
import { HomeFaq } from '@/components/home/HomeFaq';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <HeroCore />
      <TechLoop />
      <SystemUnderneath />
      <HomeAxInventory />
      <DevelopersSection />
      <InTheSystem />
      <LatestSection />
      <GetStarted />
      <HomeFaq />
    </main>
  );
}
