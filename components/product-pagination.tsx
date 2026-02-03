"use client";

import { Pagination as PaginationType } from "@/lib/types";
import { usePagination } from "@/hooks/use-pagination";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

type ProductPaginationProps = PaginationType;

export const ProductPagination = ({ totalPages }: ProductPaginationProps) => {
  const { pageNumber, setPageNumber } = usePagination();

  if (totalPages < 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent className="flex items-center justify-center xl:mt-8 mt-4 gap-1">
        {pages.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              onClick={() => setPageNumber(number)}
              isActive={pageNumber === number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};
