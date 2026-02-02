"use client";

import { FilterKey, FilterOptions } from "@/lib/types";
import { useFilter } from "@/hooks/use-filter";

import { FilterGroup } from "./filter-group";
import { Button } from "./ui/button";

interface FiltersProps {
  filters: FilterOptions;
}

export const Filters = ({ filters }: FiltersProps) => {
  const [_, setQuery] = useFilter();

  const handleReset = () => {
    setQuery({
      brand: [],
      country: [],
      dossage: [],
      releaseForm: [],
      storageTemperature: [],
      quantityPerPackage: [],
      expirationDate: [],
      isByPrescription: [],
      manufacturer: [],
    });
  };

  return (
    <div className="flex w-full flex-col bg-white rounded-3xl p-3 h-fit max-xl:hidden px-3">
      {Object.entries(filters).map(([option, values]) => (
        <FilterGroup
          key={option}
          option={option as FilterKey}
          values={values}
        />
      ))}
      <Button className="mt-2" variant="secondary" onClick={handleReset}>
        Сбросить все
      </Button>
    </div>
  );
};
