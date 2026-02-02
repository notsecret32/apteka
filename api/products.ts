import { FilterParams, Product, SearchParams } from "@/lib/types";
import { filterProducts, getFilters, sortProducts } from "@/lib/utils";

type GetProductsOptions = SearchParams;

interface GetProductsReturn {
  products: Product[];
  filters: FilterParams;
  pagination: any;
  isError: boolean;
}

export async function getProducts(
  params?: GetProductsOptions,
): Promise<GetProductsReturn> {
  const res = await fetch("http://localhost:9080/api/products", {
    cache: "force-cache",
  });

  if (!res.ok) {
    return { products: [], filters: {}, pagination: {}, isError: true };
  }

  let products: Product[] = await res.json();

  const filters = getFilters(products);

  if (params) {
    products = filterProducts(products, params);
    products = sortProducts(products, params.sort);
  }

  return { products, filters, pagination: {}, isError: false };
}
