import {
  OSSelect,
  OSSelectContent,
  OSSelectItem,
  OSSelectTrigger,
  OSSelectValue,
} from "@/components/os-select";

export const osSelect = {
  name: "os-select",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSSelect defaultValue="patricia">
          <OSSelectTrigger className="w-full max-w-md">
            <OSSelectValue placeholder="Select a person" />
          </OSSelectTrigger>
          <OSSelectContent>
            <OSSelectItem value="patricia">Patricia Wesley</OSSelectItem>
            <OSSelectItem value="edward">Edward Williams</OSSelectItem>
            <OSSelectItem value="andreea">Andreea Mccarthy</OSSelectItem>
            <OSSelectItem value="ann">Ann Olivarria</OSSelectItem>
            <OSSelectItem value="bridget">Bridget Hernandez</OSSelectItem>
            <OSSelectItem value="carla">Carla Hansen</OSSelectItem>
            <OSSelectItem value="charlotte">Charlotte Anderson</OSSelectItem>
          </OSSelectContent>
        </OSSelect>
      </div>
    ),

    withLabel: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select a person</label>
          <OSSelect defaultValue="patricia">
            <OSSelectTrigger className="w-full max-w-md">
              <OSSelectValue placeholder="Select a person" />
            </OSSelectTrigger>
            <OSSelectContent>
              <OSSelectItem value="patricia">Patricia Wesley</OSSelectItem>
              <OSSelectItem value="edward">Edward Williams</OSSelectItem>
              <OSSelectItem value="andreea">Andreea Mccarthy</OSSelectItem>
              <OSSelectItem value="ann">Ann Olivarria</OSSelectItem>
              <OSSelectItem value="bridget">Bridget Hernandez</OSSelectItem>
              <OSSelectItem value="carla">Carla Hansen</OSSelectItem>
              <OSSelectItem value="charlotte">Charlotte Anderson</OSSelectItem>
            </OSSelectContent>
          </OSSelect>
        </div>
      </div>
    ),

    disabled: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-2">
          <label className="text-sm font-medium">Disabled Select</label>
          <OSSelect defaultValue="patricia" disabled>
            <OSSelectTrigger className="w-full max-w-md">
              <OSSelectValue placeholder="Select a person" />
            </OSSelectTrigger>
            <OSSelectContent>
              <OSSelectItem value="patricia">Patricia Wesley</OSSelectItem>
              <OSSelectItem value="edward">Edward Williams</OSSelectItem>
              <OSSelectItem value="andreea">Andreea Mccarthy</OSSelectItem>
            </OSSelectContent>
          </OSSelect>
        </div>
      </div>
    ),

    placeholder: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <div className="space-y-4">
          <OSSelect>
            <OSSelectTrigger className="w-full max-w-md">
              <OSSelectValue placeholder="Choose an option..." />
            </OSSelectTrigger>
            <OSSelectContent>
              <OSSelectItem value="option1">Option 1</OSSelectItem>
              <OSSelectItem value="option2">Option 2</OSSelectItem>
              <OSSelectItem value="option3">Option 3</OSSelectItem>
            </OSSelectContent>
          </OSSelect>

          <OSSelect>
            <OSSelectTrigger className="w-full max-w-md">
              <OSSelectValue placeholder="Select a country..." />
            </OSSelectTrigger>
            <OSSelectContent>
              <OSSelectItem value="us">United States</OSSelectItem>
              <OSSelectItem value="uk">United Kingdom</OSSelectItem>
              <OSSelectItem value="ca">Canada</OSSelectItem>
            </OSSelectContent>
          </OSSelect>
        </div>
      </div>
    ),
  },
};
