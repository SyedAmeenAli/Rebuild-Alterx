import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlterX",
  description: "From objective to completed, reviewable work. Alter Engine structures complex work, carries out approved steps and keeps important decisions open to review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="antialiased min-h-screen bg-ax-ivory text-ax-black selection:bg-ax-orange selection:text-white flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
