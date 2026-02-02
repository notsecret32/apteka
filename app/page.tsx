import { getProducts } from "@/api/products";
import { Filters } from "@/components/filters";
import { ProductList } from "@/components/product-list";
import { Sort } from "@/components/sort";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const params = await searchParams;
  const products = await getProducts();

  if (!products) {
    return new Error("Произошла ошибка при попытке получить данные :(");
  }

  return (
    <main className="flex-1 xl:mb-8 mb-6 mt-4">
      <div className="mx-auto w-full py-0 max-w-full xl:max-w-372.5 xl:px-10 px-4">
        <div className="xl:mt-1 mt-2 mb-4 flex xl:justify-end items-start">
          <Sort />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-[270px_1fr]">
          <Filters
            filters={{
              brand: [],
              country: [],
              dossage: [],
              expirationDate: [],
              isByPrescription: [],
              manufacturer: [],
              quantityPerPackage: [],
              releaseForm: [],
              storageTemperature: [],
            }}
          />
          <div className="max-xl:-mx-4">
            <ProductList products={[]} />
          </div>
        </div>
      </div>
    </main>
  );
}
