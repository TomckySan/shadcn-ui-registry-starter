import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const accordion = {
  name: "accordion",
  components: {
    default: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Accordion type="single" collapsible variant="bordered">
          <AccordionItem value="item-1" variant="bordered">
            <AccordionTrigger>
              I noticed some erratic behavior from my screen
            </AccordionTrigger>
            <AccordionContent>
              Screens are great assets for anyone working in an office set up.
              They allow you to have more programs open, multitask and be more
              productive. Hopefully
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" variant="bordered">
            <AccordionTrigger>
              Some of my keyboard keys are not working properly
            </AccordionTrigger>
            <AccordionContent>
              After a while, it's common for keyboards to start malfunctioning.
              We have the habit of pressing the same keys which causes stress
              on their mechanics leading to problems.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" variant="bordered">
            <AccordionTrigger>
              I need a new mouse, the left-click is not working
            </AccordionTrigger>
            <AccordionContent>
              Mice are incredible accelerators that ease navigation and access.
              They easily become overused, with all the clicking, dragging and
              scrolling, which means their life can be short.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),

    multiple: (
      <div className="w-full max-w-2xl mx-auto p-8">
        <Accordion type="multiple" variant="bordered">
          <AccordionItem value="item-1" variant="bordered">
            <AccordionTrigger>
              Can I open multiple items at once?
            </AccordionTrigger>
            <AccordionContent>
              Yes! When using type="multiple", you can have multiple accordion
              items open at the same time. This is useful for comparing
              information across different sections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" variant="bordered">
            <AccordionTrigger>
              What is the difference from single mode?
            </AccordionTrigger>
            <AccordionContent>
              In single mode, only one item can be open at a time. Opening a new
              item will automatically close the previously opened item. In
              multiple mode, all items can be opened simultaneously.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" variant="bordered">
            <AccordionTrigger>
              When should I use multiple mode?
            </AccordionTrigger>
            <AccordionContent>
              Use multiple mode when users need to compare information across
              different sections, or when each section contains independent
              information that might be relevant at the same time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  },
};
