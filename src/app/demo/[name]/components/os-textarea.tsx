import { OSTextarea } from "@/components/os-textarea";

export const osTextarea = {
  name: "os-textarea",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSTextarea placeholder="Comment" />
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Small</label>
            <OSTextarea size="small" placeholder="Small textarea" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Default</label>
            <OSTextarea size="default" placeholder="Default textarea" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Large</label>
            <OSTextarea size="large" placeholder="Large textarea" />
          </div>
        </div>
      </div>
    ),

    states: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Normal</label>
            <OSTextarea placeholder="Comment" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Not Valid (Error)</label>
            <OSTextarea notValid placeholder="Comment" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Disabled</label>
            <OSTextarea disabled placeholder="Comment" />
          </div>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <OSTextarea placeholder="Enter your comment here..." />
          <OSTextarea placeholder="Describe the issue..." />
          <OSTextarea placeholder="Write your message..." />
        </div>
      </div>
    ),
  },
};
