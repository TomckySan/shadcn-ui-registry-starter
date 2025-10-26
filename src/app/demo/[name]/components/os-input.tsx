import { OSInput } from "@/components/os-input";

export const osInput = {
  name: "os-input",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSInput placeholder="Search" />
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <OSInput size="small" placeholder="Small input" />
          <OSInput size="default" placeholder="Default input" />
          <OSInput size="large" placeholder="Large input" />
        </div>
      </div>
    ),

    states: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Normal</label>
            <OSInput placeholder="Search" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Not Valid (Error)</label>
            <OSInput notValid placeholder="Search" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Disabled</label>
            <OSInput disabled placeholder="Search" />
          </div>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <OSInput placeholder="Email address" />
          <OSInput placeholder="Enter your name" />
          <OSInput placeholder="Search..." />
          <OSInput placeholder="Type here" />
        </div>
      </div>
    ),
  },
};
