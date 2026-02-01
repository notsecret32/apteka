import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FilterOptions, Product } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFilters(products: Product[]): FilterOptions {
  const filters = new Map<string, Set<string>>();

  for (const product of products) {
    for (const [key, value] of Object.entries(product.characteristics)) {
      if (!filters.has(key)) {
        filters.set(key, new Set());
      }

      filters.get(key)?.add(value);
    }
  }

  const result: Record<string, string[]> = {};
  filters.forEach((values, key) => {
    result[key] = Array.from(values).sort();
  });

  return result as FilterOptions;
}
