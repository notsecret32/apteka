"use client";

import { filterLabels } from "@/constants/labels";
import { FilterParamKey } from "@/lib/types";
import { useFilters } from "@/hooks/use-filters";

import { Chips } from "./chips";

export const FilterChips = () => {
  const { filters, toggleFilter, resetFilters } = useFilters();

  const activeFilters = Object.entries(filters)
    .flatMap(([param, values]) =>
      (values || []).map((value) => ({
        param: param as FilterParamKey,
        value: value as string,
        label: filterLabels[param as FilterParamKey] || param,
      })),
    )
    .filter((item) => item.value.trim() !== "");

  // Если нет активных фильтров - не показываем чипсы
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="mr-4 flex items-center flex-wrap flex-1 gap-2">
      <Chips
        onClick={resetFilters}
        className="hover:bg-red-50 hover:text-red-600"
      >
        Очистить
      </Chips>

      {activeFilters.map(({ param, value, label }) => (
        <Chips
          key={`${param}-${value}`}
          onClick={() => toggleFilter(param, value)}
          title={`${label}: ${value}`}
        >
          {value}
        </Chips>
      ))}
    </div>
  );
};
