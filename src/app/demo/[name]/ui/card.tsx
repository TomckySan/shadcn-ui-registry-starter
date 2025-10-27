import { Bell, Check, CreditCard, Settings } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardBackground,
  CardBackgroundTitle,
  CardBackgroundDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const card = {
  name: "card",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Card usePadding={true}>
          <p className="text-sm leading-relaxed">
            Take control with a loan made for you. Access your loan information
            whenever you need it, we developed tools to give you freedom to
            focus on the most important things.
          </p>
        </Card>
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
            <Card usePadding={true}>
              <p className="text-sm leading-relaxed">
                Take control with a loan made for you. Access your loan
                information whenever you need it, we developed tools to give
                you freedom to focus on the most important things.
              </p>
            </Card>
          </div>

          {/* Without Padding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">Use Padding: OFF</p>
            </div>
            <Card usePadding={false}>
              <p className="text-sm leading-relaxed p-6">
                Take control with a loan made for you. Access your loan
                information whenever you need it, we developed tools to give
                you freedom to focus on the most important things.
              </p>
            </Card>
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
            <Card variant="default">
              <p className="text-sm leading-relaxed">
                Standard card with subtle shadow for most use cases.
              </p>
            </Card>
          </div>

          {/* Elevated Variant */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Elevated</p>
            <Card variant="elevated">
              <p className="text-sm leading-relaxed">
                Card with stronger shadow for emphasis and hierarchy.
              </p>
            </Card>
          </div>

          {/* Outlined Variant */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Outlined</p>
            <Card variant="outlined">
              <p className="text-sm leading-relaxed">
                Card with border and no shadow for minimal design.
              </p>
            </Card>
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
            <Card hoverable={true}>
              <p className="text-sm leading-relaxed">
                Hover over this card to see the lift effect and enhanced shadow.
              </p>
            </Card>
          </div>

          {/* Non-Hoverable */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Non-Hoverable</p>
            <Card hoverable={false}>
              <p className="text-sm leading-relaxed">
                This card stays static, useful for informational content.
              </p>
            </Card>
          </div>
        </div>
      </div>
    ),

    withContent: (
      <div className="w-full max-w-3xl mx-auto p-8">
        <Card variant="default">
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
              <Button variant="secondary" size="small" className="flex-1">
                Back
              </Button>
              <Button variant="primary" size="small" className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        </Card>
      </div>
    ),

    // Card Background variants
    cardBackground: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <CardBackground
          backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
          color="primary"
          minHeight={250}
        >
          <CardBackgroundTitle>
            Take control with a loan made for you
          </CardBackgroundTitle>
        </CardBackground>
      </div>
    ),

    cardBackgroundColors: (
      <div className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Primary */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Primary Color</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={200}
            >
              <CardBackgroundTitle className="text-xl">
                Primary Overlay
              </CardBackgroundTitle>
              <CardBackgroundDescription>
                Blue overlay for brand consistency
              </CardBackgroundDescription>
            </CardBackground>
          </div>

          {/* Neutral */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Neutral Color</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="neutral"
              minHeight={200}
            >
              <CardBackgroundTitle className="text-xl">
                Neutral Overlay
              </CardBackgroundTitle>
              <CardBackgroundDescription>
                Subtle gray overlay
              </CardBackgroundDescription>
            </CardBackground>
          </div>

          {/* Success */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Success Color</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="success"
              minHeight={200}
            >
              <CardBackgroundTitle className="text-xl">
                Success Overlay
              </CardBackgroundTitle>
              <CardBackgroundDescription>
                Green overlay for positive messages
              </CardBackgroundDescription>
            </CardBackground>
          </div>

          {/* Warning */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Warning Color</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              color="warning"
              minHeight={200}
            >
              <CardBackgroundTitle className="text-xl">
                Warning Overlay
              </CardBackgroundTitle>
              <CardBackgroundDescription>
                Yellow/orange overlay for warnings
              </CardBackgroundDescription>
            </CardBackground>
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
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={200}
            >
              <CardBackgroundTitle className="text-lg">
                Compact
              </CardBackgroundTitle>
            </CardBackground>
          </div>

          {/* 300px */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Min-Height: 300px</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={300}
            >
              <CardBackgroundTitle className="text-lg">
                Medium
              </CardBackgroundTitle>
            </CardBackground>
          </div>

          {/* 400px */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Min-Height: 400px</p>
            <CardBackground
              backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop"
              color="primary"
              minHeight={400}
            >
              <CardBackgroundTitle className="text-lg">
                Large
              </CardBackgroundTitle>
            </CardBackground>
          </div>
        </div>
      </div>
    ),
  },
};
