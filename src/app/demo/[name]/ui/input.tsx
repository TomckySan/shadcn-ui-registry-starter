import { Input } from "@/components/ui/input";

export const input = {
  name: "input",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Input placeholder="Search" />
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <Input size="small" placeholder="Small input" />
          <Input size="default" placeholder="Default input" />
          <Input size="large" placeholder="Large input" />
        </div>
      </div>
    ),

    states: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Normal</label>
            <Input placeholder="Search" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Not Valid (Error)</label>
            <Input notValid placeholder="Search" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Disabled</label>
            <Input disabled placeholder="Search" />
          </div>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <Input placeholder="Email address" />
          <Input placeholder="Enter your name" />
          <Input placeholder="Search..." />
          <Input placeholder="Type here" />
        </div>
      </div>
    ),
  },
};
