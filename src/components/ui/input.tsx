import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  notValid?: boolean;
  size?: "small" | "default" | "large";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, notValid = false, size = "default", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-md border bg-white px-3 font-normal transition-all",
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
            "h-8 text-xs": size === "small",
            "h-10 text-sm": size === "default",
            "h-12 text-base": size === "large",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
