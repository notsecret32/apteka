import { createMultiParser, parseAsStringLiteral } from "nuqs";

const sortOptionsArray = ["relevance", "price-asc", "price-desc"] as const;

export const sortOptionParser = parseAsStringLiteral(
  sortOptionsArray,
).withOptions({
  clearOnDefault: true,
  history: "push",
  shallow: false,
});
