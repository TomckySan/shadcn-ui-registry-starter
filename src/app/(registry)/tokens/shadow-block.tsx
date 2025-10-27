import { cn } from "@/lib/utils";

interface ShadowBlockProps {
  name: string;
  className: string;
}

export function ShadowBlock({ name, className }: ShadowBlockProps) {
  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-xs">
          .{className}
        </code>
      </div>
      <div className="flex items-center justify-center py-4">
        <div className={cn("size-20 rounded bg-background", className)} />
      </div>
    </div>
  );
}
