import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        error: "background-error text-white border-error [&>svg]:text-white *:data-[slot=alert-description]:text-white/90",
        info: "background-info text-white border-info [&>svg]:text-white *:data-[slot=alert-description]:text-white/90",
        success: "background-success text-white border-success [&>svg]:text-white *:data-[slot=alert-description]:text-white/90",
        warning: "background-warning text-black [&>svg]:text-black *:data-[slot=alert-description]:text-black/90",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const variantIcons = {
  error: AlertCircle,
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
} as const;

function Alert({
  className,
  variant = "info",
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const Icon = variantIcons[variant as keyof typeof variantIcons];

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {Icon && <Icon className="size-4" />}
      {children}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
