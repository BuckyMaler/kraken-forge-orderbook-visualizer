import { Item, ItemTitle } from '@/components/ui/item';
import { Skeleton } from '@/components/ui/skeleton';

interface OrderBookSpreadProps {
  spread: string;
  relativeSpread: string;
  snapshotReceived: boolean;
}

export function OrderBookSpread({
  spread,
  relativeSpread,
  snapshotReceived,
}: OrderBookSpreadProps) {
  if (!snapshotReceived) {
    return (
      <Item className="justify-center p-0">
        <ItemTitle>
          <span className="font-normal">Spread:</span>
          <Skeleton className="h-4 w-20" />
        </ItemTitle>
      </Item>
    );
  }

  return (
    <Item className="justify-center p-0">
      <ItemTitle className="text-xs text-gray-600">
        <span className="font-normal">Spread:</span> {spread} ({relativeSpread})
      </ItemTitle>
    </Item>
  );
}
