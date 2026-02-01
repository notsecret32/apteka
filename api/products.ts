import { Product } from "@/lib/types";

export async function getProducts(): Promise<Product[] | null> {
  const data = await fetch("http://localhost:9080/api/products");

  if (!data.ok) {
    return null;
  }

  return (await data.json()) as Product[];
}
