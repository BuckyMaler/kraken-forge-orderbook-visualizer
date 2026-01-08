'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { OrderBook } from '@/app/orderbook/components/orderbook';
import { OrderBookSkeleton } from '@/app/orderbook/components/orderbook-skeleton';
import { Card, CardContent } from '@/components/ui/card';
import {
  selectOrderBookBySymbol,
  subscribeOrderBook,
  unsubscribeOrderBook,
} from '@/lib/features/orderbook/orderbook-slice';
import { DEFAULT_TOKEN, TOKENS } from '@/lib/features/tokens/tokens';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectWebSocketStatus } from '@/lib/websocket/websocket-slice';

export function OrderBookContainer() {
  const searchParams = useSearchParams();
  const symbol = searchParams.get('symbol') || DEFAULT_TOKEN.symbol;
  const prevSymbolRef = useRef<string>(symbol);
  const token = TOKENS.find((token) => token.symbol === symbol);
  const dispatch = useAppDispatch();
  const websocketStatus = useAppSelector(selectWebSocketStatus);
  const bookPresent = useAppSelector((state) =>
    selectOrderBookBySymbol(state, symbol),
  );

  useEffect(() => {
    if (websocketStatus !== 'open' || !token) {
      return;
    }

    const prevSymbol = prevSymbolRef.current;
    if (prevSymbol !== symbol) {
      dispatch(unsubscribeOrderBook({ symbol: prevSymbol }));
    }

    dispatch(subscribeOrderBook({ symbol }));
    prevSymbolRef.current = symbol;

    return () => {
      dispatch(unsubscribeOrderBook({ symbol }));
    };
  }, [websocketStatus, token, symbol, dispatch]);

  // TODO: Add token not found state (low priority)
  // This will only happen if the user manually edits
  // the URL to an unsupported symbol.
  if (!token) {
    return null;
  }

  if (!bookPresent || !bookPresent.snapshotReceived) {
    return (
      <Card>
        <CardContent className="px-0">
          <OrderBookSkeleton />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="px-0">
        <OrderBook bookPresent={bookPresent} symbol={symbol} token={token} />
      </CardContent>
    </Card>
  );
}
