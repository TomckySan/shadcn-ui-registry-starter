import {
  OSAccordion,
  OSAccordionContent,
  OSAccordionItem,
  OSAccordionTrigger,
} from "@/components/os-accordion";

export const osAccordion = {
  name: "os-accordion",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSAccordion type="single" collapsible variant="bordered">
          <OSAccordionItem value="item-1" variant="bordered">
            <OSAccordionTrigger>
              I noticed some erratic behavior from my screen
            </OSAccordionTrigger>
            <OSAccordionContent>
              Screens are great assets for anyone working in an office set up.
              They allow you to have more programs open, multitask and be more
              productive. Hopefully
            </OSAccordionContent>
          </OSAccordionItem>
          <OSAccordionItem value="item-2" variant="bordered">
            <OSAccordionTrigger>
              Some of my keyboard keys are not working properly
            </OSAccordionTrigger>
            <OSAccordionContent>
              After a while, it's common for keyboards to start malfunctioning.
              We have the habit of pressing the same keys which causes stress
              on their mechanics leading to problems.
            </OSAccordionContent>
          </OSAccordionItem>
          <OSAccordionItem value="item-3" variant="bordered">
            <OSAccordionTrigger>
              I need a new mouse, the left-click is not working
            </OSAccordionTrigger>
            <OSAccordionContent>
              Mice are incredible accelerators that ease navigation and access.
              They easily become overused, with all the clicking, dragging and
              scrolling, which means their life can be short.
            </OSAccordionContent>
          </OSAccordionItem>
        </OSAccordion>
      </div>
    ),

    multiple: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <OSAccordion type="multiple" variant="bordered">
          <OSAccordionItem value="item-1" variant="bordered">
            <OSAccordionTrigger>
              Can I open multiple items at once?
            </OSAccordionTrigger>
            <OSAccordionContent>
              Yes! When using type="multiple", you can have multiple accordion
              items open at the same time. This is useful for comparing
              information across different sections.
            </OSAccordionContent>
          </OSAccordionItem>
          <OSAccordionItem value="item-2" variant="bordered">
            <OSAccordionTrigger>
              What is the difference from single mode?
            </OSAccordionTrigger>
            <OSAccordionContent>
              In single mode, only one item can be open at a time. Opening a new
              item will automatically close the previously opened item. In
              multiple mode, all items can be opened simultaneously.
            </OSAccordionContent>
          </OSAccordionItem>
          <OSAccordionItem value="item-3" variant="bordered">
            <OSAccordionTrigger>
              When should I use multiple mode?
            </OSAccordionTrigger>
            <OSAccordionContent>
              Use multiple mode when users need to compare information across
              different sections, or when each section contains independent
              information that might be relevant at the same time.
            </OSAccordionContent>
          </OSAccordionItem>
        </OSAccordion>
      </div>
    ),
  },
};
