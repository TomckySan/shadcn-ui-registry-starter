import { Bell, Check, CreditCard, Settings } from "lucide-react";

import {
  OSCard,
  OSCardContent,
  OSCardDescription,
  OSCardFooter,
  OSCardHeader,
  OSCardTitle,
} from "@/components/os-card";
import {
  OSCardBackground,
  OSCardBackgroundTitle,
  OSCardBackgroundDescription,
} from "@/components/os-card-background";
import { Button } from "@/components/ui/button";

export const osCard = {
  name: "os-card",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSCard usePadding={true}>
          <p className="text-sm leading-relaxed">
            Take control with a loan made for you. Access your loan information
            whenever you need it, we developed tools to give you freedom to
            focus on the most important things.
          </p>
        </OSCard>
      </div>
    ),

    paddingComparison: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* With Padding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
              <p className="text-sm font-medium">Use Padding: ON</p>
            </div>
            <OSCard usePadding={true}>
              <p className="text-sm leading-relaxed">
                Take control with a loan made for you. Access your loan
                information whenever you need it, we developed tools to give
                you freedom to focus on the most important things.
              </p>
            </OSCard>
          </div>

          {/* Without Padding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">Use Padding: OFF</p>
            </div>
            <OSCard usePadding={false}>
              <p className="text-sm leading-relaxed p-6">
                Take control with a loan made for you. Access your loan
                information whenever you need it, we developed tools to give
                you freedom to focus on the most important things.
              </p>
            </OSCard>
          </div>
        </div>
      </div>
    ),

    variants: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Default Variant */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Default</p>
            <OSCard variant="default">
              <p className="text-sm leading-relaxed">
                Standard card with subtle shadow for most use cases.
              </p>
            </OSCard>
          </div>

          {/* Elevated Variant */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Elevated</p>
            <OSCard variant="elevated">
              <p className="text-sm leading-relaxed">
                Card with stronger shadow for emphasis and hierarchy.
              </p>
            </OSCard>
          </div>

          {/* Outlined Variant */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Outlined</p>
            <OSCard variant="outlined">
              <p className="text-sm leading-relaxed">
                Card with border and no shadow for minimal design.
              </p>
            </OSCard>
          </div>
        </div>
      </div>
    ),

    nonHoverable: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Hoverable */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Hoverable (default)</p>
            <OSCard hoverable={true}>
              <p className="text-sm leading-relaxed">
                Hover over this card to see the lift effect and enhanced shadow.
              </p>
            </OSCard>
          </div>

          {/* Non-Hoverable */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Non-Hoverable</p>
            <OSCard hoverable={false}>
              <p className="text-sm leading-relaxed">
                This card stays static, useful for informational content.
              </p>
            </OSCard>
          </div>
        </div>
      </div>
    ),

    withContent: (
      <div className="w-full max-w-3xl mx-auto p-8">
        <OSCard variant="default">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Loan Application</h3>
              <p className="text-sm text-muted-foreground">
                Complete your loan application in just a few steps
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  1
                </div>
                <p className="text-sm">Personal Information</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  2
                </div>
                <p className="text-sm">Financial Details</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-muted text-muted-foreground text-sm font-medium">
                  3
                </div>
                <p className="text-sm text-muted-foreground">Review & Submit</p>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <Button variant="outline" size="sm" className="flex-1">
                Back
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        </OSCard>
      </div>
    ),

    // Card Background variants
    cardBackground: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSCardBackground
          backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
          color="primary"
          minHeight={250}
        >
          <OSCardBackgroundTitle>
            Take control with a loan made for you
          </OSCardBackgroundTitle>
        </OSCardBackground>
      </div>
    ),

    cardBackgroundColors: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Primary */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Primary Color</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={200}
            >
              <OSCardBackgroundTitle className="text-xl">
                Primary Overlay
              </OSCardBackgroundTitle>
              <OSCardBackgroundDescription>
                Blue overlay for brand consistency
              </OSCardBackgroundDescription>
            </OSCardBackground>
          </div>

          {/* Neutral */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Neutral Color</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="neutral"
              minHeight={200}
            >
              <OSCardBackgroundTitle className="text-xl">
                Neutral Overlay
              </OSCardBackgroundTitle>
              <OSCardBackgroundDescription>
                Subtle gray overlay
              </OSCardBackgroundDescription>
            </OSCardBackground>
          </div>

          {/* Success */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Success Color</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="success"
              minHeight={200}
            >
              <OSCardBackgroundTitle className="text-xl">
                Success Overlay
              </OSCardBackgroundTitle>
              <OSCardBackgroundDescription>
                Green overlay for positive messages
              </OSCardBackgroundDescription>
            </OSCardBackground>
          </div>

          {/* Warning */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Warning Color</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="warning"
              minHeight={200}
            >
              <OSCardBackgroundTitle className="text-xl">
                Warning Overlay
              </OSCardBackgroundTitle>
              <OSCardBackgroundDescription>
                Yellow/orange overlay for warnings
              </OSCardBackgroundDescription>
            </OSCardBackground>
          </div>
        </div>
      </div>
    ),

    cardBackgroundHeights: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 200px */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Min-Height: 200px</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={200}
            >
              <OSCardBackgroundTitle className="text-lg">
                Compact
              </OSCardBackgroundTitle>
            </OSCardBackground>
          </div>

          {/* 300px */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Min-Height: 300px</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={300}
            >
              <OSCardBackgroundTitle className="text-lg">
                Medium
              </OSCardBackgroundTitle>
            </OSCardBackground>
          </div>

          {/* 400px */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Min-Height: 400px</p>
            <OSCardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={400}
            >
              <OSCardBackgroundTitle className="text-lg">
                Large
              </OSCardBackgroundTitle>
            </OSCardBackground>
          </div>
        </div>
      </div>
    ),
  },
};
