import { createMultiParser, parseAsStringLiteral } from "nuqs";

const sortParamsArray = ["relevance", "price-asc", "price-desc"] as const;

export const sortParamParser = parseAsStringLiteral(sortParamsArray)
  .withOptions({
    clearOnDefault: true,
    history: "push",
    shallow: false,
  })
  .withDefault("relevance");

export const parseAsFilter = createMultiParser({
  parse: (values) => {
    const filtered = values.filter((v) => v && v.length > 0);
    return filtered.length === 0 ? null : filtered;
  },
  serialize: (value) => {
    if (!value || value.length === 0) return [];
    return value;
  },
  eq: (a, b) => a.length === b.length,
});
