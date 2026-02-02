"use client";

import { ChevronDown } from "lucide-react";

import { filterLabels } from "@/constants/labels";
import { FilterParamKey } from "@/lib/types";
import { useFilters } from "@/hooks/use-filters";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Field, FieldGroup, FieldSet } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { FilterButton } from "./filter-button";
import { Label } from "./ui/label";

interface FilterGroupProps {
  param: FilterParamKey;
  values: string[];
}

export const FilterGroup = ({ param, values }: FilterGroupProps) => {
  const { filters, toggleFilter } = useFilters();

  const handleCheckboxChange = (value: string) => {
    toggleFilter(param, value);
  };

  const isChecked = (value: string) => (filters[param] || []).includes(value);

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <FilterButton>
          {filterLabels[param] ?? "Неизвестный параметр"}
          <ChevronDown className="ml-auto group-data-[state=open]:rotate-180" />
        </FilterButton>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <FieldSet>
          <FieldGroup className="overflow-y-auto max-h-50 gap-3 mb-4">
            {values.map((value) => (
              <Field key={`${param}-${value}`} orientation="horizontal">
                <Checkbox
                  id={`${param}-${value}`}
                  name={`${param}-${value}`}
                  checked={isChecked(value)}
                  onCheckedChange={() => handleCheckboxChange(value)}
                />
                <Label
                  className="font-light text-primary-gray text-sm leading-4.5 cursor-pointer"
                  htmlFor={`${param}-${value}`}
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
