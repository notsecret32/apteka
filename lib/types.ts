import { inferParserType } from "nuqs";

import { sortOptionParser } from "./params";

export type SortOption = NonNullable<inferParserType<typeof sortOptionParser>>;

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

export type FilterKey = keyof Characteristic;

export type FilterOptions = Record<FilterKey, string[]>;

export type FilterParams = {
  [Key in FilterKey]: string;
};

export type SearchParams = {
  sort: SortOption;
} & FilterParams;
