import { OrderBookTableRowProps } from '@/app/orderbook/components/orderbook-table-row';
import { Skeleton } from '@/components/ui/skeleton';

interface OrderBookTableSkeletonProps {
  type: OrderBookTableRowProps['type'];
}

export function OrderBookTableSkeleton({ type }: OrderBookTableSkeletonProps) {
  return (
    <div className="grid grid-cols-3 border-b border-transparent [&_div]:p-2 [&_div]:flex [&_div]:justify-end">
      {type === 'bids' ? (
        <>
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div>
            <Skeleton className="h-4 w-14" />
          </div>
        </>
      ) : (
        <>
          <div>
            <Skeleton className="h-4 w-14" />
          </div>
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
        </>
      )}
    </div>
  );
}
