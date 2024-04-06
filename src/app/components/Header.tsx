import { IProduct } from "../types/IProduct";
import CartIcon from "./CartIcon";

export default function Header() {
  return (
    <div className="fixed h-16 bg-black w-full flex items-center justify-between">
      <div className="text-white pl-5">DIGI</div>
      <CartIcon />
    </div>
  );
}
