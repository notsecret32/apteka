import { ITEMS_PER_PAGE } from "@/constants/settings";
import { FilterParams, Pagination, Product, SearchParams } from "@/lib/types";
import { filterProducts, getFilters, sortProducts } from "@/lib/utils";

type GetProductsOptions = SearchParams;

interface GetProductsReturn {
  products: Product[];
  filters: FilterParams;
  pagination: Pagination;
  isError: boolean;
}

export async function getProducts(
  params?: GetProductsOptions,
): Promise<GetProductsReturn> {
  const res = await fetch("http://localhost:9080/api/products", {
    cache: "force-cache",
  });

  if (!res.ok) {
    return {
      products: [],
      filters: {},
      pagination: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
      isError: true,
    };
  }

  let products: Product[] = await res.json();

  const filters = getFilters(products);

  if (params) {
    products = filterProducts(products, params);
    products = sortProducts(products, params.sort);
  }

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(params?.page || 1, totalPages || 1));
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  products = products.slice(offset, offset + ITEMS_PER_PAGE);

  return {
    products,
    filters,
    pagination: {
      totalItems,
      totalPages,
      currentPage,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
    isError: false,
  };
}
