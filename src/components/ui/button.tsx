"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

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
    const buttonClassName = cn(
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
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: cn(buttonClassName, (children.props as any).className),
        ref,
      } as any);
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
