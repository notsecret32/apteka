import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Field, FieldGroup, FieldSet } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { FilterButton } from "./filter-button";
import { Label } from "./ui/label";

const options = [
  {
    key: "demo1",
    value: "Demo 1",
  },
  {
    key: "demo2",
    value: "Demo 2",
  },
  {
    key: "demo3",
    value: "Demo 3",
  },
];

interface FilterGroupProps {
  title: string;
}

export const FilterGroup = ({ title }: FilterGroupProps) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <FilterButton>
          {title}
          <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
        </FilterButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <FieldSet>
          <FieldGroup className="overflow-y-auto max-h-50 gap-3 mb-4">
            {Array.from(options).map(({ key, value }) => (
              <Field key={`${title}-${value}-${key}`} orientation="horizontal">
                <Checkbox
                  id={`${title}-${value}-${key}`}
                  name={`${title}-${value}-${key}`}
                />
                <Label
                  className="font-light text-primary-gray text-sm leading-4.5 cursor-pointer"
                  htmlFor={`${title}-${value}-${key}`}
                >
                  {value}
                </Label>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </CollapsibleContent>
    </Collapsible>
  );
};
