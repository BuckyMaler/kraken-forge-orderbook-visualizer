import { Suspense } from 'react';
import { OrderBookContainer } from '@/app/orderbook/components/orderbook-container';
import { SymbolSelect } from '@/app/symbol-select/components/symbol-select';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
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
