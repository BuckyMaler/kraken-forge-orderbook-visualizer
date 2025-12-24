# Kraken Forge Component Registry

[https://kraken-forge-component-registry.vercel.app](https://kraken-forge-component-registry.vercel.app)

https://github.com/user-attachments/assets/f93d79c5-23ac-4e50-8216-64aacfae78e8

## About

This is a custom component registry for distributing code using [shadcn](https://ui.shadcn.com/docs/registry).

### Installation

```
npx shadcn@latest add https://kraken-forge-component-registry.vercel.app/r/orderbook.json
```

### Usage

```ts
import { OrderBook } from '@/components/orderbook';
```

```ts
<OrderBook />
```

Replace the mock data in the block with real data fetching logic.

## Development

### Prerequisites

- node 22.x

- pnpm 10.x

### Running the App

1. From the root of the repo, run `pnpm install` to install all dependencies

2. From the app's directory, run `pnpm run dev` to start the development server

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result
