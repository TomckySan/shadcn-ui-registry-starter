import { cn } from "@/lib/utils";

interface SpacingBlockProps {
  name: string;
  size: string;
}

export function SpacingBlock({ name, size }: SpacingBlockProps) {
  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-xs">
          --space-{size}
        </code>
      </div>
      <div className="flex items-center py-2">
        <div className={cn("bg-primary", `padding-${size}`)}>
          <div className="h-8 bg-muted"></div>
        </div>
      </div>
    </div>
  );
}
