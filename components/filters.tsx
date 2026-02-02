"use client";

import { useFilters } from "@/hooks/use-filters";
import { FilterParamKey, FilterParams } from "@/lib/types";

import { FilterGroup } from "./filter-group";
import { Button } from "./ui/button";

interface FiltersProps {
  filters: FilterParams;
}

export const Filters = ({ filters }: FiltersProps) => {
  const { resetFilters } = useFilters();

  return (
    <div className="flex w-full flex-col bg-white rounded-3xl p-3 h-fit max-xl:hidden px-3">
      {Object.entries(filters).map(([param, values]) => (
        <FilterGroup
          key={param}
          param={param as FilterParamKey}
          values={values}
        />
      ))}
      <div className="sticky bottom-0 left-0 right-0 flex bg-white pb-3 pt-6.25 px-3 rounded-b-2xl z-1">
        <Button
          className="cursor-pointer hover:bg-primary-foreground w-full"
          variant="secondary"
          onClick={resetFilters}
        >
          Сбросить все
        </Button>
      </div>
    </div>
  );
};
