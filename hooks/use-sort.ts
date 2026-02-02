import { sortOptionParser } from "@/lib/params";
import { useQueryStates } from "nuqs";

export const useSort = () => {
  return useQueryStates(
    {
      sort: sortOptionParser.withDefault("relevance"),
    },
    {
      history: "push",
      clearOnDefault: true,
      shallow: false,
    },
  );
};
