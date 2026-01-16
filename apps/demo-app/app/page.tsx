import { Suspense } from 'react';
import { OrderBookContainer } from '@/app/orderbook/components/orderbook-container';
import { SymbolSelect } from '@/app/symbol-select/components/symbol-select';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Kraken Forge Demo App
        </h1>
        <p className="text-muted-foreground">
          A real-time order book visualizer that connects to Kraken&apos;s
          WebSocket API and allows time travel.
        </p>
      </div>
      <div className="space-y-4">
        <Suspense>
          <SymbolSelect />
          <OrderBookContainer />
        </Suspense>
      </div>
    </>
  );
}
