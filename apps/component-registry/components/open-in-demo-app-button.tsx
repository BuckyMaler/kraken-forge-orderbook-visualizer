import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york/ui/button';

export function OpenInDemoAppButton({
  className,
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      aria-label="Open in Demo App"
      size="sm"
      className={cn(
        'shadow-none bg-black text-white hover:bg-black hover:text-white dark:bg-white dark:text-black',
        className,
      )}
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
