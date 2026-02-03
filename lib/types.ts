import { inferParserType } from "nuqs";

import { sortParamParser } from "./params";

export type Characteristic = {
  country: string;
  brand: string;
  dossage: string;
  releaseForm: string;
  storageTemperature: string;
  quantityPerPackage: string;
  expirationDate: string;
  isByPrescription: string;
  manufacturer: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  characteristics: Characteristic;
};

export type FilterParamKey = keyof Characteristic;

export type SortParams = inferParserType<typeof sortParamParser>;

export type FilterParams = Partial<Record<FilterParamKey, string[]>>;

export type SearchParams = FilterParams & { sort: SortParams; page: number };

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Pagination = {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
