import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';
import { RequestToWork } from '@/components/home/RequestToWork';
import { HomeProducts } from '@/components/home/HomeProducts';
import { WhyAlterx } from '@/components/home/WhyAlterx';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <Hero />
      <RequestToWork />
      <HomeProducts />
      <WhyAlterx />
      <FinalCta />
    </main>
  );
}
