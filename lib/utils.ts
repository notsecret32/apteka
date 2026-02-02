import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  FilterKey,
  FilterOptions,
  Product,
  SearchParams,
  SortOption,
} from "./types";

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

export function sortProducts(
  products: Product[],
  option: SortOption,
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
  // Получаем только ключи фильтров (исключая 'sort')
  const filterKeys = Object.keys(filters).filter(
    (key) => key !== "sort",
  ) as FilterKey[];

  // Если нет фильтров (или только сортировка), возвращаем все товары
  if (filterKeys.length === 0) {
    return products;
  }

  return products.filter((product) => {
    for (const filterKey of filterKeys) {
      const filterValue = filters[filterKey];

      if (!filterValue || filterValue.trim() === "") {
        continue;
      }

      const filterValues = filterValue.split(",").map((v) => v.trim());
      const productValue = product.characteristics[filterKey];

      const hasMatch = filterValues.some((filterVal) =>
        productValue.includes(filterVal),
      );

      if (!hasMatch) {
        return false;
      }
    }

    return true;
  });
}
