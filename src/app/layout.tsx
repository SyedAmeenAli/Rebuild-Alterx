import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALTERX",
  description: "You describe the work. ALTERX handles the workflow.",
  openGraph: {
    siteName: "ALTERX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen bg-ax-bg text-ax-text selection:bg-ax-mint selection:text-ax-black flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
