import { useQueryStates } from "nuqs";

import { sortParamParser } from "@/lib/params";

export const useSort = () => {
  return useQueryStates(
    {
      sort: sortParamParser.withDefault("relevance"),
    },
    {
      history: "push",
      clearOnDefault: true,
      shallow: false,
    },
  );
};
