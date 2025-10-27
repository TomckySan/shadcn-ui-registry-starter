import * as React from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

/**
 * OutSystems Button Component
 *
 * A button component with OutSystems UI styling including:
 * - Type variants (Primary, Secondary)
 * - Semantic colors (Default, Cancel, Error, Success)
 * - Shape variants (Sharp, Soft, Rounded)
 * - Size variants (Small, Default, Large)
 * - Icon support
 * - Disabled state
 * - asChild support for rendering as a different element
 */

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  /**
   * Button variant
   * @default "primary"
   */
  variant?: "primary" | "secondary";
  /**
   * Semantic color
   * @default "default"
   */
  semantic?: "default" | "cancel" | "error" | "success";
  /**
   * Button shape
   * @default "soft"
   */
  shape?: "sharp" | "soft" | "rounded";
  /**
   * Button size
   * @default "default"
   */
  size?: "small" | "default" | "large";
  /**
   * If true, the button will be rendered as a Slot (allows using as a different element)
   * @default false
   */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      semantic = "default",
      shape = "soft",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 font-medium transition-all",
          "disabled:pointer-events-none disabled:opacity-50",
          "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",

          // Variant styles
          {
            // Primary variants
            "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600":
              variant === "primary" && semantic === "default",
            "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-500":
              variant === "primary" && semantic === "cancel",
            "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600":
              variant === "primary" && semantic === "error",
            "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600":
              variant === "primary" && semantic === "success",

            // Secondary variants
            "border-2 bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600":
              variant === "secondary" && semantic === "default",
            "border-2 bg-transparent border-gray-500 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500":
              variant === "secondary" && semantic === "cancel",
            "border-2 bg-transparent border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-600":
              variant === "secondary" && semantic === "error",
            "border-2 bg-transparent border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-600":
              variant === "secondary" && semantic === "success",
          },

          // Shape styles
          {
            "rounded-none": shape === "sharp",
            "rounded-md": shape === "soft",
            "rounded-full": shape === "rounded",
          },

          // Size styles
          {
            "h-8 px-3 text-xs": size === "small",
            "h-10 px-4 text-sm": size === "default",
            "h-12 px-6 text-base": size === "large",
          },

          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
