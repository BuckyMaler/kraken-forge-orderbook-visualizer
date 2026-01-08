'use client';

import {
  OrderBookSpread,
  OrderBookSpreadContent,
} from '@/registry/new-york/blocks/orderbook/orderbook-spread';
import {
  OrderBookTable,
  OrderBookTableBody,
  OrderBookTableCell,
  OrderBookTableDepth,
  OrderBookTableHead,
  OrderBookTableHeader,
  OrderBookTableRow,
} from '@/registry/new-york/blocks/orderbook/orderbook-table';
import { Card, CardContent } from '@/registry/new-york/ui/card';

// Replace with real data fetching logic
const bookData = {
  asks: [
    { price: 87370.9, qty: 0.02130603, total: 0.02130603 },
    { price: 87372.6, qty: 0.000051, total: 0.02135703 },
    { price: 87376.1, qty: 0.000051, total: 0.02140803 },
    { price: 87379.6, qty: 0.000051, total: 0.02145903 },
    { price: 87380.9, qty: 0.00747, total: 0.02892903 },
    { price: 87383.1, qty: 0.000051, total: 0.02898003 },
    { price: 87384.0, qty: 0.195427, total: 0.22440703 },
    { price: 87384.1, qty: 1.71656007, total: 1.9409671 },
    { price: 87386.5, qty: 0.13724807, total: 2.07821517 },
    { price: 87386.6, qty: 0.000051, total: 2.07826617 },
  ],
  bids: [
    { price: 87370.8, qty: 2.73224858, total: 2.73224858 },
    { price: 87370.7, qty: 0.003, total: 2.73524858 },
    { price: 87369.7, qty: 0.02229, total: 2.75753858 },
    { price: 87369.6, qty: 0.567288, total: 3.32482658 },
    { price: 87369.2, qty: 0.000051, total: 3.32487758 },
    { price: 87369.0, qty: 0.114448, total: 3.43932558 },
    { price: 87368.6, qty: 0.02965, total: 3.46897558 },
    { price: 87368.5, qty: 1.71686499, total: 5.18584057 },
    { price: 87367.9, qty: 0.11444907, total: 5.30028964 },
    { price: 87365.7, qty: 0.000051, total: 5.30034064 },
  ],
};

export function OrderBook() {
  const lowestAsk = bookData.asks[0].price;
  const highestBid = bookData.bids[0].price;
  const spread = lowestAsk - highestBid;
  const relativeSpread = (spread / lowestAsk) * 100;

  return (
    <Card>
      <CardContent className="px-0">
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
              {bookData.asks.map((ask, index) => (
                <OrderBookTableRow
                  key={index}
                  className="border-b border-transparent"
                >
                  <OrderBookTableCell
                    variant="ask"
                    className="lg:flex lg:justify-end"
                  >
                    {ask.price}
                  </OrderBookTableCell>
                  <OrderBookTableCell className="lg:flex lg:justify-end">
                    {ask.qty}
                  </OrderBookTableCell>
                  <OrderBookTableCell className="hidden sm:flex lg:justify-end">
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
          <OrderBookSpread className="lg:order-1 lg:py-0 lg:bg-background">
            <OrderBookSpreadContent>
              <span className="font-normal">Spread:</span> {spread.toFixed(1)} (
              {relativeSpread.toFixed(4)}%)
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
              {bookData.bids.map((bid, index) => (
                <OrderBookTableRow
                  key={index}
                  className="border-b border-transparent lg:flex-row-reverse"
                >
                  <OrderBookTableCell
                    variant="bid"
                    className="lg:flex lg:justify-end"
                  >
                    {bid.price}
                  </OrderBookTableCell>
                  <OrderBookTableCell className="lg:flex lg:justify-end">
                    {bid.qty}
                  </OrderBookTableCell>
                  <OrderBookTableCell className="hidden sm:flex lg:justify-end">
                    {bid.total}
                  </OrderBookTableCell>
                  <OrderBookTableDepth
                    depth={
                      bookData.bids[index].total /
                      bookData.bids[bookData.bids.length - 1].total
                    }
                    variant="bid"
                    className="lg:origin-right"
                  />
                </OrderBookTableRow>
              ))}
            </OrderBookTableBody>
          </OrderBookTable>
        </div>
      </CardContent>
    </Card>
  );
}
