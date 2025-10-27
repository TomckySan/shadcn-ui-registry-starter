import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  notValid?: boolean;
  size?: "small" | "default" | "large";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, notValid = false, size = "default", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-md border bg-white px-3 py-2 font-normal transition-all resize-none",
          "placeholder:text-gray-400",
          "focus:outline-none focus:ring-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Border and focus states
          {
            "border-gray-300 focus:border-blue-500": !notValid,
            "border-red-500 focus:border-red-500": notValid,
          },
          // Size variants
          {
            "min-h-[80px] text-xs": size === "small",
            "min-h-[120px] text-sm": size === "default",
            "min-h-[160px] text-base": size === "large",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
