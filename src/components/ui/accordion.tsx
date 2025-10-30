"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentProps<typeof AccordionPrimitive.Root> & {
    variant?: "default" | "bordered" | "separated";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(
      {
        "rounded-lg border bg-card shadow-sm overflow-hidden": variant === "default" || variant === "bordered",
        "space-y-3": variant === "separated",
      },
      className
    )}
    {...props}
  />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: "default" | "bordered" | "separated";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      {
        "border-t border-t-border first:border-t-0 data-[state=open]:border-t-[3px] data-[state=open]:border-t-primary": variant === "default" || variant === "bordered",
        "rounded-lg border border-t-4 border-t-primary shadow-sm bg-card overflow-hidden": variant === "separated",
      },
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-start justify-between gap-4 px-6 py-4 text-left text-base transition-all bg-card hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:font-bold [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-5 w-5 shrink-0 text-primary transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-card"
    {...props}
  >
    <div className={cn("px-6 pb-5 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
