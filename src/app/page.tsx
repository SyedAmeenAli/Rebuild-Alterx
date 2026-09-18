import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';
import { RequestToWork } from '@/components/home/RequestToWork';
import { SystemUnderneath } from '@/components/home/SystemUnderneath';
import { HomeAlterEngine } from '@/components/home/HomeAlterEngine';
import { HomeAxInventory } from '@/components/home/HomeAxInventory';
import { EditorialPause } from '@/components/home/EditorialPause';
import { WhyAlterx } from '@/components/home/WhyAlterx';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <Hero />
      <RequestToWork />
      <SystemUnderneath />
      <HomeAlterEngine />
      <HomeAxInventory />
      <EditorialPause />
      <WhyAlterx />
      <FinalCta />
    </main>
  );
}
