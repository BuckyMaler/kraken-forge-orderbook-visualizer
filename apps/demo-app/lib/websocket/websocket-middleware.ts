import { Middleware } from '@reduxjs/toolkit';
import {
  connectWebSocket,
  disconnectWebSocket,
  receiveWebSocketMessage,
  sendWebSocketMessage,
  setWebSocketStatus,
} from '@/lib/websocket/websocket-slice';

export const websocketMiddleware: Middleware = (store) => {
  let ws: WebSocket | null = null;

  return (next) => (action) => {
    if (connectWebSocket.match(action)) {
      ws = new WebSocket('wss://ws.kraken.com/v2');

      ws.onopen = () => {
        store.dispatch(setWebSocketStatus('open'));
      };

      ws.onclose = () => {
        ws = null;
        store.dispatch(setWebSocketStatus('closed'));
      };

      ws.onmessage = (message) => {
        try {
          const data = JSON.parse(message.data);
          store.dispatch(receiveWebSocketMessage(data));
        } catch {}
      };
    } else if (disconnectWebSocket.match(action)) {
      if (ws) {
        ws.close();
      }
    } else if (sendWebSocketMessage.match(action)) {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(action.payload));
      }
    }
    return next(action);
  };
};
