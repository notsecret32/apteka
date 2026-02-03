import { parseAsInteger, useQueryState } from "nuqs";

export const usePagination = () => {
  const [pageNumber, setPageNumber] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({
      clearOnDefault: true,
      history: "push",
      shallow: false,
    }),
  );

  return { pageNumber, setPageNumber };
};
