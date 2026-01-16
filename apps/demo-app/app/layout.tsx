import { Analytics } from '@vercel/analytics/next';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { StoreProvider } from '@/app/providers/store-provider';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { WebSocketProvider } from '@/app/providers/websocket-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kraken Forge Demo App',
  description:
    "A real-time order book visualizer that connects to Kraken's WebSocket API and allows time travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <WebSocketProvider>
              <div className="flex flex-col min-h-svh">
                <header className="sticky top-0 left-0 z-50 flex justify-between gap-x-4 w-full p-4 bg-background">
                  <Link href="/">
                    <span className="text-3xl">🐙</span>
                  </Link>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://kraken-forge-component-registry.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLinkIcon /> Component Registry
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://github.com/BuckyMaler/kraken-forge-orderbook-visualizer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubIcon /> GitHub
                      </a>
                    </Button>
                    <ThemeToggle />
                  </div>
                </header>
                <main className="flex flex-col flex-1 w-full max-w-5xl mx-auto p-4">
                  {children}
                </main>
                <footer className="p-4 text-center text-sm text-muted-foreground">
                  Built by{' '}
                  <a
                    href="https://x.com/BuckyMaler"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    Bucky Maler
                  </a>
                  . The source code is available on{' '}
                  <a
                    href="https://github.com/BuckyMaler/kraken-forge-orderbook-visualizer"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    GitHub
                  </a>
                  .
                </footer>
              </div>
            </WebSocketProvider>
          </StoreProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
