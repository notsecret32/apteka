import { Characteristic } from "@/lib/types";

export const filterLabels: Record<keyof Characteristic, string> = {
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
