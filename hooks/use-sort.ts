import { useQueryStates } from "nuqs";

import { sortParamParser } from "@/lib/params";
import { SortParams } from "@/lib/types";

import { usePagination } from "./use-pagination";

export const useSort = () => {
  const { setPageNumber } = usePagination();

  const [{ sort }, setQueryState] = useQueryStates(
    {
      sort: sortParamParser.withDefault("relevance"),
    },
    {
      history: "push",
      clearOnDefault: true,
      shallow: false,
    },
  );

  const setSort = (param: SortParams) => {
    setQueryState({ sort: param });
    setPageNumber(1);
  };

  return { sort, setSort };
};
