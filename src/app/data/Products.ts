import productList from "./products.json";
import { IProduct } from "../types/IProduct";

const formatProduct = (product: any) => {
  return {
    ...product,
    price: parseFloat(product.price),
  };
};

const [heros, products] = productList.reduce(
  (acc: [IProduct[], IProduct[]], _product) => {
    const product: IProduct = formatProduct(_product);
    if (product.hero) {
      acc[0].push(product);
    } else {
      acc[1].push(product);
    }

    return acc;
  },
  [[], []]
);

export { heros, products };
