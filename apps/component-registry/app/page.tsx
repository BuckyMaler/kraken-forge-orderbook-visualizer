import { OpenInDemoAppButton } from '@/components/open-in-demo-app-button';
import { OrderBook } from '@/registry/new-york/blocks/orderbook/orderbook';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Kraken Forge Component Registry
        </h1>
        <p className="text-muted-foreground">
          A component registry for distributing a reusable order book component
          using shadcn.
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-8">
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
      </div>
    </>
  );
}
