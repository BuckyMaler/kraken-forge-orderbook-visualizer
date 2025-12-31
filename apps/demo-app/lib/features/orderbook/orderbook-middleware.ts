import { Middleware } from '@reduxjs/toolkit';
import {
  createOrderBookMessage,
  ordersMessageSchema,
  subscriptionMessageSchema,
} from '@/lib/features/orderbook/orderbook-api';
import {
  setOrderBookSubscriptionStatus,
  setOrders,
  subscribeOrderBook,
  unsubscribeOrderBook,
} from '@/lib/features/orderbook/orderbook-slice';
import { SubscriptionMethod } from '@/lib/websocket/constants';
import {
  receiveWebSocketMessage,
  sendWebSocketMessage,
} from '@/lib/websocket/websocket-slice';

export const orderbookMiddleware: Middleware = (store) => {
  return (next) => (action) => {
    if (subscribeOrderBook.match(action)) {
      const orderbookMessage = createOrderBookMessage(
        SubscriptionMethod.SUBSCRIBE,
        action.payload.symbol,
      );
      store.dispatch(sendWebSocketMessage(orderbookMessage));
    } else if (unsubscribeOrderBook.match(action)) {
      const orderbookMessage = createOrderBookMessage(
        SubscriptionMethod.UNSUBSCRIBE,
        action.payload.symbol,
      );
      store.dispatch(sendWebSocketMessage(orderbookMessage));
    } else if (receiveWebSocketMessage.match(action)) {
      const data = action.payload;

      const ordersMessageResult = ordersMessageSchema.safeParse(data);
      if (ordersMessageResult.success) {
        store.dispatch(setOrders(ordersMessageResult.data));
        return next(action);
      }

      const subscriptionMessageResult =
        subscriptionMessageSchema.safeParse(data);
      if (subscriptionMessageResult.success) {
        store.dispatch(
          setOrderBookSubscriptionStatus(subscriptionMessageResult.data),
        );
        return next(action);
      }
    }
    return next(action);
  };
};
