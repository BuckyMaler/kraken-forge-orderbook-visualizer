'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { connectWebSocket } from '@/lib/websocket/websocket-slice';

interface WebsocketProviderProps {
  readonly children: React.ReactNode;
}

export function WebsocketProvider({ children }: WebsocketProviderProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(connectWebSocket());
  }, [dispatch]);

  return children;
}
