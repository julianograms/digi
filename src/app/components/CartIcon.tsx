"use client";
import Image from "next/image";
import { CartItem, useCartContext } from "../context/CartContext";
import { useMemo } from "react";

export default function CartIcon() {
  const { products, toggleCart } = useCartContext();
  const count = products.reduce((acc: number, product: CartItem) => {
    return product.count + acc;
  }, 0);

  const countIconSize = useMemo(() => {
    if (count >= 10) {
      return "w-8";
    } else {
      return "w-[1.55rem]";
    }
  }, [count]);

  return (
    <button
      className="relative bg-white h-full flex items-center content-center"
      onClick={toggleCart}
    >
      {count ? (
        <div
          className={`absolute mb-8 ml-auto mr-auto ${countIconSize} left-0 right-0 bg-red-600 rounded-full text-center`}
        >
          <div data-testid="cart-counter">{count}</div>
        </div>
      ) : null}

      <div className={`${count ? "mt-4" : ""}`}>
        <Image src="/cart.png" width={40} height={40} alt={"cart"} />
      </div>
    </button>
  );
}
