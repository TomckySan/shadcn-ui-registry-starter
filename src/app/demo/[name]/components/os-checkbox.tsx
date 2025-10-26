import { OSCheckbox } from "@/components/os-checkbox";

export const osCheckbox = {
  name: "os-checkbox",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="flex items-center gap-3">
          <OSCheckbox id="default" defaultChecked />
          <label
            htmlFor="default"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    ),

    states: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <OSCheckbox id="checked" defaultChecked />
            <label htmlFor="checked" className="text-sm font-medium">
              Checked
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="unchecked" />
            <label htmlFor="unchecked" className="text-sm font-medium">
              Unchecked
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="disabled" disabled />
            <label htmlFor="disabled" className="text-sm font-medium opacity-50">
              Disabled (Unchecked)
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="disabled-checked" disabled defaultChecked />
            <label htmlFor="disabled-checked" className="text-sm font-medium opacity-50">
              Disabled (Checked)
            </label>
          </div>
        </div>
      </div>
    ),

    group: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-3 max-w-4xl mx-auto">
          <div className="text-sm font-semibold">Select your interests:</div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="sports" />
            <label htmlFor="sports" className="text-sm font-medium">
              Sports
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="music" />
            <label htmlFor="music" className="text-sm font-medium">
              Music
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="technology" defaultChecked />
            <label htmlFor="technology" className="text-sm font-medium">
              Technology
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSCheckbox id="travel" />
            <label htmlFor="travel" className="text-sm font-medium">
              Travel
            </label>
          </div>
        </div>
      </div>
    ),

    withoutLabel: (
      <div className="w-full p-8">
        <div className="flex gap-4 items-center max-w-4xl mx-auto">
          <OSCheckbox />
          <OSCheckbox defaultChecked />
          <OSCheckbox disabled />
        </div>
      </div>
    ),
  },
};
