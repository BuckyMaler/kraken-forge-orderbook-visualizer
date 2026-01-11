import { HistoryIcon } from 'lucide-react';
import {
  OrderBookSpread,
  OrderBookSpreadContent,
} from '@/app/orderbook/components/orderbook-spread';
import {
  OrderBookTable,
  OrderBookTableBody,
  OrderBookTableCell,
  OrderBookTableHead,
  OrderBookTableHeader,
  OrderBookTableRow,
} from '@/app/orderbook/components/orderbook-table';
import { CustomSlider } from '@/components/custom-slider';
import { Skeleton } from '@/components/ui/skeleton';
import { Toggle } from '@/components/ui/toggle';

export function OrderBookSkeleton() {
  return (
    <>
      <div className="lg:flex lg:flex-wrap">
        <OrderBookTable className="lg:order-3 lg:w-1/2">
          <OrderBookTableHeader>
            <OrderBookTableRow>
              <OrderBookTableHead className="lg:justify-end">
                Price
              </OrderBookTableHead>
              <OrderBookTableHead className="lg:justify-end">
                Quantity
              </OrderBookTableHead>
              <OrderBookTableHead className="hidden sm:flex lg:justify-end">
                Total
              </OrderBookTableHead>
            </OrderBookTableRow>
          </OrderBookTableHeader>
          <OrderBookTableBody className="flex flex-col-reverse lg:flex-col">
            {Array.from({ length: 10 }).map((_, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent"
              >
                <OrderBookTableCell
                  variant="ask"
                  className="lg:flex lg:justify-end"
                >
                  <Skeleton className="h-4 w-14" />
                </OrderBookTableCell>
                <OrderBookTableCell className="lg:flex lg:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden sm:flex lg:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
              </OrderBookTableRow>
            ))}
          </OrderBookTableBody>
        </OrderBookTable>
        <OrderBookSpread className="lg:order-1 lg:py-0 lg:bg-card">
          <OrderBookSpreadContent>
            <span className="font-normal">Spread:</span>
            <Skeleton className="h-4 w-20" />
          </OrderBookSpreadContent>
        </OrderBookSpread>
        <OrderBookTable className="lg:order-2 lg:w-1/2">
          <OrderBookTableHeader className="hidden lg:block">
            <OrderBookTableRow className="lg:flex-row-reverse">
              <OrderBookTableHead className="lg:justify-end">
                Price
              </OrderBookTableHead>
              <OrderBookTableHead className="lg:justify-end">
                Quantity
              </OrderBookTableHead>
              <OrderBookTableHead className="lg:justify-end">
                Total
              </OrderBookTableHead>
            </OrderBookTableRow>
          </OrderBookTableHeader>
          <OrderBookTableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent lg:flex-row-reverse"
              >
                <OrderBookTableCell
                  variant="bid"
                  className="lg:flex lg:justify-end"
                >
                  <Skeleton className="h-4 w-14" />
                </OrderBookTableCell>
                <OrderBookTableCell className="lg:flex lg:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden sm:flex lg:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
              </OrderBookTableRow>
            ))}
          </OrderBookTableBody>
        </OrderBookTable>
      </div>
      <div className="flex items-center gap-x-4 mt-4 px-2">
        <div>
          <Toggle
            aria-label="Toggle time travel"
            size="sm"
            variant="outline"
            disabled={true}
          >
            <HistoryIcon />
            Time Travel
          </Toggle>
        </div>
        <CustomSlider
          value={[0]}
          max={0}
          step={1}
          disabled={true}
          thumbTooltipContent=""
        />
      </div>
    </>
  );
}
