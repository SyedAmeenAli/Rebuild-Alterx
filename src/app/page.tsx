import { Header } from '@/components/site/Header';
import { HeroCore } from '@/components/home/HeroCore';
import { TheShift } from '@/components/home/TheShift';
import { SystemUnderneath } from '@/components/home/SystemUnderneath';
import { HomeAxInventory } from '@/components/home/HomeAxInventory';
import { DevelopersSection } from '@/components/home/DevelopersSection';
import { WhyAlterx } from '@/components/home/WhyAlterx';
import { GetStarted } from '@/components/home/GetStarted';
import { HomeFaq } from '@/components/home/HomeFaq';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <HeroCore />
      <TheShift />
      <SystemUnderneath />
      <HomeAxInventory />
      <DevelopersSection />
      <WhyAlterx />
      <GetStarted />
      <HomeFaq />
      <FinalCta />
    </main>
  );
}
