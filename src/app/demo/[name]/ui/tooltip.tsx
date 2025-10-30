import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const tooltip = {
  name: "tooltip",
  components: {
    Default: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="cursor-pointer">Open Tooltip</span>
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
};
