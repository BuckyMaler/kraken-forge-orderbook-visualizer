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
    <div className="relative grid grid-cols-3 border-b border-transparent [&_div]:p-2 [&_div]:text-right [&_div]:text-xs [&_div]:font-medium">
      {type === 'bids' ? (
        <>
          <div>{row.total}</div>
          <div>{row.qty}</div>
          <div className="text-green-700">{row.price}</div>
          <div
            className="absolute left-0 top-0 size-full origin-right bg-green-700 opacity-25"
            style={{
              transform: `scaleX(${Number(row.total) / Number(maxTotal)})`,
            }}
          ></div>
        </>
      ) : (
        <>
          <div className="text-red-700">{row.price}</div>
          <div>{row.qty}</div>
          <div>{row.total}</div>
          <div
            className="absolute left-0 top-0 size-full origin-left bg-red-700 opacity-25"
            style={{
              transform: `scaleX(${Number(row.total) / Number(maxTotal)})`,
            }}
          ></div>
        </>
      )}
    </div>
  );
}
