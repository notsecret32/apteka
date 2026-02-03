import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  Entries,
  FilterParamKey,
  FilterParams,
  Product,
  SearchParams,
  SortParams,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFilters(products: Product[]): Partial<FilterParams> {
  const filters = new Map<FilterParamKey, Set<string>>();

  for (const product of products) {
    for (const [key, value] of Object.entries(
      product.characteristics,
    ) as Entries<typeof product.characteristics>) {
      if (!filters.has(key)) {
        filters.set(key, new Set());
      }

      filters.get(key)?.add(value);
    }
  }

  const result: Partial<FilterParams> = {};
  filters.forEach((values, key) => {
    result[key] = Array.from(values).sort();
  });

  return result;
}

export function sortProducts(
  products: Product[],
  option: SortParams,
): Product[] {
  if (option === "price-asc") {
    return products.sort((a, b) => a.price - b.price);
  }

  if (option === "price-desc") {
    return products.sort((a, b) => b.price - a.price);
  }

  return products;
}

export function filterProducts(
  products: Product[],
  filters: SearchParams,
): Product[] {
  if (!filters || Object.keys(filters).length === 0) return products;

  const { sort: _, page: __, ...filterParams } = filters;

  return products.filter((product) => {
    const filterEntries = Object.entries(filterParams) as [
      FilterParamKey,
      string[],
    ][];

    const activeFilters = filterEntries.filter(
      ([_, values]) => values && values.length > 0,
    );

    if (activeFilters.length === 0) return true;

    return activeFilters.every(([param, filterValues]) => {
      const productValue = product.characteristics[param];

      return Array.isArray(filterValues)
        ? filterValues.some((filterValue) => filterValue === productValue)
        : filterValues === productValue;
    });
  });
}
