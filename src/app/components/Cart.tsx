import Image from "next/image";

import { CartItem, useCartContext } from "../context/CartContext";
import CartListItem from "./CartListItem";
import { useMemo } from "react";

export default function Cart() {
  const { toggleCart, products } = useCartContext();
  const emptyList = useMemo(
    () =>
      !products.length ? (
        <div className="text-center mt-4 mb-4 text-lg text-gray-600">Empty</div>
      ) : null,
    [products.length]
  );
  const totalPrice = products.reduce(
    (acc: number, product: CartItem) =>
      acc + product.count * product.item.price,
    0
  );

  const cartList = products.map((product: CartItem) => (
    <CartListItem key={product.item._id} product={product} />
  ));
  return (
    <div
      className="fixed right-0 h-screen md:h-fit w-full md:w-[25rem] z-10  bg-white border border-black"
      data-testid="cart-modal"
    >
      <div className="h-16 flex items-center justify-between  border-b-2 border-black">
        <div className="text-black text-2xl pl-5">CART</div>
        <button onClick={toggleCart}>
          <Image src="/close.png" width={40} height={40} alt={"cart"} />
        </button>
      </div>
      <div className="flex flex-col w-full">
        {emptyList}
        {cartList}
      </div>
      <div className="flex text-2xl mt-4 mb-4">
        <div className="ml-auto pl-6 pr-2">Total:</div>
        <div>{`$${totalPrice.toFixed(2)}`}</div>
      </div>
    </div>
  );
}
