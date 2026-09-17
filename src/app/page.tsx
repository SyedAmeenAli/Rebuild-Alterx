import { Header } from '@/components/site/Header';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-ax-bg">
      <Header />
      <Hero />
    </main>
  );
}
