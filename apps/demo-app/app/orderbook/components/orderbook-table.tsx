import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export function OrderBookTable({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={className} {...props} />;
}

export function OrderBookTableHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={className} {...props} />;
}

export function OrderBookTableRow({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('relative flex', className)} {...props} />;
}

export function OrderBookTableHead({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center h-10 w-1/2 px-2 text-xs font-medium uppercase text-gray-500',
        className,
      )}
      {...props}
    />
  );
}

export function OrderBookTableBody({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={className} {...props} />;
}

const orderBookTableCellVariants = cva('w-1/2 p-2 text-xs font-medium', {
  variants: {
    variant: {
      ask: 'text-red-700',
      bid: 'text-green-700',
    },
  },
});

export function OrderBookTableCell({
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof orderBookTableCellVariants>) {
  return (
    <div
      className={cn(orderBookTableCellVariants({ variant, className }))}
      {...props}
    />
  );
}

const orderBookTableDepthVariantsSchema = {
  variants: {
    variant: {
      ask: 'bg-red-700',
      bid: 'bg-green-700',
    },
  },
};

const orderBookTableDepthVariants = cva(
  'absolute left-0 top-0 size-full origin-left opacity-25',
  orderBookTableDepthVariantsSchema,
);

interface OrderBookTableDepthProps {
  depth: number;
  variant: keyof typeof orderBookTableDepthVariantsSchema.variants.variant;
}

export function OrderBookTableDepth({
  depth,
  variant,
  className,
  ...props
}: React.ComponentProps<'div'> & OrderBookTableDepthProps) {
  return (
    <div
      className={cn(orderBookTableDepthVariants({ variant, className }))}
      style={{ transform: `scaleX(${depth})` }}
      {...props}
    />
  );
}
