import { getProducts } from "@/api/products";
import { FilterChips } from "@/components/filter-chips";
import { Filters } from "@/components/filters";
import { ProductList } from "@/components/product-list";
import { ProductPagination } from "@/components/product-pagination";
import { Sort } from "@/components/sort";
import { SearchParams } from "@/lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const { isError, filters, products, pagination } = await getProducts(params);

  if (isError) {
    return new Error();
  }

  console.log(params);

  return (
    <main className="flex-1 xl:mb-8 mb-6 mt-4">
      <div className="mx-auto w-full py-0 max-w-full xl:max-w-372.5 xl:px-10 px-4">
        <div className="xl:mt-1 mt-2 mb-4 flex xl:justify-end items-start">
          <FilterChips />
          <Sort />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-[270px_1fr]">
          <Filters filters={filters} />
          <div className="max-xl:-mx-4">
            <ProductList products={products} />
            <ProductPagination {...pagination} />
          </div>
        </div>
      </div>
    </main>
  );
}
