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
    <div className="@container">
      <div className="@4xl:flex @4xl:flex-wrap">
        <OrderBookTable className="@4xl:order-3 @4xl:w-1/2">
          <OrderBookTableHeader>
            <OrderBookTableRow>
              <OrderBookTableHead className="@4xl:justify-end">
                Price
              </OrderBookTableHead>
              <OrderBookTableHead className="@4xl:justify-end">
                Quantity
              </OrderBookTableHead>
              <OrderBookTableHead className="hidden @lg:flex @4xl:justify-end">
                Total
              </OrderBookTableHead>
            </OrderBookTableRow>
          </OrderBookTableHeader>
          <OrderBookTableBody className="flex flex-col-reverse @4xl:flex-col">
            {Array.from({ length: 10 }).map((_, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent"
              >
                <OrderBookTableCell
                  variant="ask"
                  className="@4xl:flex @4xl:justify-end"
                >
                  <Skeleton className="h-4 w-14" />
                </OrderBookTableCell>
                <OrderBookTableCell className="@4xl:flex @4xl:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden @lg:flex @4xl:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
              </OrderBookTableRow>
            ))}
          </OrderBookTableBody>
        </OrderBookTable>
        <OrderBookSpread className="@4xl:order-1 @4xl:py-0 @4xl:bg-card">
          <OrderBookSpreadContent>
            <span className="font-normal">Spread:</span>
            <Skeleton className="h-4 w-20" />
          </OrderBookSpreadContent>
        </OrderBookSpread>
        <OrderBookTable className="@4xl:order-2 @4xl:w-1/2">
          <OrderBookTableHeader className="hidden @4xl:block">
            <OrderBookTableRow className="@4xl:flex-row-reverse">
              <OrderBookTableHead className="@4xl:justify-end">
                Price
              </OrderBookTableHead>
              <OrderBookTableHead className="@4xl:justify-end">
                Quantity
              </OrderBookTableHead>
              <OrderBookTableHead className="@4xl:justify-end">
                Total
              </OrderBookTableHead>
            </OrderBookTableRow>
          </OrderBookTableHeader>
          <OrderBookTableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent @4xl:flex-row-reverse"
              >
                <OrderBookTableCell
                  variant="bid"
                  className="@4xl:flex @4xl:justify-end"
                >
                  <Skeleton className="h-4 w-14" />
                </OrderBookTableCell>
                <OrderBookTableCell className="@4xl:flex @4xl:justify-end">
                  <Skeleton className="h-4 w-20" />
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden @lg:flex @4xl:justify-end">
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
    </div>
  );
}
