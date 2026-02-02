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

export type SearchParams = { sort: SortParams } & FilterParams;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
