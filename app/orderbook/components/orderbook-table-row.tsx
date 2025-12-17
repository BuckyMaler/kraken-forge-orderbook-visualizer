import { TableRow, TableCell } from '@/components/ui/table';

export interface OrderBookTableRowProps {
  row: { price: string; qty: string; total: string };
  type: 'bids' | 'asks';
  maxTotal: string;
}

export function OrderBookTableRow({
  row,
  type,
  maxTotal,
}: OrderBookTableRowProps) {
  return (
    <TableRow className="relative border-transparent [&_td]:text-right [&_td]:text-xs [&_td]:font-medium">
      {type === 'bids' ? (
        <>
          <TableCell>{row.total}</TableCell>
          <TableCell>{row.qty}</TableCell>
          <TableCell className="text-green-700">{row.price}</TableCell>
          <TableCell
            className="absolute left-0 top-0 size-full origin-right bg-green-700 opacity-25"
            style={{
              transform: `scaleX(${Number(row.total) / Number(maxTotal)})`,
            }}
          ></TableCell>
        </>
      ) : (
        <>
          <TableCell className="text-red-700">{row.price}</TableCell>
          <TableCell>{row.qty}</TableCell>
          <TableCell>{row.total}</TableCell>
          <TableCell
            className="absolute left-0 top-0 size-full origin-left bg-red-700 opacity-25"
            style={{
              transform: `scaleX(${Number(row.total) / Number(maxTotal)})`,
            }}
          ></TableCell>
        </>
      )}
    </TableRow>
  );
}
