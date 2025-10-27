import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const select = {
  name: "select",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Select defaultValue="patricia">
          <SelectTrigger className="w-full max-w-md">
            <SelectValue placeholder="Select a person" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="patricia">Patricia Wesley</SelectItem>
            <SelectItem value="edward">Edward Williams</SelectItem>
            <SelectItem value="andreea">Andreea Mccarthy</SelectItem>
            <SelectItem value="ann">Ann Olivarria</SelectItem>
            <SelectItem value="bridget">Bridget Hernandez</SelectItem>
            <SelectItem value="carla">Carla Hansen</SelectItem>
            <SelectItem value="charlotte">Charlotte Anderson</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),

    withLabel: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select a person</label>
          <Select defaultValue="patricia">
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Select a person" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patricia">Patricia Wesley</SelectItem>
              <SelectItem value="edward">Edward Williams</SelectItem>
              <SelectItem value="andreea">Andreea Mccarthy</SelectItem>
              <SelectItem value="ann">Ann Olivarria</SelectItem>
              <SelectItem value="bridget">Bridget Hernandez</SelectItem>
              <SelectItem value="carla">Carla Hansen</SelectItem>
              <SelectItem value="charlotte">Charlotte Anderson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    ),

    disabled: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-2">
          <label className="text-sm font-medium">Disabled Select</label>
          <Select defaultValue="patricia" disabled>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Select a person" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="patricia">Patricia Wesley</SelectItem>
              <SelectItem value="edward">Edward Williams</SelectItem>
              <SelectItem value="andreea">Andreea Mccarthy</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-4">
          <Select>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Choose an option..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="Select a country..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    ),
  },
};
