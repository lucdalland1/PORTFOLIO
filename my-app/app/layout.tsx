import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/lib/_components/toogle";
import Section from "@/lib/_components/Section";
import Header from "@/components/header";
import Footer from "@/lib/_components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luc Nkodia",
  description: "Developpeur web et mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased font-sans`,
          'h-full'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >    
          <Section>
            <Header />
            </Section>
            <main className="pt-20 min-sm:pt-40 flex-grow min-h-screen">
              {children}
            </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
