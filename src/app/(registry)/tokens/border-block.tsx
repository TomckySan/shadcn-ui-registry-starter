import { cn } from "@/lib/utils";

interface BorderBlockProps {
  name: string;
  className: string;
  type: "radius" | "size";
}

export function BorderBlock({ name, className, type }: BorderBlockProps) {
  // Rounded の場合は長方形にして 100px の角丸が視覚的にわかるようにする
  const isRounded = className.includes("rounded") && !className.includes("circle");

  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <div className="flex items-center justify-between">
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-xs">
          .{className}
        </code>
      </div>
      <div className="flex items-center justify-center py-4">
        <div
          className={cn(
            type === "radius"
              ? isRounded
                ? "w-32 h-20 bg-primary"
                : "size-20 bg-primary"
              : "size-20 bg-background border-solid border-primary",
            className
          )}
        />
      </div>
    </div>
  );
}
