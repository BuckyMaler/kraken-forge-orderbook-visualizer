import { Button } from '@/registry/new-york/ui/button';

export function OpenInDemoAppButton({
  className,
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      aria-label="Open in Demo App"
      size="sm"
      className={className}
      asChild
    >
      <a
        href="https://kraken-forge-demo-app.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Open in Demo App
      </a>
    </Button>
  );
}
