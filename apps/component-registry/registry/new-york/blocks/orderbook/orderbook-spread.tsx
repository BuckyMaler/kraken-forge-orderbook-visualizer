import { Item, ItemTitle } from '@/registry/new-york/ui/item';
import { cn } from '@/lib/utils';

export function OrderBookSpread({
  className,
  ...props
}: React.ComponentProps<typeof Item>) {
  return (
    <Item
      variant="muted"
      className={cn('justify-center w-full py-1 px-0 rounded-none', className)}
      {...props}
    />
  );
}

export function OrderBookSpreadContent({
  className,
  ...props
}: React.ComponentProps<typeof ItemTitle>) {
  return (
    <ItemTitle
      className={cn('text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}
