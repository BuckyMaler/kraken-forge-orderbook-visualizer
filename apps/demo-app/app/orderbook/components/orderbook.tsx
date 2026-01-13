'use client';

import { format } from 'date-fns';
import { HistoryIcon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  OrderBookSpread,
  OrderBookSpreadContent,
} from '@/app/orderbook/components/orderbook-spread';
import {
  OrderBookTable,
  OrderBookTableBody,
  OrderBookTableCell,
  OrderBookTableDepth,
  OrderBookTableHead,
  OrderBookTableHeader,
  OrderBookTableRow,
} from '@/app/orderbook/components/orderbook-table';
import { CustomSlider } from '@/components/custom-slider';
import { Toggle } from '@/components/ui/toggle';
import type { BookData } from '@/lib/features/orderbook/orderbook-slice';
import type { Token } from '@/lib/features/tokens/tokens';

const MAX_HISTORY_LENGTH = 500;

interface OrderBookProps {
  bookPresent: BookData;
  symbol: string;
  token: Token;
}

export function OrderBook({ bookPresent, symbol, token }: OrderBookProps) {
  const [timeTravelEnabled, setTimeTravelEnabled] = useState(false);
  const [bookHistory, setBookHistory] = useState<Array<BookData>>([]);
  const [bookHistoryIndex, setBookHistoryIndex] = useState(-1);
  const bookData = timeTravelEnabled
    ? bookHistory[bookHistoryIndex]
    : bookPresent;

  const { spread, relativeSpread } = useMemo(() => {
    if (bookData.asks.length > 0 && bookData.bids.length > 0) {
      const lowestAsk = bookData.asks[0].price;
      const highestBid = bookData.bids[0].price;
      const spread = lowestAsk - highestBid;
      const relativeSpread = (spread / lowestAsk) * 100;
      return { spread, relativeSpread };
    }
    return { spread: null, relativeSpread: null };
  }, [bookData]);

  const priceFormatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: token.pairDecimals,
        maximumFractionDigits: token.pairDecimals,
      }),
    [token],
  );

  const formattedAsks = useMemo(
    () =>
      bookData.asks.map((ask) => ({
        price: priceFormatter.format(ask.price),
        qty: ask.qty.toFixed(token.lotDecimals),
        total: ask.total.toFixed(token.lotDecimals),
      })),
    [bookData, priceFormatter, token],
  );

  const formattedBids = useMemo(
    () =>
      bookData.bids.map((bid) => ({
        price: priceFormatter.format(bid.price),
        qty: bid.qty.toFixed(token.lotDecimals),
        total: bid.total.toFixed(token.lotDecimals),
      })),
    [bookData, priceFormatter, token],
  );

  const formattedSpread = useMemo(
    () => (spread !== null ? spread.toFixed(token.pairDecimals) : '-'),
    [spread, token],
  );

  const formattedRelativeSpread = useMemo(
    () => (relativeSpread !== null ? `${relativeSpread.toFixed(4)}%` : '-'),
    [relativeSpread],
  );

  useEffect(() => {
    // Setting state in this effect is safe because the state
    // variables are not used in the dependency array.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeTravelEnabled(false);
    setBookHistory([]);
    setBookHistoryIndex(-1);
  }, [symbol]);

  useEffect(() => {
    if (!timeTravelEnabled && bookPresent.snapshotReceived) {
      // Setting state in this effect is safe because the state
      // variables are not used in the dependency array.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBookHistory((prev) => {
        const next = [...prev, bookPresent];
        if (next.length > MAX_HISTORY_LENGTH) {
          next.shift();
        }
        return next;
      });
      setBookHistoryIndex((prev) =>
        prev < MAX_HISTORY_LENGTH - 1 ? prev + 1 : prev,
      );
    }
  }, [timeTravelEnabled, bookPresent]);

  const handleTimeTravelToggle = () => {
    setTimeTravelEnabled((prev) => !prev);
    if (timeTravelEnabled) {
      setBookHistory([]);
      setBookHistoryIndex(-1);
    }
  };

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
            {formattedAsks.map((ask, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent"
              >
                <OrderBookTableCell
                  variant="ask"
                  className="@4xl:flex @4xl:justify-end"
                >
                  {ask.price}
                </OrderBookTableCell>
                <OrderBookTableCell className="@4xl:flex @4xl:justify-end">
                  {ask.qty}
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden @lg:flex @4xl:justify-end">
                  {ask.total}
                </OrderBookTableCell>
                <OrderBookTableDepth
                  depth={
                    bookData.asks[index].total /
                    bookData.asks[bookData.asks.length - 1].total
                  }
                  variant="ask"
                />
              </OrderBookTableRow>
            ))}
          </OrderBookTableBody>
        </OrderBookTable>
        <OrderBookSpread className="@4xl:order-1 @4xl:py-0 @4xl:bg-card">
          <OrderBookSpreadContent>
            <span className="font-normal">Spread:</span> {formattedSpread} (
            {formattedRelativeSpread})
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
            {formattedBids.map((bid, index) => (
              <OrderBookTableRow
                key={index}
                className="border-b border-transparent @4xl:flex-row-reverse"
              >
                <OrderBookTableCell
                  variant="bid"
                  className="@4xl:flex @4xl:justify-end"
                >
                  {bid.price}
                </OrderBookTableCell>
                <OrderBookTableCell className="@4xl:flex @4xl:justify-end">
                  {bid.qty}
                </OrderBookTableCell>
                <OrderBookTableCell className="hidden @lg:flex @4xl:justify-end">
                  {bid.total}
                </OrderBookTableCell>
                <OrderBookTableDepth
                  depth={
                    bookData.bids[index].total /
                    bookData.bids[bookData.bids.length - 1].total
                  }
                  variant="bid"
                  className="@4xl:origin-right"
                />
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
            onClick={() => handleTimeTravelToggle()}
          >
            <HistoryIcon />
            Time Travel
          </Toggle>
        </div>
        <CustomSlider
          value={[bookHistoryIndex]}
          max={bookHistory.length - 1}
          step={1}
          disabled={!timeTravelEnabled}
          thumbTooltipContent={format(bookData.timestamp, 'PP, HH:mm:ss.SSS a')}
          onValueChange={(value) => setBookHistoryIndex(value[0])}
        />
      </div>
    </div>
  );
}
