import { Filters } from "@/components/filters";
import { ProductList } from "@/components/product-list";
import { Sort } from "@/components/sort";

export default function Home() {
  return (
    <main className="flex-1 xl:mb-8 mb-6 mt-4">
      <div className="mx-auto w-full py-0 max-w-full xxl:max-w-[1490px] xl:px-10 px-4">
        <div className="xl:mt-1 mt-2 mb-4 flex xl:justify-end items-start">
          <Sort />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-[270px_1fr]">
          <Filters />
          <div className="max-xl:-mx-4">
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}
