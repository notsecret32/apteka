import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

export const useFilter = () => {
  return useQueryStates(
    {
      brand: parseAsArrayOf(parseAsString).withDefault([]),
      country: parseAsArrayOf(parseAsString).withDefault([]),
      dossage: parseAsArrayOf(parseAsString).withDefault([]),
      releaseForm: parseAsArrayOf(parseAsString).withDefault([]),
      storageTemperature: parseAsArrayOf(parseAsString).withDefault([]),
      quantityPerPackage: parseAsArrayOf(parseAsString).withDefault([]),
      expirationDate: parseAsArrayOf(parseAsString).withDefault([]),
      isByPrescription: parseAsArrayOf(parseAsString).withDefault([]),
      manufacturer: parseAsArrayOf(parseAsString).withDefault([]),
    },
    {
      history: "push",
      clearOnDefault: true,
      shallow: false,
    },
  );
};
