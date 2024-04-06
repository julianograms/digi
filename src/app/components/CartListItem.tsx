import Image from "next/image";

import { CartItem } from "../context/CartContext";

export default function CartListItem({ product }: { product: CartItem }) {
  return (
    <div key={product.item._id} className="border-b w-full cart-list-grid">
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <Image src={product.item.image} width={40} height={40} alt={"cart"} />
      </div>
      <div className="flex items-center content-center pl-2">
        <div className="text-center">{product.item.name}</div>
      </div>
      <div className="p-2 bg-gray-300 text-center">{product.count}</div>
      <div className="flex items-center content-center">
        <div className="ml-auto">{`$ ${(
          product.item.price * product.count
        ).toFixed(2)}`}</div>
      </div>
    </div>
  );
}
