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
import { filterLabels } from "@/constants/filters";
import { FilterKey } from "@/lib/types";

interface FilterGroupProps {
  option: FilterKey;
  values: string[];
}

export const FilterGroup = ({ option, values }: FilterGroupProps) => {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <FilterButton>
          {filterLabels[option] ?? "Неизвестный параметр"}
          <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
        </FilterButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <FieldSet>
          <FieldGroup className="overflow-y-auto max-h-50 gap-3 mb-4">
            {Array.from(values).map((value) => (
              <Field key={`${option}-${value}`} orientation="horizontal">
                <Checkbox
                  id={`${option}-${value}`}
                  name={`${option}-${value}`}
                />
                <Label
                  className="font-light text-primary-gray text-sm leading-4.5 cursor-pointer"
                  htmlFor={`${option}-${value}`}
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
