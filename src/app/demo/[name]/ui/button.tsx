import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const button = {
  name: "button",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Button>Button</Button>
      </div>
    ),

    primary: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <Button variant="primary" semantic="default">
            Primary Default
          </Button>
          <Button variant="primary" semantic="cancel">
            Primary Cancel
          </Button>
          <Button variant="primary" semantic="error">
            Primary Error
          </Button>
          <Button variant="primary" semantic="success">
            Primary Success
          </Button>
        </div>
      </div>
    ),

    secondary: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <Button variant="secondary" semantic="default">
            Secondary Default
          </Button>
          <Button variant="secondary" semantic="cancel">
            Secondary Cancel
          </Button>
          <Button variant="secondary" semantic="error">
            Secondary Error
          </Button>
          <Button variant="secondary" semantic="success">
            Secondary Success
          </Button>
        </div>
      </div>
    ),

    shapes: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <Button shape="sharp">Sharp</Button>
          <Button shape="soft">Soft</Button>
          <Button shape="rounded">Rounded</Button>
        </div>
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 items-center max-w-4xl mx-auto">
          <Button size="small">Small</Button>
          <Button size="default">Default</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
    ),

    withIcon: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <Button>
            <Check className="size-4" />
            With Icon
          </Button>
          <Button variant="secondary">
            <Check className="size-4" />
            Secondary Icon
          </Button>
        </div>
      </div>
    ),

    disabled: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <Button disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>
            Disabled Secondary
          </Button>
        </div>
      </div>
    ),
  },
};
