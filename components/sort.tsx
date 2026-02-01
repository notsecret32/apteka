"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptionLabels } from "@/constants/labels";
import { useSort } from "@/hooks/use-sort";
import { SortOption } from "@/lib/types";

export const Sort = () => {
  const [{ sort }, setSort] = useSort();

  return (
    <Select
      value={sort}
      onValueChange={(e) => setSort({ sort: e as SortOption })}
    >
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
