# Kraken Forge Component Registry

[https://kraken-forge-component-registry.vercel.app](https://kraken-forge-component-registry.vercel.app)

https://github.com/user-attachments/assets/f93d79c5-23ac-4e50-8216-64aacfae78e8

## About

This is a custom component registry for distributing a reusable order book component using [shadcn](https://ui.shadcn.com/docs/registry).

- 🎨 Maximum flexibility through component composition, `className` props, and direct access to component code
- 📱 Mobile-first design using container queries
- 🌙 Dark mode support because it's not production ready without it
- 🤖 AI ready - with direct access to the code LLMs can read, understand, and even improve your components
- 🚀 Easily install components in your project with a single CLI command

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
