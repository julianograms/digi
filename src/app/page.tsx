"use client";
import ListItem from "./components/ListItem";
import useProducts from "./hooks/useProducts";
import { IProduct } from "./types/IProduct";

export default function Home() {
  const { heros, products } = useProducts();

  const heroList = heros.map((product: IProduct) => {
    return <ListItem key={product._id} item={product} />;
  });

  const productList = products.map((product) => {
    return <ListItem key={product._id} item={product} />;
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="text-6xl">Best Deals</div>

      <div>{heroList}</div>
      <div className="w-full border-solid border-t-2 mt-8 mb-8"></div>
      <div className="text-4xl mb-4">Lorem Ipsum products</div>
      <div className="flex flex-col md:flex-row  w-full max-w-[1000px] md:flex-wrap items-center justify-between">
        {productList}
      </div>
    </main>
  );
}
