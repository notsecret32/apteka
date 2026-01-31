import { ProductCard } from "./product-card";

export const ProductList = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-4 gap-1 h-fit xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};
