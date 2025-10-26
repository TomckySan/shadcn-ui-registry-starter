import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * OutSystems Timeline Component
 *
 * A vertical timeline component for displaying chronological events
 * with OutSystems UI styling
 */

export interface TimelineItem {
  /**
   * Timeline item title
   */
  title: string;
  /**
   * Timeline item description
   */
  description?: string;
  /**
   * Timeline item date/time
   */
  date?: string;
  /**
   * Icon to display (optional)
   */
  icon?: React.ReactNode;
  /**
   * Custom color for the dot
   */
  dotColor?: string;
}

export interface OSTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Timeline items
   */
  items: TimelineItem[];
  /**
   * Connector line color
   * @default "border"
   */
  lineColor?: string;
}

const OSTimeline = React.forwardRef<HTMLDivElement, OSTimelineProps>(
  ({ className, items, lineColor = "border", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative space-y-6", className)} {...props}>
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Connector line */}
            {index < items.length - 1 && (
              <div
                className={cn(
                  "absolute left-4 top-10 h-full w-0.5 -translate-x-1/2",
                  `bg-${lineColor}`
                )}
                style={{
                  backgroundColor:
                    lineColor === "border"
                      ? "hsl(var(--border))"
                      : lineColor,
                }}
              />
            )}

            {/* Icon/Dot */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
              {item.icon ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {item.icon}
                </div>
              ) : (
                <div
                  className="h-3 w-3 rounded-full ring-4 ring-background"
                  style={{
                    backgroundColor: item.dotColor || "hsl(var(--primary))",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1 pb-6">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold leading-none">{item.title}</h4>
                {item.date && (
                  <time className="text-sm text-muted-foreground">
                    {item.date}
                  </time>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);
OSTimeline.displayName = "OSTimeline";

export { OSTimeline };
