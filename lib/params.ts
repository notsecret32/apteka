import { parseAsStringLiteral } from "nuqs";
import { createLoader } from "nuqs/server";

const sortOptionsArray = ["relevance", "price-asc", "price-desc"] as const;

export const sortOptionParser = parseAsStringLiteral(
  sortOptionsArray,
).withOptions({
  clearOnDefault: true,
  history: "push",
});
