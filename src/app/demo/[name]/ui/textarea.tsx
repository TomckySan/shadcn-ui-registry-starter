import { Textarea } from "@/components/ui/textarea";

export const textarea = {
  name: "textarea",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Textarea placeholder="Comment" />
      </div>
    ),

    sizes: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Small</label>
            <Textarea size="small" placeholder="Small textarea" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Default</label>
            <Textarea size="default" placeholder="Default textarea" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Large</label>
            <Textarea size="large" placeholder="Large textarea" />
          </div>
        </div>
      </div>
    ),

    states: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block mb-2 text-sm font-medium">Normal</label>
            <Textarea placeholder="Comment" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Not Valid (Error)</label>
            <Textarea notValid placeholder="Comment" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Disabled</label>
            <Textarea disabled placeholder="Comment" />
          </div>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <Textarea placeholder="Enter your comment here..." />
          <Textarea placeholder="Describe the issue..." />
          <Textarea placeholder="Write your message..." />
        </div>
      </div>
    ),
  },
};
