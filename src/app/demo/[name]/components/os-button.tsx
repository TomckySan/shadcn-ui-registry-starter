import { OSButton } from "@/components/os-button";
import { Check } from "lucide-react";

export const osButton = {
  name: "os-button",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSButton>Button</OSButton>
      </div>
    ),

    primary: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <OSButton variant="primary" semantic="default">
            Primary Default
          </OSButton>
          <OSButton variant="primary" semantic="cancel">
            Primary Cancel
          </OSButton>
          <OSButton variant="primary" semantic="error">
            Primary Error
          </OSButton>
          <OSButton variant="primary" semantic="success">
            Primary Success
          </OSButton>
        </div>
      </div>
    ),

    secondary: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <OSButton variant="secondary" semantic="default">
            Secondary Default
          </OSButton>
          <OSButton variant="secondary" semantic="cancel">
            Secondary Cancel
          </OSButton>
          <OSButton variant="secondary" semantic="error">
            Secondary Error
          </OSButton>
          <OSButton variant="secondary" semantic="success">
            Secondary Success
          </OSButton>
        </div>
      </div>
    ),

    shapes: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <OSButton shape="sharp">Sharp</OSButton>
          <OSButton shape="soft">Soft</OSButton>
          <OSButton shape="rounded">Rounded</OSButton>
        </div>
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 items-center max-w-4xl mx-auto">
          <OSButton size="small">Small</OSButton>
          <OSButton size="default">Default</OSButton>
          <OSButton size="large">Large</OSButton>
        </div>
      </div>
    ),

    withIcon: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <OSButton>
            <Check className="size-4" />
            With Icon
          </OSButton>
          <OSButton variant="secondary">
            <Check className="size-4" />
            Secondary Icon
          </OSButton>
        </div>
      </div>
    ),

    disabled: (
      <div className="w-full p-8">
        <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
          <OSButton disabled>Disabled Primary</OSButton>
          <OSButton variant="secondary" disabled>
            Disabled Secondary
          </OSButton>
        </div>
      </div>
    ),
  },
};
