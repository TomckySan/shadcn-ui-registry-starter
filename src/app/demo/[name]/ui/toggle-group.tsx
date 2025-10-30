import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const toggleGroup = {
  name: "toggle-group",
  components: {
    Default: (
      <ToggleGroup type="single" defaultValue="all" variant="outline">
        <ToggleGroupItem value="all" aria-label="Show all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="active" aria-label="Show active">
          Active
        </ToggleGroupItem>
        <ToggleGroupItem value="disabled" aria-label="Show disabled">
          Disabled
        </ToggleGroupItem>
      </ToggleGroup>
    ),
  },
};
