"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortOption } from "@/lib/types";

const sortOptions: Record<SortOption, string> = {
  relevance: "По релевантности",
  "price-asc": "Сначала дешевые",
  "price-desc": "Сначала дорогие",
};

interface SortProps {
  onValueChange?: (value: string) => void;
}

export const Sort = ({ onValueChange }: SortProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("relevance");

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
          {Object.entries(sortOptions).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
