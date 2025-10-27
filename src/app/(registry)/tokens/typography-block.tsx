import { cn } from "@/lib/utils";

interface TypographyBlockProps {
  name: string;
  className: string;
  type?: "size" | "weight";
}

export function TypographyBlock({
  name,
  className,
  type = "size",
}: TypographyBlockProps) {
  const variableName = className.startsWith("font-")
    ? className
    : `font-${className}`;

  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-xs">
          .{className}
        </code>
      </div>
      <p className={cn(className, "text-foreground")}>
        {type === "size"
          ? "The quick brown fox jumps over the lazy dog"
          : "Typography with different font weights"}
      </p>
    </div>
  );
}
