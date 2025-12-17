import { OrderBookTableRowProps } from '@/app/orderbook/components/orderbook-table-row';
import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

interface OrderBookTableSkeletonProps {
  type: OrderBookTableRowProps['type'];
}

export function OrderBookTableSkeleton({ type }: OrderBookTableSkeletonProps) {
  return (
    <TableRow className="[&_td>div]:flex [&_td>div]:justify-end">
      {type === 'bids' ? (
        <>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-14" />
            </div>
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-14" />
            </div>
          </TableCell>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
          <TableCell>
            <div>
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
        </>
      )}
    </TableRow>
  );
}
