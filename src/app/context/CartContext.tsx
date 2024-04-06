import { useContext, createContext, useState } from "react";
import { IProduct } from "../types/IProduct";
import Cart from "../components/Cart";

export type CartItem = { item: IProduct; count: number };

type CartContextType = {
  addToCart: (product: IProduct) => void;
  toggleCart: () => void;
  products: CartItem[];
};

export const CartContext = createContext({} as CartContextType);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("No provider");

  return context;
};

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productToAdd: IProduct) => {
    const foundIndex = products.findIndex(
      (product) => product.item._id === productToAdd._id
    );
    const isFound = foundIndex !== -1;
    if (isFound) {
      products[foundIndex].count++;
      setProducts([...products]);
    } else {
      setProducts([
        ...products,
        {
          item: productToAdd,
          count: 1,
        },
      ]);
    }
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <CartContext.Provider value={{ products, addToCart, toggleCart }}>
      {showCart ? <Cart /> : null}
      {children}
    </CartContext.Provider>
  );
}
