import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OutSystems Card Background Component
 *
 * A card component with background image support and color overlays.
 * Similar to a Card but allows to define a background image that blends with the content.
 */

export interface OSCardBackgroundProps
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

const OSCardBackground = React.forwardRef<HTMLDivElement, OSCardBackgroundProps>(
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
OSCardBackground.displayName = "OSCardBackground";

const OSCardBackgroundTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-bold leading-tight tracking-tight", className)}
    {...props}
  />
));
OSCardBackgroundTitle.displayName = "OSCardBackgroundTitle";

const OSCardBackgroundDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-2 text-sm opacity-90", className)}
    {...props}
  />
));
OSCardBackgroundDescription.displayName = "OSCardBackgroundDescription";

export {
  OSCardBackground,
  OSCardBackgroundTitle,
  OSCardBackgroundDescription,
};
