import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";

export const radio = {
  name: "radio",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <RadioGroup defaultValue="all">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="all" id="all" />
            <label htmlFor="all" className="text-sm font-medium cursor-pointer">
              All
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="active" id="active" />
            <label htmlFor="active" className="text-sm font-medium cursor-pointer">
              Active
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="disabled" id="disabled-option" />
            <label htmlFor="disabled-option" className="text-sm font-medium cursor-pointer">
              Disabled
            </label>
          </div>
        </RadioGroup>
      </div>
    ),

    disabled: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="text-sm font-semibold">Disabled State:</div>
          <RadioGroup defaultValue="all" disabled>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="all" id="disabled-all" />
              <label htmlFor="disabled-all" className="text-sm font-medium cursor-not-allowed opacity-50">
                All
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="active" id="disabled-active" />
              <label htmlFor="disabled-active" className="text-sm font-medium cursor-not-allowed opacity-50">
                Active
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="disabled" id="disabled-disabled" />
              <label htmlFor="disabled-disabled" className="text-sm font-medium cursor-not-allowed opacity-50">
                Disabled
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    ),

    options: (
      <div className="w-full p-8">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div className="text-sm font-semibold">Select a payment method:</div>
          <RadioGroup defaultValue="card">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="card" id="card" />
              <label htmlFor="card" className="text-sm font-medium cursor-pointer">
                Credit Card
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="paypal" id="paypal" />
              <label htmlFor="paypal" className="text-sm font-medium cursor-pointer">
                PayPal
              </label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="bank" id="bank" />
              <label htmlFor="bank" className="text-sm font-medium cursor-pointer">
                Bank Transfer
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
    ),

    withoutLabel: (
      <div className="w-full p-8">
        <RadioGroup defaultValue="option1" className="flex gap-4">
          <RadioGroupItem value="option1" />
          <RadioGroupItem value="option2" />
          <RadioGroupItem value="option3" />
        </RadioGroup>
      </div>
    ),
  },
};
