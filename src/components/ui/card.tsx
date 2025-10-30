import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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

const Card = React.forwardRef<HTMLDivElement, CardProps>(
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
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
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
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

/**
 * Card Background Component
 *
 * A card component with background image support and color overlays.
 * Similar to a Card but allows to define a background image that blends with the content.
 */

export interface CardBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Background image URL
   */
  backgroundImage?: string;
  /**
   * Color overlay
   * @default "primary"
   */
  color?: "primary" | "neutral" | "success" | "warning" | "danger";
  /**
   * Minimum height in pixels
   * @default 250
   */
  minHeight?: number;
  /**
   * Overlay opacity (0-1)
   * @default 0.7
   */
  overlayOpacity?: number;
  /**
   * Text color
   * @default "white"
   */
  textColor?: "white" | "dark";
}

const CardBackground = React.forwardRef<HTMLDivElement, CardBackgroundProps>(
  (
    {
      className,
      backgroundImage,
      color = "primary",
      minHeight = 250,
      overlayOpacity = 0.7,
      textColor = "white",
      children,
      style,
      ...props
    },
    ref
  ) => {
    const overlayColors = {
      primary: "hsl(var(--primary))",
      neutral: "hsl(var(--muted))",
      success: "oklch(0.55 0.15 145)",
      warning: "oklch(0.65 0.15 85)",
      danger: "oklch(0.55 0.19 27)",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg border shadow-sm",
          {
            "text-white": textColor === "white",
            "text-foreground": textColor === "dark",
          },
          className
        )}
        style={{
          minHeight: `${minHeight}px`,
          ...style,
        }}
        {...props}
      >
        {/* Background Image */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}

        {/* Color Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColors[color],
            opacity: overlayOpacity,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-full flex-col justify-center p-6">
          {children}
        </div>
      </div>
    );
  }
);
CardBackground.displayName = "CardBackground";

const CardBackgroundTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-tight tracking-tight", className)}
    {...props}
  />
));
CardBackgroundTitle.displayName = "CardBackgroundTitle";

const CardBackgroundDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-2 text-sm opacity-90", className)}
    {...props}
  />
));
CardBackgroundDescription.displayName = "CardBackgroundDescription";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBackground,
  CardBackgroundTitle,
  CardBackgroundDescription,
};
