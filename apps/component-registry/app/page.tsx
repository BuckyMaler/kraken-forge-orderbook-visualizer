import { OpenInDemoAppButton } from '@/components/open-in-demo-app-button';
import { ThemeToggle } from '@/components/theme-toggle';
import { OrderBook } from '@/registry/new-york/blocks/orderbook/orderbook';

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">
            Kraken Forge Component Registry
          </h1>
          <p className="text-muted-foreground">
            A component registry for distributing a reusable order book
            component using shadcn.
          </p>
        </header>
        <main className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-muted-foreground">
                A sleek order book component
              </h2>
              <OpenInDemoAppButton className="w-fit" />
            </div>
            <div className="flex items-center justify-center min-h-[400px] relative">
              <div className="w-full">
                <OrderBook />
              </div>
            </div>
          </div>
        </main>
        <footer className="text-center text-sm text-muted-foreground">
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
    </>
  );
}
