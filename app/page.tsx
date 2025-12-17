import { Suspense } from 'react';
import { OrderBook } from '@/app/orderbook/components/orderbook';
import { SymbolSelect } from '@/app/symbol-select/components/symbol-select';

export default function Home() {
  return (
    <div className="space-y-4">
      <Suspense>
        <SymbolSelect />
        <OrderBook />
      </Suspense>
    </div>
  );
}
