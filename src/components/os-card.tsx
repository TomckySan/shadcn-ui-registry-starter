import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OutSystems Card Component
 *
 * A card component with OutSystems UI styling including:
 * - Enhanced shadows
 * - Smooth hover effects
 * - Rounded corners
 * - Flexible layout options
 */

export interface OSCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   * @default "default"
   */
  variant?: "default" | "elevated" | "outlined";
  /**
   * Enable hover effect
   * @default true
   */
  hoverable?: boolean;
  /**
   * Enable padding
   * @default true
   */
  usePadding?: boolean;
}

const OSCard = React.forwardRef<HTMLDivElement, OSCardProps>(
  ({ className, variant = "default", hoverable = true, usePadding = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground transition-all duration-200",
          {
            // Default variant with subtle shadow
            "shadow-sm": variant === "default",
            // Elevated variant with stronger shadow
            "shadow-md": variant === "elevated",
            // Outlined variant with border only
            "shadow-none border-2": variant === "outlined",
            // Hover effect
            "hover:shadow-lg hover:-translate-y-0.5": hoverable,
            // Padding
            "p-6": usePadding,
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
OSCard.displayName = "OSCard";

const OSCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
OSCardHeader.displayName = "OSCardHeader";

const OSCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
OSCardTitle.displayName = "OSCardTitle";

const OSCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
OSCardDescription.displayName = "OSCardDescription";

const OSCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
OSCardContent.displayName = "OSCardContent";

const OSCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
OSCardFooter.displayName = "OSCardFooter";

export {
  OSCard,
  OSCardHeader,
  OSCardFooter,
  OSCardTitle,
  OSCardDescription,
  OSCardContent,
};
