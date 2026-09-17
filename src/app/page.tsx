import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';
import { HomeFrame01 } from '@/components/home/HomeFrame01';
import { HomeFrame02 } from '@/components/home/HomeFrame02';
import { HomeFrame03 } from '@/components/home/HomeFrame03';
import { HomeFrame04 } from '@/components/home/HomeFrame04';
import { HomeFrame05 } from '@/components/home/HomeFrame05';
import { Reliability } from '@/components/home/Reliability';
import { Philosophy } from '@/components/home/Philosophy';
import { FinalCta } from '@/components/home/FinalCta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <Hero />
      <HomeFrame01 />
      <HomeFrame02 />
      <HomeFrame03 />
      <HomeFrame04 />
      <HomeFrame05 />
      <Reliability />
      <Philosophy />
      <FinalCta />
    </main>
  );
}
