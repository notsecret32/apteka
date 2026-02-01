"use client";

import { useQueryState } from "nuqs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/lib/types";
import { sortOptionParser } from "@/lib/params";
import { sortOptionLabels } from "@/constants/labels";

interface SortProps {
  onValueChange?: (value: string) => void;
}

export const Sort = ({ onValueChange }: SortProps) => {
  const [sortOption, setSortOption] = useQueryState(
    "sort",
    sortOptionParser.withDefault("relevance"),
  );

  const handleChange = (value: string) => {
    setSortOption(value as SortOption);
    onValueChange?.(value);
  };

  return (
    <Select value={sortOption} onValueChange={handleChange}>
      <SelectTrigger className="w-full max-w-48 bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {Object.entries(sortOptionLabels).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
