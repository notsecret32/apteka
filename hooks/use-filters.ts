import { useQueryStates } from "nuqs";

import { parseAsFilter } from "@/lib/params";
import { FilterParamKey } from "@/lib/types";

export const useFilters = () => {
  const [filters, setFilters] = useQueryStates(
    {
      brand: parseAsFilter.withDefault([]),
      country: parseAsFilter.withDefault([]),
      dossage: parseAsFilter.withDefault([]),
      expirationDate: parseAsFilter.withDefault([]),
      isByPrescription: parseAsFilter.withDefault([]),
      manufacturer: parseAsFilter.withDefault([]),
      quantityPerPackage: parseAsFilter.withDefault([]),
      releaseForm: parseAsFilter.withDefault([]),
      storageTemperature: parseAsFilter.withDefault([]),
    },
    {
      history: "push",
      shallow: false,
    },
  );

  const addFilter = (key: FilterParamKey, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[key] || [];
      const newValues = [...new Set([...currentValues, value])];
      return { [key]: newValues };
    });
  };

  const removeFilter = (key: FilterParamKey, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[key] || [];
      const newValues = currentValues.filter(
        (prevValue) => prevValue !== value,
      );
      return { [key]: newValues };
    });
  };

  const toggleFilter = (key: FilterParamKey, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[key] || [];
      const isActive = currentValues.includes(value);

      if (isActive) {
        const newValues = currentValues.filter(
          (prevValue) => prevValue !== value,
        );
        return { [key]: newValues };
      } else {
        const newValues = [...new Set([...currentValues, value])];
        return { [key]: newValues };
      }
    });
  };

  const resetFilters = () => {
    setFilters({
      brand: [],
      country: [],
      dossage: [],
      expirationDate: [],
      isByPrescription: [],
      manufacturer: [],
      quantityPerPackage: [],
      releaseForm: [],
      storageTemperature: [],
    });
  };

  return {
    filters,
    setFilters,
    addFilter,
    removeFilter,
    toggleFilter,
    resetFilters,
  };
};
