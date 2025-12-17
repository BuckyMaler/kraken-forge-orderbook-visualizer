import {
  OrderBookTableRow,
  OrderBookTableRowProps,
} from '@/app/orderbook/components/orderbook-table-row';
import { OrderBookTableSkeleton } from '@/app/orderbook/components/orderbook-table-skeleton';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';

interface OrderBookTableProps {
  rows: Array<OrderBookTableRowProps['row']>;
  type: OrderBookTableRowProps['type'];
  snapshotReceived: boolean;
}

export function OrderBookTable({
  rows,
  type,
  snapshotReceived,
}: OrderBookTableProps) {
  return (
    <Table>
      <TableHeader className="[&_tr]:border-none">
        <TableRow className="[&_th]:w-1/3 [&_th]:text-right [&_th]:text-xs [&_th]:uppercase [&_th]:text-gray-500">
          {type === 'bids' ? (
            <>
              <TableHead>Total</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
            </>
          ) : (
            <>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total</TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {!snapshotReceived
          ? Array.from({ length: 10 }).map((_, index) => (
              <OrderBookTableSkeleton key={index} type={type} />
            ))
          : rows.map((row) => (
              <OrderBookTableRow
                key={row.price}
                row={row}
                type={type}
                maxTotal={rows[rows.length - 1].total}
              />
            ))}
      </TableBody>
    </Table>
  );
}
