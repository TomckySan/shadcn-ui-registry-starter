import { OSRadioGroup, OSRadioGroupItem } from "@/components/os-radio";

export const osRadio = {
  name: "os-radio",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSRadioGroup defaultValue="all">
          <div className="flex items-center gap-3">
            <OSRadioGroupItem value="all" id="all" />
            <label htmlFor="all" className="text-sm font-medium cursor-pointer">
              All
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSRadioGroupItem value="active" id="active" />
            <label htmlFor="active" className="text-sm font-medium cursor-pointer">
              Active
            </label>
          </div>
          <div className="flex items-center gap-3">
            <OSRadioGroupItem value="disabled" id="disabled-option" />
            <label htmlFor="disabled-option" className="text-sm font-medium cursor-pointer">
              Disabled
            </label>
          </div>
        </OSRadioGroup>
      </div>
    ),

    disabled: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="text-sm font-semibold">Disabled State:</div>
          <OSRadioGroup defaultValue="all" disabled>
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="all" id="disabled-all" />
              <label htmlFor="disabled-all" className="text-sm font-medium cursor-not-allowed opacity-50">
                All
              </label>
            </div>
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="active" id="disabled-active" />
              <label htmlFor="disabled-active" className="text-sm font-medium cursor-not-allowed opacity-50">
                Active
              </label>
            </div>
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="disabled" id="disabled-disabled" />
              <label htmlFor="disabled-disabled" className="text-sm font-medium cursor-not-allowed opacity-50">
                Disabled
              </label>
            </div>
          </OSRadioGroup>
        </div>
      </div>
    ),

    options: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="text-sm font-semibold">Select a payment method:</div>
          <OSRadioGroup defaultValue="card">
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="card" id="card" />
              <label htmlFor="card" className="text-sm font-medium cursor-pointer">
                Credit Card
              </label>
            </div>
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="paypal" id="paypal" />
              <label htmlFor="paypal" className="text-sm font-medium cursor-pointer">
                PayPal
              </label>
            </div>
            <div className="flex items-center gap-3">
              <OSRadioGroupItem value="bank" id="bank" />
              <label htmlFor="bank" className="text-sm font-medium cursor-pointer">
                Bank Transfer
              </label>
            </div>
          </OSRadioGroup>
        </div>
      </div>
    ),

    withoutLabel: (
      <div className="w-full p-8">
        <OSRadioGroup defaultValue="option1" className="flex gap-4">
          <OSRadioGroupItem value="option1" />
          <OSRadioGroupItem value="option2" />
          <OSRadioGroupItem value="option3" />
        </OSRadioGroup>
      </div>
    ),
  },
};
