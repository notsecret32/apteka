import { FilterKey, SortOption } from "@/lib/types";

export const filterLabels: Record<FilterKey, string> = {
  country: "Страна производства",
  brand: "Бренд",
  dossage: "Дозировка",
  releaseForm: "Форма выпуска",
  storageTemperature: "Температура хранения",
  quantityPerPackage: "Количество в упаковке",
  expirationDate: "Срок годности",
  isByPrescription: "Требуется ли рецепт",
  manufacturer: "Производитель",
};

export const sortOptionLabels: Record<SortOption, string> = {
  relevance: "По релевантности",
  "price-asc": "Сначала дешевые",
  "price-desc": "Сначала дорогие",
};
